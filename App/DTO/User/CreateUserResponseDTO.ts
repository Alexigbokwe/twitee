import IUser from "./IUser";

class CreateUserResponseDTO implements IUser {
  id!: number;
  username!: string;
  email!: string;
  password!: string;
  created_at!: string;
  token!: string;

  constructor(data: object) {
    this.id = data["id"];
    this.username = data["username"];
    this.email = data["email"];
    this.password = data["password"];
    this.created_at = data["created_at"];
    this.token = data["token"];
  }
}

export default CreateUserResponseDTO;
