import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

// Quiz attempt stored as [timestamp_seconds, correct_answers, total_questions]
export interface QuizAttempt {
  timestamp: number;
  correct: number;
  total: number;
}

const CHUNK_SIZE = 3; // Each attempt is 3 bigints

function encodeAttempts(attempts: QuizAttempt[]): bigint[] {
  return attempts.flatMap((a) => [BigInt(a.timestamp), BigInt(a.correct), BigInt(a.total)]);
}

function decodeAttempts(raw: bigint[]): QuizAttempt[] {
  const attempts: QuizAttempt[] = [];
  for (let i = 0; i + CHUNK_SIZE - 1 < raw.length; i += CHUNK_SIZE) {
    attempts.push({
      timestamp: Number(raw[i]),
      correct: Number(raw[i + 1]),
      total: Number(raw[i + 2]),
    });
  }
  return attempts;
}

export function useQuizHistory() {
  const { actor, isFetching } = useActor();

  return useQuery<QuizAttempt[]>({
    queryKey: ['quizHistory'],
    queryFn: async () => {
      if (!actor) return [];
      const raw = await actor.retrieveArray();
      return decodeAttempts(raw).reverse();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useRecordAttempt() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (attempt: QuizAttempt) => {
      if (!actor) throw new Error('Actor not initialized');
      const existing = await actor.retrieveArray();
      const newEntry: bigint[] = [BigInt(attempt.timestamp), BigInt(attempt.correct), BigInt(attempt.total)];
      await actor.storeArray([...existing, ...newEntry]);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['quizHistory'] });
    },
  });
}
