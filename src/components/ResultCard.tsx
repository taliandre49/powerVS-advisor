'use client';

import { CheckCircle, AlertTriangle, XCircle, Download } from 'lucide-react';
import { RecommendationResult } from '@/lib/types';

interface ResultCardProps {
  result: RecommendationResult;
}

interface IconConfig {
  Icon: React.ComponentType<{ className?: string; size?: number }>;
  color: string;
  bgColor: string;
  borderColor: string;
}

export default function ResultCard({ result }: ResultCardProps) {
  const { explanation, score, percentage, outcome } = result;

  const getIconAndColor = (): IconConfig => {
    if (result.outcomeKey === 'strong_fit') {
      return { 
        Icon: CheckCircle, 
        color: 'text-green-600', 
        bgColor: 'bg-green-50', 
        borderColor: 'border-green-200' 
      };
    } else if (result.outcomeKey === 'maybe') {
      return { 
        Icon: AlertTriangle, 
        color: 'text-yellow-600', 
        bgColor: 'bg-yellow-50', 
        borderColor: 'border-yellow-200' 
      };
    } else {
      return { 
        Icon: XCircle, 
        color: 'text-red-600', 
        bgColor: 'bg-red-50', 
        borderColor: 'border-red-200' 
      };
    }
  };

  const { Icon, color, bgColor, borderColor } = getIconAndColor();

  return (
    <div className="max-w-4xl mx-auto">
      {/* Score Banner */}
      <div className={`${bgColor} border-2 ${borderColor} rounded-lg p-8 mb-8`}>
        <div className="flex items-center justify-center mb-4">
          <Icon className={`${color} mr-3`} size={48} />
          <h1 className={`text-4xl font-bold ${color}`}>
            {explanation.headline}
          </h1>
        </div>
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-4">{explanation.summary}</p>
          <div className="inline-block bg-white px-6 py-3 rounded-full shadow">
            <span className="text-2xl font-bold text-gray-900">
              Score: {score} / 100
            </span>
            <span className="text-gray-600 ml-2">({percentage}%)</span>
          </div>
        </div>
      </div>

      {/* Key Reasons */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Why This Recommendation?
        </h2>
        <ul className="space-y-4">
          {explanation.customReasons.map((reason, index) => (
            <li key={index} className="flex items-start">
              <span className={`${color} mr-3 mt-1`}>•</span>
              <span className="text-gray-700">{reason}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Architecture Suggestion */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Suggested Architecture
        </h2>
        <p className="text-gray-700 mb-4">{explanation.architecture}</p>
        <div className="bg-gray-50 p-4 rounded border-l-4 border-blue-600">
          <p className="text-sm font-semibold text-gray-900 mb-2">
            Key Tradeoffs:
          </p>
          <p className="text-sm text-gray-700">{explanation.tradeoffs}</p>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Recommended Next Steps
        </h2>
        <ol className="space-y-3">
          {explanation.nextSteps.map((step, index) => (
            <li key={index} className="flex items-start">
              <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                {index + 1}
              </span>
              <span className="text-gray-700">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => window.location.href = '/'}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Start Over
        </button>
        <button
          onClick={() => window.print()}
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2"
        >
          <Download size={20} />
          Save as PDF
        </button>
      </div>
    </div>
  );
}