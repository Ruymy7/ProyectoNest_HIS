import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { UsersService } from '../app/services/users.service';
import { CreatePatientDto } from '../domain/dto/create/create-patient-dto';
import { CreateProfessionalDto } from '../domain/dto/create/create-professional-dto';
import { UpdatePatientDto } from '../domain/dto/update/update-patient-dto';
import { UpdateProfessionalDto } from '../domain/dto/update/update-professional-dto';
import { User } from '../domain/models/user.interface';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) { }

  @Get()
  getUsers(): Promise<User[]> {
    return this.usersService.getUsers()
  }

  @Get('/:id')
  getUser(@Param('id') id: string): Promise<User> {
    return this.usersService.getUser(id)
  }

  @Post()
  addUser(@Body() user: CreatePatientDto | CreateProfessionalDto): Promise<User> {
    return this.usersService.addUser(user)
  }

  @Put('/:id')
  updateUser(@Param('id') id: string, @Body() user: UpdatePatientDto | UpdateProfessionalDto): Promise<User> {
    return this.usersService.updateUser(id, user)
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string): void {
    this.usersService.deleteUser(id)
  }

}
