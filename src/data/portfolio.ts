export type NavLink = {
  label: string;
  id: string;
};

export type Experience = {
  company: string;
  location: string;
  role: string;
  period: string;
  bullets: string[];
};

export type SkillGroup = {
  category: string;
  color: string;
  items: string[];
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  year: string;
  link: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "About", id: "about" },
  { label: "Experience & Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Meta",
    location: "Menlo Park, CA",
    role: "Software Engineer, AI Checkout · Web Automation",
    period: "Aug 2022 – Present",
    bullets: [
      "Building a composition system to aggregate, validate, and enforce schema compliance of configuration output from multiple agent runs, improving end-to-end reliability and minimizing accuracy fluctuations.",
      "Lead OBA-3PD Consent Winback initiative — designed and launched user consent experience to 30M eligible users, resulting in a 0.14% increase in incremental revenue.",
      "Built GenAI Transparency consumer experience for Facebook/Instagram Feed on Web reaching 100K daily impressions using React, GraphQL, and TypeScript.",
      "Integrated blocking consent flow with payment as Ad-Free Subscription reaching 340M MAU with 30k+ subscribers in the EU using React, TypeScript, and Bloks.",
      "Contributed to Meta Checkout launch with several merchants including development, merchant onboarding, and reliability initiatives.",
    ],
  },
  {
    company: "Microsoft",
    location: "Redmond, WA",
    role: "Software Engineering Intern, Commerce & Ecosystem Group, Cloud and AI",
    period: "Jun 2021 – Sep 2021",
    bullets: [
      "Implemented onboarding walkthrough experience for the Quotes workspace, orienting users toward various capabilities within the workspace.",
      "Built reusable web components using React, TypeScript, HTML, and CSS leveraged by cross-functional teams with 1000+ engineers.",
      "Wrote supporting documentation for connecting backend API services to send JSON data to the Guided Tour feature and render customized web components.",
    ],
  },
  {
    company: "Coursera",
    location: "Mountain View, CA",
    role: "Software Engineering Intern, Growth-Degrees Team",
    period: "May 2020 – Aug 2020",
    bullets: [
      "Implemented automated visual testing with page snapshots using Percy, Puppeteer, and JavaScript; launched initial CI/CD integration with GitHub Actions.",
      "Improved and simplified an internal tool to browse, edit, and add variants of EOI forms for the marketing team using Retool, JavaScript, and JSON.",
      "Fixed rendering issues of EOI forms and Checklist with GraphQL and React, increasing page traffic and degree interest.",
    ],
  },
];

export const SKILLS: SkillGroup[] = [
  { category: "Languages", color: "#f5b8c4", items: ["Java", "Python", "Hack/PHP", "Bloks", "SQL", "NoSQL", "R", "MATLAB"] },
  { category: "Web", color: "#c9a0ab", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Express.js", "Node.js", "jQuery", "Puppeteer", "Bootstrap", "SASS/SCSS"] },
  { category: "Technologies", color: "#a8c5b5", items: ["MongoDB", "GraphQL", "MySQL", "Git", "GitHub Actions", "Retool"] },
];

export const PROJECTS: Project[] = [
  {
    title: "AI Checkout",
    description: "Contributed to the Meta Checkout launch across multiple merchants, building the automation and reliability infrastructure behind AI-assisted shopping experiences on Facebook and Instagram.",
    tags: ["React", "TypeScript", "AI Automation"],
    year: "2025-Current",
    link: "https://techcrunch.com/2026/03/25/meta-turns-to-ai-to-make-shopping-easier-on-instagram-and-facebook/",
  },
  {
    title: "GenAI Transparency for Ads",
    description: "Built the consumer-facing GenAI Transparency experience for Facebook and Instagram Feed on Web, labeling AI-generated content in ads and reaching 100K daily impressions.",
    tags: ["React", "GraphQL", "TypeScript"],
    year: "2025",
    link: "https://about.fb.com/news/2025/02/gen-ai-transparency-metas-ads-products/",
  },
  {
    title: "Ad-Free Subscription in EU",
    description: "Integrated a blocking consent flow with payment as an Ad-Free Subscription, reaching 340M monthly active users with 30K+ subscribers across the EU.",
    tags: ["React", "TypeScript", "Bloks"],
    year: "2023",
    link: "https://about.fb.com/news/2024/11/facebook-and-instagram-to-offer-subscription-for-no-ads-in-europe/",
  },
  {
    title: "COVID-19 Live Statistics in Canada",
    description: "A MERN stack web application displaying real-time COVID-19 case counts across Canada and its provinces. Used Node.js to scrape updated daily case data into a MongoDB Atlas cloud database.",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    year: "2020",
    link: "#",
  },
];

export const CONTACT_LINKS = {
  email: "julianne.lin@alumni.utoronto.ca",
  linkedin: "https://www.linkedin.com/in/julianne-lin/",
  github: "https://github.com/jlin213",
};
