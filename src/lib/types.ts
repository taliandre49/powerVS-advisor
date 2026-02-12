// Core data types

export interface QuestionOption {
  value: string;
  label: string;
  points: number;
}

export interface Question {
  id: string;
  text: string;
  type: 'single-choice' | 'multi-choice';
  helpText: string;
  weight: number;
  options: QuestionOption[];
}

export interface Answers {
  [questionId: string]: string;
}

export interface CriteriaFlags {
  hasSAP: boolean;
  hasPower: boolean;
  hasCompliance: boolean;
  hasPerformanceNeeds: boolean;
  hasEnterpriseBudget: boolean;
}

export interface ExplanationTemplate {
  headline: string;
  icon: string;
  color: string;
  summary: string;
  reasons: {
    [key: string]: string;
  };
  architecture: string;
  tradeoffs: string;
  nextSteps: string[];
}

export interface Explanations {
  strong_fit: ExplanationTemplate;
  maybe: ExplanationTemplate;
  not_ideal: ExplanationTemplate;
}

export type OutcomeKey = 'strong_fit' | 'maybe' | 'not_ideal';

export interface RecommendationResult {
  outcome: string;
  outcomeKey: OutcomeKey;
  score: number;
  maxScore: number;
  percentage: number;
  explanation: ExplanationTemplate & {
    customReasons: string[];
  };
  criteriaFlags: CriteriaFlags;
}