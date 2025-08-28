import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { FormFormate} from "./inputFormate"
import type { CardSchema } from "../schema/Zod.shema";

export interface DataFormate {
  Data: FormFormate;
  register: UseFormRegister<CardSchema>;
  inputErrorSms: FieldErrors<CardSchema>;
  style: string
}