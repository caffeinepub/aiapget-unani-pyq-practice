import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomeScreen from './pages/HomeScreen';
import QuizScreen from './pages/QuizScreen';
import ResultsScreen from './pages/ResultsScreen';
import ReviewScreen from './pages/ReviewScreen';
import TopicBrowserScreen from './pages/TopicBrowserScreen';
import HistoryScreen from './pages/HistoryScreen';
import AdminPanelScreen from './pages/AdminPanelScreen';
import { type Question } from './data/questions';

export type Screen =
  | { name: 'home' }
  | { name: 'quiz'; questions: Question[] }
  | { name: 'results'; questions: Question[]; answers: number[]; startTime: number }
  | { name: 'review'; questions: Question[]; answers: number[] }
  | { name: 'topics' }
  | { name: 'history' }
  | { name: 'admin' };

const queryClient = new QueryClient();

function AppContent() {
  const [screen, setScreen] = useState<Screen>({ name: 'home' });

  const navigateTo = (s: Screen) => setScreen(s);

  if (screen.name === 'home') {
    return <HomeScreen onNavigate={navigateTo} />;
  }

  if (screen.name === 'quiz') {
    return (
      <QuizScreen
        questions={screen.questions}
        onComplete={(answers, startTime) =>
          navigateTo({ name: 'results', questions: screen.questions, answers, startTime })
        }
        onBack={() => navigateTo({ name: 'home' })}
      />
    );
  }

  if (screen.name === 'results') {
    return (
      <ResultsScreen
        questions={screen.questions}
        answers={screen.answers}
        startTime={screen.startTime}
        onReview={() =>
          navigateTo({ name: 'review', questions: screen.questions, answers: screen.answers })
        }
        onNewQuiz={() => navigateTo({ name: 'home' })}
      />
    );
  }

  if (screen.name === 'review') {
    return (
      <ReviewScreen
        questions={screen.questions}
        answers={screen.answers}
        onBack={() => navigateTo({ name: 'home' })}
      />
    );
  }

  if (screen.name === 'topics') {
    return (
      <TopicBrowserScreen
        onStartQuiz={(qs) => navigateTo({ name: 'quiz', questions: qs })}
        onBack={() => navigateTo({ name: 'home' })}
      />
    );
  }

  if (screen.name === 'history') {
    return <HistoryScreen onBack={() => navigateTo({ name: 'home' })} />;
  }

  if (screen.name === 'admin') {
    return <AdminPanelScreen onBack={() => navigateTo({ name: 'home' })} />;
  }

  return <HomeScreen onNavigate={navigateTo} />;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}
