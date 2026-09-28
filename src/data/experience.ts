/** Source: LinkedIn profile export + profile page (Sep 2026). */

export interface Milestone {
  when: string;
  title: string;
  place?: string;
  points: string[];
  kind: 'life' | 'education' | 'work' | 'build';
}

/** Vertical "journey" timeline on the About page, oldest first. */
export const journey: Milestone[] = [
  {
    when: 'Age 14',
    title: 'Started a YouTube channel',
    kind: 'life',
    points: ['Wanted better videos, so I started teaching myself video editing.'],
  },
  {
    when: 'Age 16',
    title: 'Learned editing professionally',
    kind: 'life',
    points: ['Industry-standard software, real client-grade work.'],
  },
  {
    when: '2020',
    title: 'Freelance video editor',
    place: 'Fiverr · Upwork · Freelancer.com',
    kind: 'work',
    points: [
      'COVID turned the obsession into freelancing.',
      'Earned enough to pay my entire 12th-grade fees myself.',
      'Branched into social media, websites and marketing.',
    ],
  },
  {
    when: '2022',
    title: '12th grade, Commerce',
    place: "St. Xavier's School, Bhopal",
    kind: 'education',
    points: ['Then a year of BBA at BSSS College, Bhopal.'],
  },
  {
    when: '2023',
    title: 'Switched colleges and started over',
    place: 'Institute of Management, Nirma University',
    kind: 'education',
    points: ["Wasn't learning at the pace I wanted — so I moved to IMNU's Integrated BBA-MBA."],
  },
  {
    when: '2023',
    title: 'Joined TEDxPrahladnagar production',
    place: 'Ahmedabad',
    kind: 'work',
    points: ["Ahmedabad's biggest TEDx. Head of Production within six months."],
  },
  {
    when: '2024',
    title: 'Founded DOT PNG Media',
    kind: 'build',
    points: ['End-to-end social media services after 4+ years of digital storytelling.'],
  },
  {
    when: '2025',
    title: 'Started Dot Engage',
    place: 'UGC ad agency',
    kind: 'build',
    points: [
      'Started it in my 3rd year of college.',
      '20+ brands, systems, SOPs — and plenty of mistakes.',
      '45+ ad videos for a Shark Tank-funded brand.',
    ],
  },
  {
    when: '2025',
    title: 'Went in front of the camera',
    place: '@aviral.mp4',
    kind: 'life',
    points: ['Obsessed with hooks, pattern interrupts and retention.', 'Grew to ~5,000 followers in 60 days.'],
  },
  {
    when: '2026',
    title: 'Presented research at NICOM 2026',
    kind: 'education',
    points: ['“Generational Shift in Saving and Investing: Millennials vs Gen Z”.'],
  },
  {
    when: 'Now',
    title: 'Still building',
    kind: 'build',
    points: ['Scaling Dot Engage, making content and shipping small products like CAT Monitor and Creator OS.'],
  },
];

export interface Role {
  company: string;
  title: string;
  dates: string;
  duration: string;
  location?: string;
  summary: string;
  skills: string[];
  url?: string;
}

/** Horizontal experience rail on the About page, newest first. */
export const roles: Role[] = [
  {
    company: 'Dot Engage',
    title: 'Founder',
    dates: 'Feb 2025 — Present',
    duration: '1 yr 8 mos',
    summary:
      'Helping brands win on social media through conversion-focused video content — UGC ads, paid campaigns and everything in between. 20+ brands served.',
    skills: ['Campaign strategy', 'Creative direction', 'UGC', 'Meta Ads', 'Sales', 'Hiring & SOPs'],
    url: 'https://www.dotengage.in',
  },
  {
    company: 'Institute of Management, Nirma University',
    title: 'Placement Coordinator',
    dates: 'Sep 2023 — Jun 2026',
    duration: '2 yrs 10 mos',
    location: 'Ahmedabad',
    summary: 'Coordinated placement activities between students, recruiters and the placement office.',
    skills: ['Stakeholder management', 'Communication', 'Operations'],
  },
  {
    company: 'E-Cell, Nirma University',
    title: 'Team Member',
    dates: 'Jan 2024 — Oct 2025',
    duration: '1 yr 10 mos',
    location: 'Ahmedabad',
    summary:
      'Organised national-level events and hackathons including the Marketing Marathon and NASA Space Apps Challenge 2024.',
    skills: ['Event management', 'Marketing', 'Video'],
  },
  {
    company: 'TEDxPrahladnagar',
    title: 'Head of Production',
    dates: 'Oct 2023 — Dec 2024',
    duration: '1 yr 3 mos',
    location: 'Ahmedabad',
    summary:
      'Joined as Production Executive, became Head of Production in six months. Led the team from pre to post — speakers, cameras, lighting and edits — across two TEDx events.',
    skills: ['Production', 'Team leadership', 'Video editing', 'Content marketing'],
  },
  {
    company: 'DOT PNG Media',
    title: 'Founder',
    dates: 'Feb 2024 — Dec 2024',
    duration: '11 mos',
    location: 'Ahmedabad',
    summary: 'End-to-end social media services — graphics, video and everything digital storytelling.',
    skills: ['Social media', 'Design', 'Video'],
  },
  {
    company: 'Wings for Dreams',
    title: 'Intern',
    dates: 'May 2024 — Jun 2024',
    duration: '2 mos',
    location: 'Pune',
    summary: 'Summer internship.',
    skills: [],
  },
  {
    company: 'Fiverr · Upwork · Freelancer.com',
    title: 'Freelance Video Editor',
    dates: 'Jul 2020 — Dec 2024',
    duration: '4 yrs 6 mos',
    summary: 'Edited videos for clients worldwide; paid my own 12th-grade fees from it.',
    skills: ['Video editing', 'Client management', 'Storytelling'],
  },
  {
    company: 'National Service Scheme',
    title: 'Volunteer',
    dates: 'Sep 2023 — Aug 2024',
    duration: '1 yr',
    summary: 'Community service initiatives.',
    skills: [],
  },
  {
    company: 'Hamari Pahchan',
    title: 'Social Entrepreneurship',
    dates: 'Aug 2023 — Sep 2023',
    duration: '2 mos',
    summary: 'Social entrepreneurship programme.',
    skills: [],
  },
];

