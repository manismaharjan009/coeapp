export interface IParticipate {
  participants: []
}

export interface Participate {
  id?: string;
  memberId: string;
  topic: string;
  description:string;
  reference: string;
  status?: string;
  presentationDate?: Date;
  submittedDate: Date;
}