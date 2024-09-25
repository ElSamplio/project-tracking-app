import { Site } from "./site"

export type Project = {
    _id: string,
    name: string,
    description?: string,
    sites?: Site[]
}