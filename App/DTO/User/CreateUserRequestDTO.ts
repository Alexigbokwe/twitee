class CreateUserRequestDTO {
  private username: string = "";
  private email: string;
  private password: string;

  constructor(data: CreateUserRequestDTO) {
    this.$username = data.email;
    this.email = data.email;
    this.password = data.password;
  }

  /**
   * Setter $username
   * @param {string } value
   */
  public set $username(value: string) {
    const emailSplit = value.split("@");
    this.username = emailSplit[0];
  }

  /**
   * Getter $username
   * @return {string }
   */
  public get $username(): string {
    return this.username;
  }

  /**
   * Getter $email
   * @return {string}
   */
  public get $email(): string {
    return this.email;
  }

  /**
   * Getter $password
   * @return {string}
   */
  public get $password(): string {
    return this.password;
  }
}

export default CreateUserRequestDTO;
