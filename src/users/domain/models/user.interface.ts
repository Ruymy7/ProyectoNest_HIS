import { Document } from 'mongoose'

type professional = 'Médico' | 'Enfermero' | 'Administrativo' | ''

type insurance = 'salud' | 'familiar' | 'dental'

interface Insurance {
  cardNumber: string
  name: string
  type: insurance
}

interface Address {
  street: string
  number: string
  door?: string
  postalCode: string
  city: string
}

export interface User extends Document {
  _id: string
  name: string
  lastName: string
  secondLastName?: string
  gender?: string
  birthdate?: string
  idNumber?: string
  address?: Address
  medicalBoardNumber: string
  professionalType?: professional
  NHC: string
  insurance: Insurance[]
}