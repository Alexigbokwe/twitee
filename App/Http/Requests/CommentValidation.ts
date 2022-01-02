"use strict";
import FormRequest from "Elucidate/Validator/FormRequest";

type commentType = { comment_author: number; comment: string };

class CommentValidation extends FormRequest {
  /**
   * Handle the request validation.
   * @param {*} data | e.g request body
   */
  async validate<T>(data: T) {
    return await FormRequest.make<T>(data, {
      comment_author: "required|numeric",
      comment: "required|string|min:2",
    });
  }
}

let commentValidation = new CommentValidation();
export { commentValidation, commentType };
