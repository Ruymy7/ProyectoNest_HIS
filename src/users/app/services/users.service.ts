import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from 'src/users/domain/dto/create/create-patient-dto';
import { CreateProfessionalDto } from 'src/users/domain/dto/create/create-professional-dto';
import { UpdatePatientDto } from 'src/users/domain/dto/update/update-patient-dto';
import { UpdateProfessionalDto } from 'src/users/domain/dto/update/update-professional-dto';

import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/users/domain/models/user.interface';


@Injectable()
export class UsersService {

  constructor(@InjectModel("user") private userModel: mongoose.Model<User>) { }

  users: User[] = []

  async getUsers(): Promise<User[]> {
    return await this.userModel.find({})
  }

  async getUser(id: string): Promise<User> {
    return await this.userModel.findOne({ _id: id })
  }

  // TODO: Change Patient | Professional to CreatePatientDto | CreateProfessionalDto
  async addUser(user: CreatePatientDto | CreateProfessionalDto): Promise<User> {
    const newUser: User = new this.userModel(user)
    return newUser.save()
  }

  // TODO: Change Patient | Professional to UpdatePatientDto | UpdateProfessionalDto
  async updateUser(id: string, user: UpdatePatientDto | UpdateProfessionalDto): Promise<User> {
    return await this.userModel.updateOne({ _id: id }, user)
  }

  async deleteUser(id: string): Promise<void> {
    await this.userModel.deleteOne({ _id: id })
  }

}
