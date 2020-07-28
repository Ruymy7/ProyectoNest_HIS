import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './app/services/auth.service';
import { RegisterModule } from 'src/register/register.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt'
import { JWTStrategy } from './app/strategies/jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule.register({defaultStrategy: 'jwt', session: false}),
    JwtModule.register({
      secret: "process.env.JWT_PASSWORD",
      signOptions: {
        expiresIn: 3600
      }
    }),
    RegisterModule],
  controllers: [AuthController],
  providers: [AuthService, JWTStrategy]
})
export class AuthModule {}
