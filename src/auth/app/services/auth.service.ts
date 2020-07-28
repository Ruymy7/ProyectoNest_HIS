import { Injectable, Logger, HttpException, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { LogInDto } from 'src/auth/domain/dto/log-in-dto';
import { LogInResponseDto } from 'src/auth/domain/dto/log-in-response-dto';
import * as bcrypt from 'bcrypt'
import { RegisterService } from 'src/register/app/services/register.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/auth/domain/dto/payload.dto';
import { UsersService } from 'src/users/app/services/users.service';

@Injectable()
export class AuthService {

  constructor(private registerService: RegisterService, private jwtService: JwtService, private usersService: UsersService) { }

  async logIn(logInDto: LogInDto): Promise<LogInResponseDto> {
    try {
      const user = await this.registerService.findByEmail(logInDto.email)
      if (!user || !await bcrypt.compare(logInDto.password, user.password)) return { status: false }
      
      const jwtUser = {
        _id: user._id,
        email: user.email,
        name: user.name
      }
      const token = this.jwtService.sign({ data: jwtUser })
      const data = {
        token,
        user: jwtUser
      }
      return { status: true, data }

    } catch (e) {
      Logger.error(`Add login user error: `, e)
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async validateUserByJwt(payload: JwtPayload): Promise<boolean> {
    const user = this.usersService.findByEmail(payload.data.email)
    if(!user) throw new UnauthorizedException()
    return true
  }
}
