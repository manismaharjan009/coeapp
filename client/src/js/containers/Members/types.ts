export interface IMembers {
  members: Members[];
}


export interface Members {
  _id?: string;
  fullname: string;
  role: string;
  description: string;
  // avatar: string;
}