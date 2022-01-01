"use strict";
import IUser from "App/DTO/User/IUser";
import { Model } from "Elucidate/Database/Model";

class User extends Model implements IUser {
  // Model attributes
  id!: number;
  username!: string;
  email!: string;
  password!: string;

  // Table name
  static tableName = "users";
}

export default User;
