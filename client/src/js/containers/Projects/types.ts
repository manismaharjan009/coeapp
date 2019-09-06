export interface IProjects {
  projects: Projects[];
}

export interface Projects {
  _id?: string;
  name: string;
  shortname: string;
  description?: string;
}