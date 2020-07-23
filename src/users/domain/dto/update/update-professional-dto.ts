import { UserDto } from "../user-dto";

type professional = 'Médico' | 'Enfermero' | 'Administrativo' | ''

export class UpdateProfessionalDto extends UserDto {
  id: string
  medicalBoardNumber: string
  professionalType?: professional
}