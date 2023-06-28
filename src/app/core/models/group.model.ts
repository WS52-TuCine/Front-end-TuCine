import { Topic } from "./topic.model"
import { Person } from "./user-profile.model"

export interface Group {
  id?:number,
  name?:string,
  ubication?:string,
  description?:string,
  person?: Person
  topics?: Topic[],
}
