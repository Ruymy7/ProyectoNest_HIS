import { User } from "./user.interface";

type insurance = 'salud' | 'familiar' | 'dental'

interface Insurance {
  cardNumber: string
  name: string
  type: insurance
}


export interface Patient extends User {
  NHC: string
  insurance: Insurance[]
}