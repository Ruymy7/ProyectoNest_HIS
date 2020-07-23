import { Injectable } from '@nestjs/common';
import { Professional } from 'src/users/domain/models/professional.interface';
import { Patient } from 'src/users/domain/models/patient.interface';
import { CreatePatientDto } from 'src/users/domain/dto/create/create-patient-dto';
import { CreateProfessionalDto } from 'src/users/domain/dto/create/create-professional-dto';
import { UpdatePatientDto } from 'src/users/domain/dto/update/update-patient-dto';
import { UpdateProfessionalDto } from 'src/users/domain/dto/update/update-professional-dto';

import {v4 as uuid} from 'uuid'

type User = Patient | Professional // TODO: Add | Professional

@Injectable()
export class UsersService {
  users: User[] = [
    {
      "name": "Ruymán",
      "lastName": "Padrón",
      "secondLastName": "Padrón",
      "gender": "Masculino",
      "birthdate": "1997-09-01T23:00:00.000Z",
      "idNumber": "44558825J",
      "address": {
        "street": "San Cipriano",
        "number": "5",
        "door": "1º E",
        "postalCode": "28018",
        "city": "Madrid"
      },
      "NHC": "87563212",
      "insurance": [
        {
          "cardNumber": "12345679",
          "name": "Mi Seguro",
          "type": "salud"
        },
        {
          "cardNumber": "987654321",
          "name": "Mi Seguro2",
          "type": "dental"
        }
      ],
      "id": '1'
    },
    {
      "name": "Manuel",
      "lastName": "Alonso",
      "secondLastName": "Alonso",
      "gender": "",
      "birthdate": "",
      "idNumber": "",
      "address": {
        "street": "",
        "number": "",
        "door": "",
        "postalCode": "",
        "city": ""
      },
      "medicalBoardNumber": "55662385",
      "professionalType": "Médico",
      "id": '10'
    }
  ]

  getUsers(): User[] {
    return this.users
  }

  getUser(id: string): User {
    return this.users.find(u => u.id === id)
  }

  // TODO: Change Patient | Professional to CreatePatientDto | CreateProfessionalDto
  addUser(user: User): User {
    user.id = uuid()
    this.users.push(user)
    return this.users[this.users.length - 1]
  }

  // TODO: Change Patient | Professional to UpdatePatientDto | UpdateProfessionalDto
  updateUser(id: string, user: User): User {
    const currentUser = this.users.find(user => user.id === id)
    const index = this.users.indexOf(currentUser)
    this.users.splice(index, 1, user)
    return this.users[index]
  }

  deleteUser(id: string): void {
    this.users = this.users.filter(user => user.id !== id)
  }

}
