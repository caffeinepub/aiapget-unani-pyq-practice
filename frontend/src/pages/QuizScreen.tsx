import { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import type { Question } from '../data/questions';

interface QuizScreenProps {
  questions: Question[];
  onComplete: (answers: number[], startTime: number) => void;
  onBack: () => void;
}

const OPTION_LABELS = ['A', 'B', 'C', 'D'];

export default function QuizScreen({ questions, onComplete, onBack }: QuizScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [startTime] = useState(() => Date.now());

  const current = questions[currentIndex];
  const selectedAnswer = answers[currentIndex];
  const isAnswered = selectedAnswer !== -1;
  const isLast = currentIndex === questions.length - 1;
  const progress = ((currentIndex + (isAnswered ? 1 : 0)) / questions.length) * 100;

  const handleSelect = (optionIndex: number) => {
    if (isAnswered) return;
    const newAnswers = [...answers];
    newAnswers[currentIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (isLast) {
      onComplete(answers, startTime);
    } else {
      setCurrentIndex((i) => i + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Go back"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-body opacity-90">
                Question {currentIndex + 1} of {questions.length}
              </span>
              <span className="text-xs font-body opacity-70 bg-white/10 px-2 py-0.5 rounded-full">
                {current.topic}
              </span>
            </div>
            <Progress value={progress} className="h-1.5 bg-white/20" />
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-6 flex flex-col gap-5">
        {/* Question Card */}
        <div className="bg-card border border-border rounded-2xl p-5 shadow-xs">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold font-heading">
              {currentIndex + 1}
            </span>
            <p className="text-foreground font-body text-base leading-relaxed pt-1">
              {current.text}
            </p>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-xs text-muted-foreground font-body bg-muted px-2 py-0.5 rounded-full">
              Year: {current.year}
            </span>
          </div>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {current.options.map((option, idx) => {
            const isCorrect = idx === current.correctIndex;
            const isSelected = idx === selectedAnswer;

            let optionClass =
              'w-full text-left border rounded-xl p-4 flex items-center gap-3 transition-all duration-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50';

            if (!isAnswered) {
              optionClass += ' bg-card border-border hover:border-gold hover:bg-gold/5 cursor-pointer';
            } else if (isCorrect) {
              optionClass += ' bg-success/10 border-success cursor-default';
            } else if (isSelected) {
              optionClass += ' bg-destructive/10 border-destructive text-destructive-foreground cursor-default';
            } else {
              optionClass += ' bg-card border-border opacity-60 cursor-default';
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={isAnswered}
                className={optionClass}
              >
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-heading border transition-colors ${
                    isAnswered && isCorrect
                      ? 'bg-success border-success text-white'
                      : isAnswered && isSelected
                      ? 'bg-destructive border-destructive text-white'
                      : 'border-border bg-muted text-muted-foreground'
                  }`}
                >
                  {OPTION_LABELS[idx]}
                </span>
                <span
                  className={`flex-1 ${
                    isAnswered && isCorrect
                      ? 'text-success font-bold'
                      : ''
                  }`}
                >
                  {option}
                </span>
                {isAnswered && isCorrect && (
                  <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {isAnswered && current.explanation && (
          <div className="bg-teal/10 border border-teal/30 rounded-xl p-4">
            <p className="text-xs font-semibold text-teal uppercase tracking-wide mb-1 font-heading">
              Explanation
            </p>
            <p className="text-sm text-foreground font-body leading-relaxed">
              {current.explanation}
            </p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between pt-2">
          <Button
            variant="outline"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>

          <Button
            onClick={handleNext}
            disabled={!isAnswered}
            className="gap-2 bg-primary hover:bg-primary/90"
          >
            {isLast ? 'Finish Quiz' : 'Next'}
            {!isLast && <ChevronRight className="w-4 h-4" />}
          </Button>
        </div>
      </main>
    </div>
  );
}
