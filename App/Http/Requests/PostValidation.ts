"use strict";
import FormRequest from "Elucidate/Validator/FormRequest";

type postType = { post_author: number; post: string };
class PostValidation extends FormRequest {
  /**
   * Handle the request validation.
   * @param {*} data | e.g request body
   */
  async validate<T>(data: T) {
    return await FormRequest.make<T>(data, {
      post_author: "required|numeric",
      post: "required|string",
    });
  }
}

let postValidation = new PostValidation();
export { postValidation, postType };
