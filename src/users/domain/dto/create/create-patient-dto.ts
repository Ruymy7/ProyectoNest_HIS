import { UserDto } from "../user-dto";

type insurance = 'salud' | 'familiar' | 'dental'

interface Insurance {
  cardNumber: string
  name: string
  type: insurance
}

export class CreatePatientDto extends UserDto {
  NHC: string
  insurance: Insurance[]
}