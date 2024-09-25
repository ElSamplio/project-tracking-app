import { Image } from "./image";

type Coordinates = {
  type: number[];
};

type LocationType = {
  type: string;
  enum: ["Point"];
};

type Location = {
  type?: LocationType;
  coordinates?: Coordinates;
};

export type Site = {
  _id: string,
  name: string;
  description?: string;
  location?: Location;
  images?: Image[];
};
