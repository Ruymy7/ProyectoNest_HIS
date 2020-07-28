import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'
import { RegisterModule } from './register/register.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    MongooseModule.forRoot(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@proyectors.yob2y.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {useCreateIndex: true}),
    RegisterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
