import catMonitor from '../assets/projects/cat-monitor.jpg';
import creatorOs from '../assets/projects/creator-os.jpg';

export interface Project {
  slug: string;
  name: string;
  kind: string;
  oneLiner: string;
  description: string;
  features: string[];
  builtFor: string;
  url: string;
  image: ImageMetadata;
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: 'cat-monitor',
    name: 'CAT Monitor',
    kind: 'Prep tracker · Web app',
    oneLiner: 'An honest planner for CAT aspirants that tells you whether your target is actually feasible.',
    description:
      'Set a target percentile and exam date. CAT Monitor maps your real capacity — college or work hours, energy, commitments and a buffer for real life — then builds one week at a time instead of a fictional 60-day timetable. It watches your mocks and logs, and flags the gap between the hours you need and the hours you actually have.',
    features: [
      '6-step setup: goal, commitments, available time, energy, baseline, confirm',
      'Weekly outcomes at ~75% of realistic capacity, not a fantasy schedule',
      'Feasibility engine + workload model that calls out shortfalls early',
      'Mocks, error log, section analytics and CAT readiness',
      'Streaks, habits and a weekly review loop',
      'No account — restore your data on another device',
    ],
    builtFor: 'CAT aspirants juggling college or work',
    url: 'https://dotengage.github.io/cat-monitor/#/home',
    image: catMonitor,
    tags: ['Planning', 'EdTech', 'Analytics'],
  },
  {
    slug: 'creator-os',
    name: 'Creator OS',
    kind: 'Creator business OS · Web app',
    oneLiner: 'Deals, invoices, money, ideas and your content calendar — in one place.',
    description:
      'A command centre for creators who run their content like a business. Log who reached out and what you quoted, raise invoices from templates and export clean PDFs, see what is collected vs. still to come, dump half-formed ideas and plan what goes live — all on your device, no account needed.',
    features: [
      'Brand-deal pipeline: contacted → negotiating → delivered',
      'Invoice templates, PDF export and overdue tracking',
      'Earnings view: collected, yet to come, expenses',
      'Content planner + idea dump + inspiration library',
      'Goals that watch your pace (e.g. Instagram to 100K)',
      'Explore instantly with sample data',
    ],
    builtFor: 'UGC creators & influencers',
    url: 'https://dotengage.github.io/creator-os/#/',
    image: creatorOs,
    tags: ['Creator economy', 'Finance', 'Productivity'],
  },
];
