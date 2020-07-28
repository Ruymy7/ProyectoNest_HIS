import { Module } from '@nestjs/common';
import { RegisterController } from './controllers/register.controller';
import { RegisterService } from './app/services/register.service';
import { MongooseModule } from '@nestjs/mongoose';
import { login } from './schemas/login.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'login', schema: login, collection: 'login' }])],
  controllers: [RegisterController],
  providers: [RegisterService],
  exports:[RegisterService]
})
export class RegisterModule {}
