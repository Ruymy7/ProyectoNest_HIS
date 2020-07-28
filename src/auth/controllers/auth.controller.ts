import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { LogInDto } from 'src/auth/domain/dto/log-in-dto';
import { AuthService } from '../app/services/auth.service';
import { LogInResponseDto } from '../domain/dto/log-in-response-dto';
import { Response } from 'express'

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) { }

  @Post()
  async logIn(@Body() logInDto: LogInDto, @Res() res: Response): Promise<Response<LogInResponseDto>> {
    const login = await this.authService.logIn(logInDto)
    login.status ? res.status(HttpStatus.OK) : res.status(HttpStatus.UNAUTHORIZED)
    return res.json(login)
  }

}
