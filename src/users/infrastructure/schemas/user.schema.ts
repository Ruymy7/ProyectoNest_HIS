import * as mongoose from 'mongoose';

export const user = new mongoose.Schema({
  NHC: String,
  name: String,
  lastName: String,
  secondLastname: String,
  gender: String,
  birthdate: String,
  idNumber: String,
  address: {
    street: String,
    number: String,
    door: String,
    postalCode: String,
    city: String
  },
  insurance: [],
  medicalBoardNumber: String,
  professionalType: String
})