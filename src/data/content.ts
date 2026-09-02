export interface ExperienceItem {
  company: string;
  role: string;
  dates: string;
  location: string;
  product?: string;
  featured?: boolean;
  bullets: string[];
  tags: string[];
}

export interface ProjectItem {
  type: string;
  title: string;
  description: string;
  image: string;
  href: string;
  cta: string;
}

export interface WritingItem {
  type: string;
  title: string;
  description: string;
  href?: string;
  cta?: string;
}

export interface Capability {
  title: string;
  description: string;
}

export const experience: ExperienceItem[] = [
  {
    company: "JPMorgan Chase",
    role: "Vice President · Staff Software Engineer",
    dates: "Jun 2023 - Present",
    location: "London",
    product: "Chase Mobile App · Core Platform",
    featured: true,
    bullets: [
      "Core platform engineer responsible for the React Native monorepo and micro-app architecture, developer-experience tooling, automated testing infrastructure, distributed mocking, mobile performance, and monitoring across iOS and Android.",
      "Permanent member of the Architecture Council, creating and reviewing RFCs with project-wide impact and participating in architectural decisions.",
      "Lead the frontend GraphQL Working Group, coordinating frontend-wide discussions, presentations, and technical proposals.",
      "Deliver workshops and knowledge-sharing sessions on advanced React, TypeScript, JavaScript, and GraphQL.",
    ],
    tags: [
      "React Native",
      "TypeScript",
      "GraphQL",
      "Node.js",
      "Jest",
      "WebdriverIO",
      "Turborepo",
    ],
  },
  {
    company: "Meta",
    role: "Senior Software Engineer · IC5",
    dates: "Jul 2021 - May 2023",
    location: "London",
    product: "Workrooms · Metaverse Experience",
    bullets: [
      "Planned, specified, and implemented features for Workrooms Web and Desktop with product, design, and cross-functional teams.",
      "Organised two team Fixathons focused on launch blockers and product quality across Web and Portal.",
      "Handled production SEVs and contributed to Workplace / Workrooms integration work.",
      "Mentored engineers and delivered training on React, Redux, and automated testing with Jest.",
    ],
    tags: ["React", "TypeScript", "GraphQL", "Relay", "Jest"],
  },
  {
    company: "OLX Group",
    role: "Senior Frontend Engineer",
    dates: "Aug 2018 - May 2021",
    location: "Berlin",
    product: "OLX Poland · In-platform Deliveries",
    bullets: [
      "Led frontend engineering for the platform from the ground up, including CI/CD and automated unit, E2E, and smoke testing.",
      "Raised SPA Web Speed to 80 and accessibility to 100, with automated Lighthouse/Puppeteer measurement after deployments.",
      "Improved developer experience with an auto-generated TypeScript SDK based on an OpenAPI schema.",
      "Served as Frontend Chapter Lead and delivered Webpack training across Berlin, Poznan, and Lisbon.",
    ],
    tags: ["TypeScript", "React", "Node.js", "CI/CD", "Cypress", "Lerna"],
  },
  {
    company: "Zalando",
    role: "Frontend Engineer",
    dates: "Dec 2016 - Aug 2018",
    location: "Berlin",
    bullets: [
      "Led frontend architecture and implementation for a migration from Scala Templates to a modern React application.",
      "Presented web performance strategies including lazy loading, code splitting, and progressive image/layout loading.",
      "Won the 2016 Zalando Hackathon for best internal project with zMaps.",
      "Gained early experience with micro-frontends through the Mosaic Project.",
    ],
    tags: ["React", "JavaScript", "Webpack", "Performance", "Node.js"],
  },
];

export const projects: ProjectItem[] = [
  {
    type: "Open source",
    title: "Leaflet Ant Path",
    description:
      "A Leaflet plugin for animated polylines, with a React integration also available.",
    image: "/assets/projects/leaflet-ant-path.webp",
    href: "https://github.com/rubenspgcavalcante/leaflet-ant-path",
    cta: "View on GitHub ↗",
  },
  {
    type: "Open source",
    title: "Webpack Chrome Extension Reloader",
    description:
      "A Webpack plugin that provides a hot-reloader server for Chrome extension development.",
    image: "/assets/projects/webpack-chrome-extension-reloader.webp",
    href: "https://github.com/rubenspgcavalcante/webpack-chrome-extension-reloader",
    cta: "View on GitHub ↗",
  },
  {
    type: "Personal project",
    title: "Find a Bike",
    description:
      "A Progressive Web App for finding nearby bike stations from the user's current location.",
    image: "/assets/projects/findabike.webp",
    href: "https://findabike.surge.sh",
    cta: "Open project ↗",
  },
];

export const capabilities: Capability[] = [
  {
    title: "Architecture",
    description:
      "Frontend platforms, application architecture, micro-frontends and large codebases.",
  },
  {
    title: "Developer experience",
    description:
      "Tooling, monorepos, testing infrastructure, CI/CD, SDK generation and engineering workflows.",
  },
  {
    title: "Quality at scale",
    description:
      "Performance, accessibility, observability, reliability and sustainable engineering practices.",
  },
];

export const writing: WritingItem[] = [
  {
    type: "Writing",
    title: "Technical articles on JavaScript, React and Webpack",
    description:
      "Published through Front End Weekly and OLX Group Engineering, including work on React.lazy, Redux, dynamic imports, progressive image loading, and Webpack internals.",
    href: "https://medium.com/@rubenspgcavalcante",
    cta: "Read on Medium ↗",
  },
  {
    type: "Talks",
    title: "React and frontend engineering",
    description:
      "React Berlin - Monorepos 101; React Ceará - international interviews and the evolution of state management with Redux.",
  },
  {
    type: "Open source",
    title: "Contributions to the JavaScript ecosystem",
    description:
      "Contributions to DefinitelyTyped and Babel documentation, plus the Webpack Extension Reloader and Leaflet AntPath plugins.",
    href: "https://github.com/rubenspgcavalcante",
    cta: "View GitHub ↗",
  },
];
