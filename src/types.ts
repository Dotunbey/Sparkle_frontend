
export interface RoadmapNode {
  id: string;
  title: string;
  description?: string;
  type: 'core' | 'specialization' | 'ecosystem' | 'terminal';
}

export interface Subdomain {
  id: string;
  name: string;
  description: string;
  courses: string[];
  roadmap: RoadmapNode[];
}

export interface Domain {
  id: string;
  name: string;
  overview: string;
  problemsSolved: string[];
  sectors: string[];
  subdomains: Subdomain[];
  icon: string;
}

export interface UserContext {
  interests: string[];
  experienceLevel: string;
  goals: string;
}
