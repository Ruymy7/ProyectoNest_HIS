import { User } from "./user.interface";

type professional = 'Médico' | 'Enfermero' | 'Administrativo' | ''

export interface Professional extends User{
  medicalBoardNumber: string
  professionalType?: professional
}