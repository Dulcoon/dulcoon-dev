const API_URL =
  process.env.PROJECTS_API_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  "";
const API_KEY = process.env.PROJECTS_API_KEY || "";
const PROJECTS_API = API_URL ? `${API_URL}/api/projects` : "";

function getHeaders(): HeadersInit {
  const headers: Record<string, string> = {};
  if (API_KEY) {
    headers["x-api-key"] = API_KEY;
  }
  return headers;
}

export interface ProjectFeature {
  icon: string;
  title: string;
  description: string;
  colSpan?: 1 | 2;
  textColor?: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  overviewText: string[];
  mission: string;
  client: string;
  impactMetric: { value: string; label: string; subtext: string };
  tags: { name: string; colorClass: string }[];
  heroImage: string;
  demoLink: string;
  features: ProjectFeature[];
  techStack: string[];
  gallery: string[];
  filterTag: string;
}

type ApiProject = {
  slug: string;
  title: string;
  desc: string;
  longDesc: string;
  tech: string[];
  features: string[];
  featureList: ProjectFeature[] | null;
  images: string[];
  thumbnail: string | null;
  category: string | null;
  mission: string | null;
  client: string | null;
  impactMetric: { value: string; label: string; subtext: string } | null;
  tags: string[];
  overview: string[] | null;
  demo: string | null;
};

function mapApiProject(p: ApiProject): ProjectData {
  return {
    slug: p.slug,
    title: p.title,
    category: p.category || "Project",
    shortDescription: p.desc,
    overviewText: p.overview || [p.longDesc],
    mission: p.mission || "",
    client: p.client || "",
    impactMetric: p.impactMetric || { value: "-", label: "Impact", subtext: "" },
    tags: (p.tags || []).map((t) => ({
      name: t,
      colorClass: "text-primary",
    })),
    heroImage: p.thumbnail || p.images?.[0] || "/fallback.png",
    demoLink: p.demo || "",
    features: p.featureList && p.featureList.length > 0
      ? p.featureList
      : p.features.map((f) => ({
          icon: "check_circle",
          title: f,
          description: "",
          colSpan: 1 as const,
        })),
    techStack: p.tech || [],
    gallery: p.images || [],
    filterTag: p.category === "Mobile App" ? "Mobile App" : "Website",
  };
}

export async function getProjectsData(): Promise<ProjectData[]> {
  if (!PROJECTS_API) {
    console.warn("[Projects API] PROJECTS_API_URL is not configured in environment variables.");
    return [];
  }
  try {
    const res = await fetch(PROJECTS_API, {
      headers: getHeaders(),
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      const errorText = await res.text().catch(() => "");
      console.error(`[Projects API] Fetch failed with status ${res.status}: ${res.statusText}`, errorText);
      return [];
    }
    const json = await res.json();
    return (json.data || []).map(mapApiProject);
  } catch (e) {
    console.error("[Projects API] Network/Server Error fetching projects:", e);
    return [];
  }
}

// Alias for convenience / compatibility
export const getProjects = getProjectsData;

export async function getProjectBySlug(slug: string): Promise<ProjectData | null> {
  if (!PROJECTS_API) {
    console.warn("[Projects API] PROJECTS_API_URL is not configured in environment variables.");
    return null;
  }
  try {
    const res = await fetch(`${PROJECTS_API}/${slug}`, {
      headers: getHeaders(),
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      const errorText = await res.text().catch(() => "");
      console.error(`[Projects API] Fetch slug "${slug}" failed with status ${res.status}: ${res.statusText}`, errorText);
      return null;
    }
    const json = await res.json();
    return json.data ? mapApiProject(json.data) : null;
  } catch (e) {
    console.error(`[Projects API] Network/Server Error fetching slug "${slug}":`, e);
    return null;
  }
}

export async function getAllProjectSlugs(): Promise<string[]> {
  const projects = await getProjectsData();
  return projects.map((p) => p.slug);
}
