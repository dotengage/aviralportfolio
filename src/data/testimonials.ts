export type TestimonialGroup = 'agency' | 'ugc' | 'personal';

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  group: TestimonialGroup;
  placeholder?: boolean;
}

export const groups: { id: TestimonialGroup; label: string }[] = [
  { id: 'agency', label: 'Agency' },
  { id: 'ugc', label: 'UGC' },
  { id: 'personal', label: 'Personal' },
];

export const testimonials: Testimonial[] = [
  {
    group: 'agency',
    name: 'Ankush Setia',
    role: 'Co-founder',
    company: 'Infare',
    quote:
      "Working with Dot Engage on INFARE's UGC ads was refreshingly smooth. They understood the brief in one go, delivered on time, and the quality was excellent — minimal changes needed from our end. Whatever feedback we did share was turned around almost immediately. Exactly the kind of execution a fast-moving startup needs.",
  },
  {
    group: 'agency',
    name: 'Jishnu M M',
    role: 'Performance Data Analyst',
    company: 'Lascade LLP',
    quote:
      "I'm really impressed with how they created the UGC videos for us. The attention to detail and the variety of hooks they included were amazing. Even if videos are raw, they were solid and impactful. I highly recommend Dot Engage.",
  },
  {
    group: 'agency',
    name: 'Pujan',
    role: 'CEO',
    company: 'MYPB',
    quote: 'Meta ads ke content ka idea hai, jo kaafi agencies lack karti hain.',
  },
  {
    group: 'agency',
    name: 'Vaishnav',
    role: 'Founder',
    company: 'Arise Legion',
    quote:
      'Had an amazing experience with Dot Engage! The work was super professional, budget-friendly, and exactly what I wanted. Aviral communicates really well, understands the vibe perfectly, and delivers beyond expectations. Definitely working again in future projects!',
  },
  {
    group: 'agency',
    name: 'Mohammed Malu',
    role: 'Owner',
    company: 'Ultimate Notion Templates Bundle',
    quote:
      'Working with Dot Engage was an amazing experience. Especially Aviral — he understood each and every instruction clearly and delivered up to the mark and above expectations. When I received the output, I realised every penny was worth paying. 🙌',
  },
  {
    group: 'ugc',
    name: 'M. Chau',
    role: 'Brand team',
    company: 'Blower App (Vietnam)',
    quote:
      'This is the second time I’ve worked with Aviral J. — truly IMPRESSED with his UGC video creation! His work showcases exceptional professionalism, meticulous attention to detail, and stunning visual appeal. Collaborating with him was a breeze, thanks to his language fluency, swift delivery, and proactive communication.',
  },
  {
    group: 'personal',
    placeholder: true,
    name: 'Name',
    role: 'Role',
    company: 'Company / college',
    quote: 'PLACEHOLDER — a personal testimonial (mentor, teammate, professor) goes here.',
  },
];
