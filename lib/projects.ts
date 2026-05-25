const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://dulcoon-project-management.vercel.app";
const PROJECTS_API = `${API_URL}/api/projects`;

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
  try {
    const res = await fetch(PROJECTS_API, {
      next: { revalidate: 300 },
    });
    if (!res.ok) throw new Error(`API returned ${res.status}`);
    const json = await res.json();
    return (json.data || []).map(mapApiProject);
  } catch (e) {
    console.error("Failed to fetch projects:", e);
    return [];
  }
}

export async function getProjectBySlug(slug: string): Promise<ProjectData | null> {
  try {
    const res = await fetch(`${PROJECTS_API}/${slug}`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    return mapApiProject(json.data);
  } catch {
    return null;
  }
}

export async function getAllProjectSlugs(): Promise<string[]> {
  const projects = await getProjectsData();
  return projects.map((p) => p.slug);
}
