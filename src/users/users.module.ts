import { Module } from '@nestjs/common';
import { UsersController } from './UI/users.controller';
import { UsersService } from './app/services/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersService]
})
export class UsersModule {}
