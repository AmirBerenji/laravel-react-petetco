import {Clinic} from "@/types/clinic";

export interface Branch {
  id: number | null
  name: string
  address:string
  phone:string
  email:string
  clinic:Clinic
}
