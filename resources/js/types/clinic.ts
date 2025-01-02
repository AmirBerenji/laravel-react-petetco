import {Branch} from "@/types/branch";

export interface Clinic {
  id: number;
  name: string;
  logo: File | string | null;
  banner: File | string | null;
  branches: Branch[];
}
