import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { UsersService } from '../app/services/users.service';
import { Professional } from '../domain/models/professional.interface';
import { Patient } from '../domain/models/patient.interface';
import { CreatePatientDto } from '../domain/dto/create/create-patient-dto';
import { CreateProfessionalDto } from '../domain/dto/create/create-professional-dto';
import { UpdatePatientDto } from '../domain/dto/update/update-patient-dto';
import { UpdateProfessionalDto } from '../domain/dto/update/update-professional-dto';

type User = Professional | Patient

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) { }

  @Get()
  getUsers(): User[] {
    return this.usersService.getUsers()
  }

  @Get('/:id')
  getUser(@Param('id') id: string): User {
    return this.usersService.getUser(id)
  }

  // TODO: Change Patient | Professional to CreatePatientDto | CreateProfessionalDto
  @Post()
  addUser(@Body() user: User): User {
    return this.usersService.addUser(user)
  }
  // TODO: Change Patient | Professional to UpdatePatientDto | UpdateProfessionalDto
  @Put('/:id')
  updateUser(@Param('id') id: string, @Body() user: User): User {
    return this.usersService.updateUser(id, user)
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string): void {
    this.usersService.deleteUser(id)
  }

}
