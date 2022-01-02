"use strict";
import FormRequest from "Elucidate/Validator/FormRequest";

type postLikeType = { post_id: number; author: number };

class PostLikeValidation extends FormRequest {
  /**
   * Handle the request validation.
   * @param {*} data | e.g request body
   */
  async validate<T>(data: T) {
    return await FormRequest.make<T>(data, {
      post_id: "required|numeric",
      author: "required|numeric",
    });
  }
}
let postLikeValidation = new PostLikeValidation();
export { postLikeValidation, postLikeType };
