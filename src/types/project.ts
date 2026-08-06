export type ProjectVisualType =
  | 'dashboard'
  | 'bar-chart'
  | 'line-chart'
  | 'area-chart'
  | 'pie-chart'
  | 'scatter-plot'
  | 'map'
  | 'funnel'
  | 'table'
  | 'data-pipeline'
  | 'machine-learning'
  | 'mixed';

export interface ProjectMetric {
  id: string;
  label: string;
  value: string;
  description?: string;
}

export interface Project {
  title: string;
  slug: string;
  techStack: string[];
  summary: string;
  keyMetrics: ProjectMetric[];
  liveDemoUrl?: string;
  githubUrl?: string;
  visualType: ProjectVisualType;
}
