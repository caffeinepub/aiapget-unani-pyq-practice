import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";
import { questions as staticQuestions, type Question } from "../data/questions";
import type { Question as BackendQuestion } from "../backend";

export function useGetAdminQuestions() {
  const { actor, isFetching } = useActor();

  return useQuery<BackendQuestion[]>({
    queryKey: ["adminQuestions"],
    queryFn: async () => {
      if (!actor) return [];
      try {
        return await actor.getQuestions();
      } catch {
        return [];
      }
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddQuestion() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (question: {
      questionText: string;
      answerOptions: string[];
      correctAnswerIndex: number;
      topic: string;
      year: string;
    }) => {
      if (!actor) throw new Error("Actor not available");

      const newQuestion: BackendQuestion = {
        id: BigInt(Date.now()),
        questionText: question.questionText,
        answerOptions: question.answerOptions,
        correctAnswerIndex: BigInt(question.correctAnswerIndex),
        topic: question.topic,
        year: String(question.year),
      };

      const result = await actor.addQuestion(newQuestion);
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminQuestions"] });
      queryClient.invalidateQueries({ queryKey: ["allQuestions"] });
    },
  });
}

/**
 * Converts a backend Question (bigint fields) to the local Question format.
 * Backend year is a string (e.g. "2023"), local year is a number.
 */
function convertBackendQuestion(bq: BackendQuestion, index: number): Question {
  const yearNum = parseInt(bq.year, 10);
  const options = bq.answerOptions;
  // Ensure we always have exactly 4 options for the tuple type
  const opts: [string, string, string, string] = [
    options[0] ?? "",
    options[1] ?? "",
    options[2] ?? "",
    options[3] ?? "",
  ];
  return {
    id: 100000 + index, // offset to avoid ID collisions with static questions
    text: bq.questionText,
    options: opts,
    correctIndex: Number(bq.correctAnswerIndex),
    topic: bq.topic,
    year: isNaN(yearNum) ? 0 : yearNum,
    explanation: "",
  };
}

/**
 * Fetches all questions from the backend (public endpoint) and merges them
 * with the static local questions, deduplicating by question text.
 */
export function useAllQuestions() {
  const { actor, isFetching } = useActor();

  return useQuery<Question[]>({
    queryKey: ["allQuestions"],
    queryFn: async () => {
      if (!actor) return staticQuestions;
      try {
        const backendQuestions = await actor.getQuestions();
        const converted = backendQuestions.map((bq, idx) =>
          convertBackendQuestion(bq, idx)
        );

        // Deduplicate: if a backend question text matches a static one, skip it
        const staticTexts = new Set(
          staticQuestions.map((q) => q.text.trim().toLowerCase())
        );
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
