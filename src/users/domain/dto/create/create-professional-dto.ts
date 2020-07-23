import { UserDto } from "../user-dto";

type professional = 'Médico' | 'Enfermero' | 'Administrativo' | ''

export class CreateProfessionalDto extends UserDto {
  medicalBoardNumber: string
  professionalType?: professional
}