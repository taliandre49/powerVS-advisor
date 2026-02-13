'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import QuestionCard from '@/components/QuestionCard';
import ProgressBar from '@/components/ProgressBar';
import { getQuestions, calculateRecommendation } from '@/lib/rulesEngine';

export default function Quiz() {
  const router = useRouter();
  const questions = getQuestions();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<string, any>>({});

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const canGoNext = answers[currentQuestion.id] !== undefined;

  const handleAnswer = (value:string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };

  const handleNext = () => {
    if (isLastQuestion) {
      // Calculate result and navigate to result page
      const result = calculateRecommendation(answers);
      // Store result in sessionStorage to pass to result page
      sessionStorage.setItem('powervs_result', JSON.stringify(result));
      router.push('/result');
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else {
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            PowerVS Fit Assessment
          </h1>
          <p className="text-gray-600">
            Answer honestly to get the most accurate recommendation
          </p>
        </div>

        {/* Progress Bar */}
        <ProgressBar 
          current={currentQuestionIndex + 1} 
          total={questions.length} 
        />

        {/* Question Card */}
        <QuestionCard
          question={currentQuestion}
          onAnswer={handleAnswer}
          selectedValue={answers[currentQuestion.id]}
        />

        {/* Navigation */}
        <div className="flex justify-between mt-8 max-w-3xl mx-auto">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 px-6 py-3 text-gray-700 bg-white rounded-lg hover:bg-gray-50 transition-colors border border-gray-300"
          >
            <ArrowLeft size={20} />
            Back
          </button>

          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
              canGoNext
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isLastQuestion ? 'See Results' : 'Next'}
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}