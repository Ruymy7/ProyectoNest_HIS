import { Controller, Post, Body } from '@nestjs/common';
import { RegisterService } from '../app/services/register.service';
import { RegisterUserDto } from '../domain/dto/register-user-dto';

@Controller('login')
export class RegisterController {

  constructor(private registerService: RegisterService) { }

  @Post('new')
  registerUser(@Body() registerUserDto: RegisterUserDto): Promise<void> {
    return this.registerService.registerUser(registerUserDto)
  }
}
