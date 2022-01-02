import IUser from "./IUser";

class CreateUserResponseDTO {
  id!: number;
  username!: string;
  email!: string;
  created_at!: string;
  token!: string;

  constructor(data: object) {
    this.id = data["id"];
    this.username = data["username"];
    this.email = data["email"];
    this.created_at = data["created_at"];
    this.token = data["token"];
  }
}

export default CreateUserResponseDTO;
