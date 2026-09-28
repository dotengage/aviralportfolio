export const site = {
  name: 'Aviral Jain',
  short: 'Aviral',
  email: 'aviral@dotengage.in',
  location: 'Bhopal',
  timezone: 'Asia/Kolkata',
  instagram: 'https://instagram.com/aviral.mp4',
  instagramHandle: '@aviral.mp4',
  linkedin: 'https://www.linkedin.com/in/aviraljain178/',
  linkedinHandle: 'in/aviraljain178',
  linkedinActivity: 'https://www.linkedin.com/in/aviraljain178/recent-activity/all/',
  agency: { name: 'Dot Engage', url: 'https://www.dotengage.in' },
  // Drop the file at public/resume.pdf
  resume: '/resume.pdf',
  role: 'Marketer · Creative Director · Creator',
  tagline: 'I help brands win on social media with content people actually stop scrolling for.',
  services: ['Marketing Strategy', 'Creative Direction', 'UGC & Content', 'Video Editing'],
  description:
    'Aviral Jain — marketer, creative director and content creator from Bhopal. Founder of Dot Engage, a UGC ad agency trusted by 20+ brands.',
};

/** The intro greeting — one word per language Aviral speaks. */
export const greetings = [
  { word: 'नमस्ते', lang: 'hi', label: 'Hindi' },
  { word: 'Hello', lang: 'en', label: 'English' },
  { word: 'क्या लाइन?', lang: 'hi', label: 'Bhopali' },
];

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Resume', href: site.resume, external: true },
  { label: 'Contact', href: '/contact' },
];
