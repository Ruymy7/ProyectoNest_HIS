import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
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
    try {
      return await this.userModel.find({})
    } catch (e) {
      Logger.error(`Get all users error: `, e)
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async getUser(id: string): Promise<User> {
    try {
      const user = await this.userModel.findOne({ _id: id })
      if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND)
      return user
    } catch (e) {
      Logger.error(`Get user ${id} error: `, e)
      if (e.name.includes('CastError') || e.response.includes('User not found')) throw e
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async addUser(user: CreatePatientDto | CreateProfessionalDto): Promise<User> {
    try {
      const newUser: User = new this.userModel(user)
      return await newUser.save()
    } catch (e) {
      Logger.error(`Add user error: `, e)
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async updateUser(id: string, user: UpdatePatientDto | UpdateProfessionalDto): Promise<User> {
    try {
      return await this.userModel.updateOne({ _id: id }, user)
    } catch (e) {
      Logger.error(`Update user ${id} error: `, e)
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async deleteUser(id: string): Promise<void> {
    try {
      await this.userModel.deleteOne({ _id: id })
    } catch (e) {
      Logger.error(`Delete user ${id} error: `, e)
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.userModel.findOne({email: email})
  }

}
