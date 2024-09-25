import { Project } from "./project";

export type Company = {
  _id: string;
  name: string;
  projects?: Project[];
};
