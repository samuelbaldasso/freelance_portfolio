export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
  pushed_at: string;
}

export interface PortfolioProject {
  id: number;
  name: string;
  description: string;
  url: string;
  demoUrl: string | null;
  language: string | null;
  topics: string[];
  stars: number;
  updatedAt: string;
}
