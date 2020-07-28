import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './app/services/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { user } from './schemas/user.schema';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'user', schema: user, collection: 'users' }]),
    PassportModule.register({defaultStrategy: 'jwt', session: false})
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule { }
