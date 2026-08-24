import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import type { PortfolioProject } from "@/types/github";

export function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <div className="flex flex-col justify-between rounded-lg border border-border bg-card p-6">
      <div>
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-medium">{project.name}</h3>
          {project.stars > 0 && (
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Star className="size-3" />
              {project.stars}
            </span>
          )}
        </div>

        <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>

        {project.topics.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground"
              >
                {topic}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-5 flex items-center gap-4 text-sm">
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 font-medium transition-opacity hover:opacity-70"
        >
          <GithubIcon className="size-4" />
          Código
        </a>
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 font-medium transition-opacity hover:opacity-70"
          >
            <ExternalLink className="size-4" />
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
