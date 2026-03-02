import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Question as BackendQuestion } from '../backend';
import { questions as staticQuestions, type Question } from '../data/questions';

export function useGetAdminQuestions() {
  const { actor, isFetching } = useActor();

  return useQuery<BackendQuestion[]>({
    queryKey: ['adminQuestions'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAdminQuestions();
    },
    enabled: !!actor && !isFetching,
    retry: false,
  });
}

export function useAddQuestion() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (question: BackendQuestion) => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.addQuestion(question);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['adminQuestions'] });
      queryClient.invalidateQueries({ queryKey: ['allQuestions'] });
    },
  });
}

/**
 * Converts a backend Question (bigint fields, answerOptions/questionText)
 * to the local Question format (number fields, options/text).
 */
function convertBackendQuestion(bq: BackendQuestion): Question {
  return {
    id: Number(bq.id) + 100000, // offset to avoid ID collisions with static questions
    text: bq.questionText,
    options: bq.answerOptions as [string, string, string, string],
    correctIndex: Number(bq.correctAnswerIndex),
    topic: bq.topic,
    year: Number(bq.year),
  };
}

/**
 * Fetches all questions from the backend (public endpoint) and merges them
 * with the static local questions, deduplicating by question text.
 */
export function useAllQuestions() {
  const { actor, isFetching } = useActor();

  return useQuery<Question[]>({
    queryKey: ['allQuestions'],
    queryFn: async () => {
      if (!actor) return staticQuestions;

      try {
        const backendQuestions = await actor.getQuestions();
        const converted = backendQuestions.map(convertBackendQuestion);

        // Deduplicate: if a backend question text matches a static one, skip it
        const staticTexts = new Set(staticQuestions.map((q) => q.text.trim().toLowerCase()));
        const uniqueBackend = converted.filter(
          (q) => !staticTexts.has(q.text.trim().toLowerCase())
        );

        return [...staticQuestions, ...uniqueBackend];
      } catch {
        return staticQuestions;
      }
    },
    enabled: !!actor && !isFetching,
  });
}
