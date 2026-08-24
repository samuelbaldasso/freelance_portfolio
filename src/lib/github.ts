import { siteConfig } from "@/lib/site-config";
import type { GitHubRepo, PortfolioProject } from "@/types/github";

const PORTFOLIO_TOPIC = "portfolio";
const REVALIDATE_SECONDS = 3600;

function toPortfolioProject(repo: GitHubRepo): PortfolioProject {
  return {
    id: repo.id,
    name: repo.name,
    description: repo.description ?? "Sem descrição no repositório.",
    url: repo.html_url,
    demoUrl: repo.homepage && repo.homepage.trim().length > 0 ? repo.homepage : null,
    language: repo.language,
    topics: repo.topics.filter((topic) => topic !== PORTFOLIO_TOPIC),
    stars: repo.stargazers_count,
    updatedAt: repo.pushed_at,
  };
}

export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const response = await fetch(
      `https://api.github.com/users/${siteConfig.githubUsername}/repos?per_page=100&sort=pushed`,
      {
        headers,
        next: { revalidate: REVALIDATE_SECONDS },
      },
    );

    if (!response.ok) {
      console.error(`GitHub API respondeu ${response.status} ao listar repositórios.`);
      return [];
    }

    const repos: GitHubRepo[] = await response.json();

    return repos
      .filter((repo) => !repo.fork && !repo.archived && repo.topics?.includes(PORTFOLIO_TOPIC))
      .map(toPortfolioProject);
  } catch (error) {
    console.error("Falha ao buscar repositórios do GitHub:", error);
    return [];
  }
}
