export type PortfolioData = {
  profile: {
    name: string;
    title: string;
    location: string;
    phone: string;
    email: string;
    github: string;
    linkedin: string;
  };
  about: {
    headline: string;
    summary: string;
    interests: string[];
  };
  education: {
    degree: string;
    institution: string;
    status: string;
    gpa: string;
  };
  career_plan: Array<{
    phase: string;
    focus: string;
    goals: string[];
  }>;
  cv_content: {
    summary: string;
    experience: Array<{
      company: string;
      role: string;
      period: string;
      highlights: string[];
    }>;
    projects: Array<{
      name: string;
      stack: string;
      description: string;
    }>;
  };
  achievements: string[];
  certificates: Array<{
    title: string;
    issuer: string;
    firebase_url: string;
    local_asset: string;
  }>;
  cv_download_url: string;
};