export const education = [
  {
    school: 'Institute of Management, Nirma University',
    degree: 'Integrated BBA-MBA',
    dates: '2023 — 2026',
  },
  {
    school: 'BSSS College, Bhopal',
    degree: 'BBA (1st year)',
    dates: '2022 — 2023',
  },
  {
    school: "St. Xavier's School, Bhopal",
    degree: '12th Grade — Commerce',
    dates: 'till 2022',
  },
];

export const skillGroups = [
  {
    title: 'Marketing',
    items: [
      'Content Marketing',
      'Content Strategy',
      'Campaign Strategies',
      'Performance Marketing',
      'Meta Ads Manager',
      'Behavioral Targeting',
      'Instagram Marketing',
      'Facebook Marketing',
      'Social Media Management',
      'Influencer Marketing',
    ],
  },
  {
    title: 'Creative',
    items: [
      'Creative Direction',
      'UGC Ads',
      'Online Content Creation',
      'Hooks & Retention',
      'Scriptwriting',
      'Video Editing',
      'Production',
    ],
  },
  {
    title: 'Build',
    items: ['Prompt Engineering', 'Vibe Coding with Claude', 'Websites', 'Notion Systems', 'Power BI Dashboards'],
  },
  {
    title: 'Business',
    items: ['Agency Operations', 'SOPs & Systems', 'Sales', 'Hiring', 'Team Leadership', 'Client Management'],
  },
];

export const certifications = [
  'Influencer Marketing From A Brand’s Perspective',
  'Introduction to Social Media Marketing',
  'Getting Influencer Marketing Right',
  'Attract and Engage Customers with Digital Marketing',
  'Advertising with Meta',
  'Dashboards Using Power BI',
];

export const languages = [
  { name: 'Hindi', word: 'नमस्ते' },
  { name: 'English', word: 'Hello' },
  { name: 'Bhopali', word: 'क्या लाइन?' },
];

/** Selected LinkedIn posts. */
export const posts = [
  {
    hook: 'Financial literacy isn’t what drives behavior. Financial attitude does.',
    excerpt:
      'Presenting our paper at NICOM 2026 made me rethink how each generation interacts with money — and why brands sell behaviors, not just products.',
    stats: '184 reactions · 5.5K impressions',
  },
  {
    hook: 'I made my first big mistake as a founder last week.',
    excerpt:
      'Seven months into Dot Engage, 20+ brands in — and a locked domain reminded me that building is about recovering faster each time.',
    stats: '63 reactions · 2.3K impressions',
  },
  {
    hook: 'The most wonderful team I’ve ever worked with.',
    excerpt:
      'What leading production at TEDxPrahladnagar taught me about managing people, resistance and last-minute curveballs.',
    stats: '98 reactions · 2.6K impressions',
  },
  {
    hook: 'You know, it’s funny how uncool and cliché I find LinkedIn…',
    excerpt: 'Why I started writing anyway: a place to document the journey in real time, without overthinking growth.',
    stats: '89 reactions · 3.2K impressions',
  },
];

export const stats = [
  { value: 30, suffix: '+', label: 'Brands worked with' },
  { value: 200, suffix: '+', label: 'Ad videos made' },
];
