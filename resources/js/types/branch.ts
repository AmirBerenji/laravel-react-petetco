import {Clinic} from "@/types/clinic";

export interface Branch {
  id: number
  name: string
  address:string
  phone:string
  email:string
  clinic?:Clinic|null
}
