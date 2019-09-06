export interface IProjectUpdates {
  projectUpdates: ProjectUpdate[];
}

export interface ProjectUpdate {
  _id?: string;
  memberId: string;
  projectId: string,
  updates: string;
  accomplishment: string;
  problems: string;
}