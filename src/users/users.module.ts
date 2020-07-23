import { Module } from '@nestjs/common';
import { UsersController } from './UI/users.controller';
import { UsersService } from './app/services/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { user } from './infrastructure/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'user', schema: user, collection: 'users' }])
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersService]
})
export class UsersModule { }
