"use strict";
import FormRequest from "Elucidate/Validator/FormRequest";

class RegisterValidation extends FormRequest {
  /**
   * Handle registration request validation.
   * @param {*} data | e.g request body
   */
  static async validate<T>(data: any) {
    return await this.make<T>(data, {
      email: "required|string|email|max:255",
      password: "required|string|min:8",
    });
  }
}

export default RegisterValidation;
