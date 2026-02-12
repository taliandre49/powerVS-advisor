import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 'q1_sap',
    text: 'Do you run SAP HANA or other SAP applications?',
    type: 'single-choice',
    helpText: 'PowerVS is co-engineered with SAP for optimal performance and is SAP HANA certified.',
    weight: 30,
    options: [
      {
        value: 'hana',
        label: 'Yes - SAP HANA',
        points: 30,
      },
      {
        value: 'other_sap',
        label: 'Yes - Other SAP applications',
        points: 20,
      },
      {
        value: 'no_sap',
        label: 'No SAP workloads',
        points: 0,
      },
    ],
  },
  {
    id: 'q2_power',
    text: 'Do you have existing IBM Power infrastructure?',
    type: 'single-choice',
    helpText: 'Existing Power systems can simplify migration and licensing.',
    weight: 20,
    options: [
      {
        value: 'extensive',
        label: 'Yes - Extensive Power footprint',
        points: 20,
      },
      {
        value: 'some',
        label: 'Yes - Some Power systems',
        points: 12,
      },
      {
        value: 'none',
        label: 'No existing Power infrastructure',
        points: -5,
      },
    ],
  },
  {
    id: 'q3_compliance',
    text: 'What are your compliance and data residency requirements?',
    type: 'single-choice',
    helpText: 'PowerVS offers strong compliance certifications and regional deployment options.',
    weight: 15,
    options: [
      {
        value: 'strict',
        label: 'Strict requirements (HIPAA, SOC 2, data residency)',
        points: 15,
      },
      {
        value: 'moderate',
        label: 'Moderate compliance needs',
        points: 8,
      },
      {
        value: 'minimal',
        label: 'Minimal compliance requirements',
        points: 0,
      },
    ],
  },
  {
    id: 'q4_latency',
    text: 'What are your latency and performance requirements?',
    type: 'single-choice',
    helpText: 'PowerVS excels at low-latency, mission-critical workloads.',
    weight: 15,
    options: [
      {
        value: 'critical',
        label: 'Mission-critical, <10ms latency required',
        points: 15,
      },
      {
        value: 'important',
        label: 'Important, <50ms acceptable',
        points: 8,
      },
      {
        value: 'flexible',
        label: 'Flexible latency requirements',
        points: 0,
      },
    ],
  },
  {
    id: 'q5_budget',
    text: 'What is your budget tier?',
    type: 'single-choice',
    helpText: 'PowerVS is a premium solution optimized for enterprise workloads.',
    weight: 10,
    options: [
      {
        value: 'enterprise',
        label: 'Enterprise - Premium budget',
        points: 10,
      },
      {
        value: 'mid_market',
        label: 'Mid-market - Moderate budget',
        points: 5,
      },
      {
        value: 'cost_sensitive',
        label: 'Startup/Cost-sensitive',
        points: -10,
      },
    ],
  },
  {
    id: 'q6_workload',
    text: 'What type of workload are you running?',
    type: 'single-choice',
    helpText: 'PowerVS is optimized for specific enterprise workload patterns.',
    weight: 10,
    options: [
      {
        value: 'database',
        label: 'Large databases (Oracle, DB2, SAP HANA)',
        points: 10,
      },
      {
        value: 'analytics',
        label: 'Analytics and data processing',
        points: 8,
      },
      {
        value: 'web',
        label: 'Web applications and APIs',
        points: -5,
      },
      {
        value: 'mixed',
        label: 'Mixed workloads',
        points: 5,
      },
    ],
  },
];