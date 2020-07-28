import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from 'passport-jwt'
import { AuthService } from "../services/auth.service";
import { JwtPayload } from '../../domain/dto/payload.dto'

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {
  
  constructor(private authService: AuthService) { 
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: "process.env.JWT_PASSWORD"
    })
  }

  async validate(payload: JwtPayload): Promise<boolean> {
    return this.authService.validateUserByJwt(payload)
  }

}