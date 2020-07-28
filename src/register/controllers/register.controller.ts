import { Controller, Post, Body } from '@nestjs/common';
import { RegisterService } from '../app/services/register.service';
import { RegisterUserDto } from '../domain/dto/register-user-dto';

@Controller('register')
export class RegisterController {

  constructor(private registerService: RegisterService) { }

  @Post('')
  registerUser(@Body() registerUserDto: RegisterUserDto): Promise<void> {
    return this.registerService.registerUser(registerUserDto)
  }
}
