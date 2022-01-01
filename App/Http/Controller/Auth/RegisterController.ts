import Hash from "Elucidate/Hashing/Hash";
import { Request, Response } from "Elucidate/HttpContext";
import HttpResponse from "Elucidate/HttpContext/ResponseType";
import Authenticator from "Elucidate/Auth/Authenticator";
import CreateUserRequestDTO from "App/DTO/User/CreateUserRequestDTO";
import CreateUserResponseDTO from "App/DTO/User/CreateUserResponseDTO";
import RegisterValidation from "App/Http/Requests/RegisterValidation";
import OnboardingMail from "App/Jobs/OnboardingMail_job";

class RegisterController {
  protected Auth: Authenticator;

  constructor(Authenticator: Authenticator) {
    this.Auth = Authenticator;
  }

  /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation of their token.
    |
    */
  register = async (req: Request, res: Response) => {
    let validation = await RegisterValidation.validate<CreateUserRequestDTO>(req.body);
    if (validation.success) {
      return await this.create(new CreateUserRequestDTO(validation.data), res);
    } else {
      return HttpResponse.BAD_REQUEST(res, validation);
    }
  };

  /**
   * Create a new user instance after a valid registration.
   * @param {object} data
   * @param {Response} res
   * @return User
   */
  private create = async (data: CreateUserRequestDTO, res: Response) => {
    const hashedPassword = await Hash.make(data.$password);
    const userData = {
      username: data.$username,
      email: data.$email,
      password: hashedPassword,
    };
    return await this.Auth.createUser(userData)
      .then(async (user: any) => {
        let token = await this.Auth.generateToken(user);
        user["token"] = token;
        const responsData = new CreateUserResponseDTO(user);
        new OnboardingMail().dispatch(this.welcomeOnBoardmailDetails(responsData));
        return HttpResponse.OK(res, { message: "User successfully registered", status: true, data: responsData });
      })
      .catch((err: { msg: any; payload: any }) => {
        return HttpResponse.UNAUTHORIZED(res, {
          status: false,
          message: err.msg,
          data: err.payload,
        });
      });
  };

  private welcomeOnBoardmailDetails(userData: CreateUserResponseDTO) {
    const sender_name = "Twitee";
    const client_name = userData.username;
    const to = userData.email;
    const template = "WelcomeOnBoard";
    const body = "";
    const from = "admin@Twitee.com";
    const subject = "Welcome On Board";
    return { sender_name, client_name, to, template, body, from, subject };
  }
}

export default RegisterController;
