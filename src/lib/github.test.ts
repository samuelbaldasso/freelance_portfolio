import { afterEach, describe, expect, it, vi } from "vitest";
import { getPortfolioProjects } from "./github";
import type { GitHubRepo } from "@/types/github";

function makeRepo(overrides: Partial<GitHubRepo>): GitHubRepo {
  return {
    id: 1,
    name: "example-repo",
    full_name: "samuelbaldasso/example-repo",
    html_url: "https://github.com/samuelbaldasso/example-repo",
    description: "An example repository",
    homepage: null,
    language: "TypeScript",
    topics: ["portfolio"],
    stargazers_count: 3,
    fork: false,
    archived: false,
    pushed_at: "2026-01-01T00:00:00Z",
    ...overrides,
  };
}

describe("getPortfolioProjects", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("returns only repositories with the 'portfolio' topic, ignoring forks and archived", async () => {
    const repos: GitHubRepo[] = [
      makeRepo({ id: 1, name: "shown", topics: ["portfolio", "react"] }),
      makeRepo({ id: 2, name: "no-topic", topics: ["react"] }),
      makeRepo({ id: 3, name: "is-fork", topics: ["portfolio"], fork: true }),
      makeRepo({ id: 4, name: "is-archived", topics: ["portfolio"], archived: true }),
    ];

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => repos,
      }),
    );

    const projects = await getPortfolioProjects();

    expect(projects).toHaveLength(1);
    expect(projects[0].name).toBe("shown");
    expect(projects[0].topics).not.toContain("portfolio");
  });

  it("returns an empty list when the GitHub API responds with an error", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 503,
        json: async () => ({}),
      }),
    );

    const projects = await getPortfolioProjects();

    expect(projects).toEqual([]);
  });

  it("returns an empty list when fetch throws an exception (e.g. network failure)", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockRejectedValue(new Error("network error")),
    );

    const projects = await getPortfolioProjects();

    expect(projects).toEqual([]);
  });

  it("uses a default description when the repository has none", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => [makeRepo({ description: null })],
      }),
    );

    const projects = await getPortfolioProjects();

    expect(projects[0].description).toBe("No description provided.");
  });
});
