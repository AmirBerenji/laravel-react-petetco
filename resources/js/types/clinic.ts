import {Branch} from "@/types/branch";

export interface Clinic {
  id: number;
  name: string;
  logo: File | string;
  banner: File | string;
  branches: Branch[];
}
