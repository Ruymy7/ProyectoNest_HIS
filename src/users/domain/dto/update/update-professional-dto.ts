import { UserDto } from "../user-dto";

type professional = 'Médico' | 'Enfermero' | 'Administrativo' | ''

export class UpdateProfessionalDto extends UserDto {
  _id: string
  medicalBoardNumber: string
  professionalType?: professional
}