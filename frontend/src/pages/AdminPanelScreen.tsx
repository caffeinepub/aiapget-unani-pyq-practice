import { useState } from 'react';
import { ArrowLeft, PlusCircle, BookOpen, Loader2, AlertCircle, CheckCircle2, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { TOPICS, YEARS } from '../data/questions';
import { useAddQuestion, useGetAdminQuestions } from '../hooks/useAdminQueries';

interface AdminPanelScreenProps {
  onBack: () => void;
}

interface FormState {
  questionText: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAnswerIndex: string;
  topic: string;
  year: string;
}

const EMPTY_FORM: FormState = {
  questionText: '',
  optionA: '',
  optionB: '',
  optionC: '',
  optionD: '',
  correctAnswerIndex: '',
  topic: '',
  year: '',
};

type NotificationType = 'success' | 'error' | null;

export default function AdminPanelScreen({ onBack }: AdminPanelScreenProps) {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [notification, setNotification] = useState<{ type: NotificationType; message: string }>({
    type: null,
    message: '',
  });

  const { data: adminQuestions, isLoading: questionsLoading, error: questionsError } = useGetAdminQuestions();
  const addQuestion = useAddQuestion();

  const setField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const showNotification = (type: NotificationType, message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification({ type: null, message: '' }), 4000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.questionText.trim() ||
      !form.optionA.trim() ||
      !form.optionB.trim() ||
      !form.optionC.trim() ||
      !form.optionD.trim() ||
      !form.correctAnswerIndex ||
      !form.topic ||
      !form.year
    ) {
      showNotification('error', 'Please fill in all fields before submitting.');
      return;
    }

    const nextId = BigInt(Date.now());

    try {
      await addQuestion.mutateAsync({
        id: nextId,
        questionText: form.questionText.trim(),
        answerOptions: [
          form.optionA.trim(),
          form.optionB.trim(),
          form.optionC.trim(),
          form.optionD.trim(),
        ],
        correctAnswerIndex: BigInt(parseInt(form.correctAnswerIndex, 10)),
        topic: form.topic,
        year: BigInt(parseInt(form.year, 10)),
      });
      setForm(EMPTY_FORM);
      showNotification('success', 'Question added successfully!');
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to add question. Please try again.';
      showNotification('error', message);
    }
  };

  const correctAnswerLabel = (index: number) => {
    const labels = ['A', 'B', 'C', 'D'];
    return labels[index] ?? String(index);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-md">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-1.5 rounded-lg hover:bg-primary-foreground/10 transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <img
            src="/assets/generated/app-logo.dim_128x128.png"
            alt="AIAPGET Logo"
            className="w-9 h-9 rounded-full border-2 border-gold object-cover"
          />
          <div>
            <h1 className="text-lg font-heading font-bold tracking-wide leading-tight">Question Manager</h1>
            <p className="text-xs opacity-80 font-body">Add & Manage Questions</p>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 space-y-6">
        {/* Notification Banner */}
        {notification.type && (
          <div
            className={`flex items-center gap-3 px-4 py-3 rounded-xl border font-body text-sm ${
              notification.type === 'success'
                ? 'bg-success/10 border-success/30 text-success'
                : 'bg-destructive/10 border-destructive/30 text-destructive'
            }`}
          >
            {notification.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
            )}
            <span>{notification.message}</span>
          </div>
        )}

        {/* Add Question Form */}
        <Card className="border-border shadow-xs">
          <CardHeader className="pb-3">
            <CardTitle className="font-heading text-foreground flex items-center gap-2">
              <PlusCircle className="w-5 h-5 text-gold" />
              Add New Question
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Question Text */}
              <div className="space-y-1.5">
                <Label htmlFor="questionText" className="font-body text-sm font-medium text-foreground">
                  Question Text <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="questionText"
                  placeholder="Enter the question text..."
                  value={form.questionText}
                  onChange={(e) => setField('questionText', e.target.value)}
                  rows={3}
                  className="font-body resize-none"
                />
              </div>

              {/* Options */}
              <div className="space-y-3">
                <Label className="font-body text-sm font-medium text-foreground">
                  Answer Options <span className="text-destructive">*</span>
                </Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(['A', 'B', 'C', 'D'] as const).map((letter) => {
                    const fieldKey = `option${letter}` as keyof FormState;
                    return (
                      <div key={letter} className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold font-heading flex items-center justify-center flex-shrink-0">
                          {letter}
                        </span>
                        <Input
                          placeholder={`Option ${letter}`}
                          value={form[fieldKey]}
                          onChange={(e) => setField(fieldKey, e.target.value)}
                          className="font-body"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Correct Answer, Topic, Year */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Correct Answer */}
                <div className="space-y-1.5">
                  <Label className="font-body text-sm font-medium text-foreground">
                    Correct Answer <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={form.correctAnswerIndex}
                    onValueChange={(v) => setField('correctAnswerIndex', v)}
                  >
                    <SelectTrigger className="font-body">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">A</SelectItem>
                      <SelectItem value="1">B</SelectItem>
                      <SelectItem value="2">C</SelectItem>
                      <SelectItem value="3">D</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Topic */}
                <div className="space-y-1.5">
                  <Label className="font-body text-sm font-medium text-foreground">
                    Topic <span className="text-destructive">*</span>
                  </Label>
                  <Select value={form.topic} onValueChange={(v) => setField('topic', v)}>
                    <SelectTrigger className="font-body">
                      <SelectValue placeholder="Select topic..." />
                    </SelectTrigger>
                    <SelectContent>
                      {TOPICS.map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Year */}
                <div className="space-y-1.5">
                  <Label className="font-body text-sm font-medium text-foreground">
                    Year <span className="text-destructive">*</span>
                  </Label>
                  <Select value={form.year} onValueChange={(v) => setField('year', v)}>
                    <SelectTrigger className="font-body">
                      <SelectValue placeholder="Select year..." />
                    </SelectTrigger>
                    <SelectContent>
                      {YEARS.map((y) => (
                        <SelectItem key={y} value={String(y)}>
                          {y}
                        </SelectItem>
                      ))}
                      {/* Allow future years */}
                      {[2024, 2025, 2026].map((y) => (
                        <SelectItem key={y} value={String(y)}>
                          {y}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                type="submit"
                disabled={addQuestion.isPending}
                className="w-full sm:w-auto font-body"
              >
                {addQuestion.isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Adding Question...
                  </>
                ) : (
                  <>
                    <PlusCircle className="w-4 h-4 mr-2" />
                    Add Question
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Existing Questions List */}
        <Card className="border-border shadow-xs">
          <CardHeader className="pb-3">
            <CardTitle className="font-heading text-foreground flex items-center gap-2">
              <List className="w-5 h-5 text-gold" />
              Questions in Database
              {adminQuestions && (
                <Badge variant="secondary" className="ml-auto font-body text-xs">
                  {adminQuestions.length} total
                </Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {questionsLoading && (
              <div className="flex items-center justify-center py-10 gap-2 text-muted-foreground font-body text-sm">
                <Loader2 className="w-5 h-5 animate-spin" />
                Loading questions...
              </div>
            )}

            {questionsError && (
              <div className="flex items-center gap-2 py-6 text-destructive font-body text-sm">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span>
                  {questionsError instanceof Error
                    ? questionsError.message
                    : 'Failed to load questions. Please try again.'}
                </span>
              </div>
            )}

            {!questionsLoading && !questionsError && adminQuestions && adminQuestions.length === 0 && (
              <div className="flex flex-col items-center justify-center py-10 gap-2 text-muted-foreground">
                <BookOpen className="w-10 h-10 opacity-30" />
                <p className="font-body text-sm">No questions in the database yet.</p>
                <p className="font-body text-xs opacity-70">Use the form above to add the first question.</p>
              </div>
            )}

            {!questionsLoading && !questionsError && adminQuestions && adminQuestions.length > 0 && (
              <ScrollArea className="h-[400px] pr-3">
                <div className="space-y-3">
                  {adminQuestions.map((q, idx) => (
                    <div key={String(q.id)}>
                      <div className="py-3">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <span className="text-xs font-bold text-muted-foreground font-body flex-shrink-0 mt-0.5">
                            #{idx + 1}
                          </span>
                          <p className="flex-1 text-sm font-body text-foreground leading-relaxed">
                            {q.questionText}
                          </p>
                          <div className="flex gap-1.5 flex-shrink-0">
                            <Badge variant="outline" className="font-body text-xs text-teal border-teal/30">
                              {q.topic}
                            </Badge>
                            <Badge variant="outline" className="font-body text-xs text-gold border-gold/30">
                              {String(q.year)}
                            </Badge>
                          </div>
                        </div>
                        <div className="ml-5 grid grid-cols-2 gap-1">
                          {q.answerOptions.map((opt, optIdx) => (
                            <div
                              key={optIdx}
                              className={`text-xs font-body px-2 py-1 rounded flex items-center gap-1.5 ${
                                BigInt(optIdx) === q.correctAnswerIndex
                                  ? 'bg-success/10 text-success font-medium'
                                  : 'text-muted-foreground'
                              }`}
                            >
                              <span className="font-bold">{correctAnswerLabel(optIdx)}.</span>
                              <span>{opt}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      {idx < adminQuestions.length - 1 && <Separator />}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            )}
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-4 px-4 text-center">
        <p className="text-xs text-muted-foreground font-body">
          © {new Date().getFullYear()} AIAPGET Unani PYQ Practice &nbsp;·&nbsp; Built with{' '}
          <span className="text-destructive">♥</span> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname || 'aiapget-unani-pyq')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
