interface Address {
  street: string
  number: string
  door?: string
  postalCode: string
  city: string
}

export class UserDto {
  name: string
  lastName: string
  secondLastName?: string
  gender?: string
  birthdate?: string
  idNumber?: string
  address?: Address
}
