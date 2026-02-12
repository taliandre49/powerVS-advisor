import { Explanations } from '../types';

export const explanations: Explanations = {
  strong_fit: {
    headline: 'PowerVS is a Strong Fit',
    icon: '✅',
    color: 'green',
    summary: 'Based on your answers, PowerVS aligns well with your workload requirements and business needs.',
    reasons: {
      sap: "Your SAP workload is perfectly suited for PowerVS's SAP HANA optimization and certification.",
      power: 'Existing Power infrastructure reduces migration complexity and Total Cost of Ownership (TCO).',
      compliance: "PowerVS's compliance certifications match your regulatory requirements.",
      performance: "Mission-critical latency needs align with PowerVS's low-latency architecture.",
      enterprise: "Your enterprise budget tier supports PowerVS's premium positioning.",
    },
    architecture: 'Recommended: SAP HANA on PowerVS with high-availability configuration and disaster recovery to a secondary region.',
    tradeoffs: 'PowerVS costs more than commodity x86, but delivers purpose-built performance and reliability for enterprise workloads.',
    nextSteps: [
      'Schedule architecture workshop with IBM PowerVS specialist',
      'Request TCO analysis comparing PowerVS vs. alternatives',
      'Review SAP on PowerVS reference architectures',
    ],
  },
  maybe: {
    headline: 'PowerVS Could Work - Needs Evaluation',
    icon: '⚠️',
    color: 'yellow',
    summary: 'PowerVS has some advantages for your use case, but you should compare it against alternatives.',
    reasons: {
      mixed_signals: 'Some aspects of your workload align with PowerVS strengths, while others might be served equally well by x86 or public cloud.',
      cost_consideration: 'PowerVS is premium-priced; ensure the performance benefits justify the cost delta.',
      migration_complexity: 'Without existing Power infrastructure, migration effort should be factored into decision.',
    },
    architecture: 'Consider: Hybrid approach with PowerVS for critical databases and x86/cloud for application tiers.',
    tradeoffs: "You'll get enterprise-grade reliability, but at higher cost than commodity alternatives. Evaluate whether your workload requires this level of infrastructure.",
    nextSteps: [
      'Run proof-of-concept comparing PowerVS vs. x86 performance',
      'Get detailed pricing for both PowerVS and alternative solutions',
      'Assess migration complexity and timelines',
    ],
  },
  not_ideal: {
    headline: 'PowerVS May Not Be the Best Fit',
    icon: '❌',
    color: 'red',
    summary: 'Based on your requirements, other platforms may better suit your needs and budget.',
    reasons: {
      cost_mismatch: "PowerVS's premium pricing doesn't align with cost-sensitive budgets without corresponding performance requirements.",
      workload_type: 'Your workload type is better served by commodity x86 or public cloud infrastructure.',
      no_power_heritage: 'Without existing Power systems, the migration effort may not justify the benefits.',
    },
    architecture: 'Alternative: Consider x86-based IBM Cloud, AWS, or Azure for better price/performance for web workloads.',
    tradeoffs: "You'll save on infrastructure costs, though you won't have PowerVS's specialized SAP optimization or Power-native performance.",
    nextSteps: [
      'Explore IBM Cloud x86 instances or public cloud alternatives',
      'Review cost optimization strategies for your workload type',
      'Revisit PowerVS if requirements change (e.g., adding SAP workloads)',
    ],
  },
};