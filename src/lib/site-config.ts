export const siteConfig = {
  name: "Samuel Baldasso",
  role: "Backend Engineering & Enterprise Systems Architecture",
  tagline: "Backend specialist in Java and Node.js: robust APIs, scalable architecture, and systems that hold up under real production load.",
  githubUsername: "samuelbaldasso",
  avatarUrl: "https://github.com/samuelbaldasso.png",
  email: "baldassosamuel93@gmail.com",
  location: "Brasil",
  availableForWork: true,
  social: {
    github: "https://github.com/samuelbaldasso",
    linkedin: "https://www.linkedin.com/in/samuel-baldasso",
  },
  stack: [
    "Java",
    "Spring Boot",
    "Node.js",
    "TypeScript",
    "GraphQL",
    "REST",
    "React",
    "Next.js",
  ],
  about: {
    heading: "About",
    paragraphs: [
      "I'm a backend-focused developer specializing in Java (Spring Boot) and Node.js/TypeScript, building APIs, services, and architectures that hold up critical systems in production.",
      "As a freelancer, I join projects with a closed scope to solve real technical bottlenecks: performance, security, complex integrations, and architecture that scales — without giving up a solid React/Next.js frontend when the project calls for it.",
    ],
  },
  services: [
    {
      title: "Backend & Java systems",
      description: "APIs and services with Java and Spring Boot, from transactional systems to mid-to-large-scale B2C/B2B platforms.",
    },
    {
      title: "Enterprise systems architecture",
      description: "Structuring microservices, resolving bottlenecks in legacy systems, and architectural decisions to support scale and concurrent users.",
    },
    {
      title: "Integrations & APIs",
      description: "Building REST/GraphQL APIs and integrating third-party services (payments, email, automations), with a focus on security and performance.",
    },
    {
      title: "Full stack web applications",
      description: "When the project calls for it, frontend development with React and Next.js on top of a robust Node.js or Java backend.",
    },
    {
      title: "Technical consulting",
      description: "Architecture review, code review, and on-demand support for teams that need an outside perspective on performance and security.",
    },
  ],
  contact: {
    heading: "Let's talk",
    description:
      "Have a project in mind or need one-off help? Send me a direct email with the details and I'll get back to you as soon as possible.",
  },
} as const;
