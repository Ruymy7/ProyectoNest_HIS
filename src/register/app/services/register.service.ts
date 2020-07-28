import { Injectable, HttpStatus, Logger, HttpException } from '@nestjs/common';
import { RegisterUserDto } from 'src/register/domain/dto/register-user-dto';
import { Login } from 'src/register/domain/models/login.interface';
import * as bcrypt from 'bcrypt'
import * as mongoose from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RegisterService {

  constructor(@InjectModel("login") private loginModel: mongoose.Model<Login>) { }

  async registerUser(registerUserDto: RegisterUserDto): Promise<void> {
    try {

      const hash = await bcrypt.hash(registerUserDto.password, 10)
      registerUserDto.password = hash

      const loginUser: Login = new this.loginModel(registerUserDto)
      await loginUser.save()

    } catch (e) {
      Logger.error(`Register user error: `, e)
      if (e.message && e.message.includes('duplicate key error')) throw new HttpException('User already registered', HttpStatus.CONFLICT)
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async findByEmail(email: string): Promise<Login> {
    return this.loginModel.findOne({ email: email })
  }

}
