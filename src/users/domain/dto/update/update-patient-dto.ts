import { UserDto } from "../user-dto";

type insurance = 'salud' | 'familiar' | 'dental'

interface Insurance {
  cardNumber: string
  name: string
  type: insurance
}

export class UpdatePatientDto extends UserDto {
  id: string
  NHC: string
  insurance: Insurance[]
}