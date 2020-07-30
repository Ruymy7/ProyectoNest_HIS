# HIS Nest Project

<p align="center">Backend of the project created in the Bootcamp In House GeeksHubs - FutuRS (Ribera Salud)
<p align="center">

## Description

This application was developed using [NestJS](https://nestjs.com/) and a [MongoDB](https://www.mongodb.com/) database

## Deployed application

This application is already deployed in https://his-project-nestjs.herokuapp.com/ for testing. As it is deployed in the Heroku free tier server, it will take some time to run the first time you connect after 30 minutes.

## Installation

Run `npm install` to install all dependencies of the project 

## Running the app

You will need to rename the file `.env.example` to `.env` and set the fields DB_NAME, DB_USERNAME, DB_PASSWORD and JWT_PASSWORD. Now for testing the application you can use these:

```
DB_NAME=HIS
DB_USERNAME=user
DB_PASSWORD=fbkXVZJRrWiqR1VE
JWT_PASSWORD=<ANY KEY THAT YOU WANT>
```

By default the app serves the port 3000

```bash
# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Already developed frontend

Run the application in [this repository](https://github.com/Ruymy7/ProyectoAngular_HIS) to try this project. That app is also deployed in https://his-project-angular.herokuapp.com/
