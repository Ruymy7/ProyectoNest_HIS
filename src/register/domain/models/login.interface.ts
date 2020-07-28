import { Document } from "mongoose";

export interface Login extends Document {
  name: string
  email: string
  password: string
}