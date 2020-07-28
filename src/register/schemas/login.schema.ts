import * as mongoose from 'mongoose';

export const login = new mongoose.Schema({
  name: String,
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true, unique: false}
}, {})