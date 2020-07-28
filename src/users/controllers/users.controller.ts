import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from '../app/services/users.service';
import { CreatePatientDto } from '../domain/dto/create/create-patient-dto';
import { CreateProfessionalDto } from '../domain/dto/create/create-professional-dto';
import { UpdatePatientDto } from '../domain/dto/update/update-patient-dto';
import { UpdateProfessionalDto } from '../domain/dto/update/update-professional-dto';
import { User } from '../domain/models/user.interface';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) { }

  @Get()
  @UseGuards(AuthGuard())
  getUsers(): Promise<User[]> {
    return this.usersService.getUsers()
  }

  @Get('/:id')
  @UseGuards(AuthGuard())
  getUser(@Param('id') id: string): Promise<User> {
    return this.usersService.getUser(id)
  }

  @Post()
  @UseGuards(AuthGuard())
  addUser(@Body() user: CreatePatientDto | CreateProfessionalDto): Promise<User> {
    return this.usersService.addUser(user)
  }

  @Put('/:id')
  @UseGuards(AuthGuard())
  updateUser(@Param('id') id: string, @Body() user: UpdatePatientDto | UpdateProfessionalDto): Promise<User> {
    return this.usersService.updateUser(id, user)
  }

  @Delete('/:id')
  @UseGuards(AuthGuard())
  deleteUser(@Param('id') id: string): void {
    this.usersService.deleteUser(id)
  }

}
