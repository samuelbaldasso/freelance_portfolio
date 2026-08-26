import { ProjectCard } from "@/components/project-card";
import { getPortfolioProjects } from "@/lib/github";
import { siteConfig } from "@/lib/site-config";

export async function Projects() {
  const projects = await getPortfolioProjects();

  return (
    <section id="projetos" className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex items-baseline justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
        <a
          href={siteConfig.social.github}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          View all on GitHub
        </a>
      </div>

      {projects.length === 0 ? (
        <p className="mt-8 text-sm text-muted-foreground">
          No featured projects at the moment. Tag a repository with the{" "}
          <code className="rounded bg-muted px-1.5 py-0.5">portfolio</code> topic on GitHub to display it here.
        </p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}
