import { questions } from './data/questions';
import { explanations } from './data/explanations';
import { 
  Answers, 
  RecommendationResult, 
  CriteriaFlags, 
  OutcomeKey,
  Question 
} from './types';

export function calculateRecommendation(answers: Answers): RecommendationResult {
  let totalScore = 0;
  let maxPossibleScore = 0;

  const criteriaFlags: CriteriaFlags = {
    hasSAP: false,
    hasPower: false,
    hasCompliance: false,
    hasPerformanceNeeds: false,
    hasEnterpriseBudget: false,
  };

  questions.forEach((question: Question) => {
    const answer = answers[question.id];
    if (!answer) return;

    const selectedOption = question.options.find(opt => opt.value === answer);
    if (selectedOption) {
      totalScore += selectedOption.points;

      // Track criteria flags
      if (question.id === 'q1_sap' && (answer === 'hana' || answer === 'other_sap')) {
        criteriaFlags.hasSAP = true;
      }
      if (question.id === 'q2_power' && (answer === 'extensive' || answer === 'some')) {
        criteriaFlags.hasPower = true;
      }
      if (question.id === 'q3_compliance' && answer === 'strict') {
        criteriaFlags.hasCompliance = true;
      }
      if (question.id === 'q4_latency' && answer === 'critical') {
        criteriaFlags.hasPerformanceNeeds = true;
      }
      if (question.id === 'q5_budget' && answer === 'enterprise') {
        criteriaFlags.hasEnterpriseBudget = true;
      }
    }

    const maxPoints = Math.max(...question.options.map(opt => opt.points));
    maxPossibleScore += maxPoints;
  });

  // Determine outcome
  let outcome: string;
  let outcomeKey: OutcomeKey;

  if (totalScore >= 70) {
    outcome = 'Strong Fit';
    outcomeKey = 'strong_fit';
  } else if (totalScore >= 35) {
    outcome = 'Maybe - Needs Evaluation';
    outcomeKey = 'maybe';
  } else {
    outcome = 'Not Ideal';
    outcomeKey = 'not_ideal';
  }

  const explanationTemplate = explanations[outcomeKey];
  const customReasons = buildCustomReasons(outcomeKey, criteriaFlags);

  return {
    outcome,
    outcomeKey,
    score: totalScore,
    maxScore: maxPossibleScore,
    percentage: Math.round((totalScore / maxPossibleScore) * 100),
    explanation: {
      ...explanationTemplate,
      customReasons,
    },
    criteriaFlags,
  };
}

function buildCustomReasons(outcomeKey: OutcomeKey, flags: CriteriaFlags): string[] {
  const reasons: string[] = [];
  const template = explanations[outcomeKey];

  if (outcomeKey === 'strong_fit') {
    if (flags.hasSAP) reasons.push(template.reasons.sap);
    if (flags.hasPower) reasons.push(template.reasons.power);
    if (flags.hasCompliance) reasons.push(template.reasons.compliance);
    if (flags.hasPerformanceNeeds) reasons.push(template.reasons.performance);
    if (flags.hasEnterpriseBudget) reasons.push(template.reasons.enterprise);
  } else if (outcomeKey === 'maybe') {
    reasons.push(template.reasons.mixed_signals);
    if (!flags.hasEnterpriseBudget) reasons.push(template.reasons.cost_consideration);
    if (!flags.hasPower) reasons.push(template.reasons.migration_complexity);
  } else {
    if (!flags.hasEnterpriseBudget) reasons.push(template.reasons.cost_mismatch);
    reasons.push(template.reasons.workload_type);
    if (!flags.hasPower) reasons.push(template.reasons.no_power_heritage);
  }

  return reasons.length > 0 ? reasons : [template.summary];
}

export function getQuestions(): Question[] {
  return questions;
}