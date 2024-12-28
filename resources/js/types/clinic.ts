import {Branch} from "@/types/branch";

export interface Clinic {
  id: number
  name: string
  branches:Branch[]
}
