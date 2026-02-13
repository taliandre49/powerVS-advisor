'use client';

import { HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { Question } from '@/lib/types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (value: string) => void;
  selectedValue?: string;
}

export default function QuestionCard({ 
  question, 
  onAnswer, 
  selectedValue 
}: QuestionCardProps) {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
      <div className="flex items-start justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 pr-4">
          {question.text}
        </h2>
        <button
          onClick={() => setShowHelp(!showHelp)}
          className="text-blue-600 hover:text-blue-700 flex-shrink-0"
          aria-label="Help"
        >
          <HelpCircle size={24} />
        </button>
      </div>

      {showHelp && (
        <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
          <p className="text-sm text-gray-700">{question.helpText}</p>
        </div>
      )}

      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option.value}
            onClick={() => onAnswer(option.value)}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
              selectedValue === option.value
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center">
              <div
                className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                  selectedValue === option.value
                    ? 'border-blue-600'
                    : 'border-gray-300'
                }`}
              >
                {selectedValue === option.value && (
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                )}
              </div>
              <span className="text-lg text-gray-800">{option.label}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}