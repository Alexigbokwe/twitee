"use strict";
import CreateCommentRequestDTO from "App/DTO/Comment/CreateCommentRequestDTO";
import ICommentService from "App/Service/CommentService/ICommentService";
import { Request, Response, NextFunction } from "Elucidate/HttpContext";
import HttpResponse from "Elucidate/HttpContext/ResponseType";
import { commentType, commentValidation } from "../Requests/CommentValidation";

class CommentController {
  protected commentService: ICommentService;

  constructor(CommentService: ICommentService) {
    this.commentService = CommentService;
  }
  /**
   * Store a newly created resource in storage.
   * @method POST
   * @endpoint api/comment/save
   * @param Request
   * @return Response
   */
  store = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let validate = await commentValidation.validate<commentType>(req.body);
      if (!validate.success) return HttpResponse.BAD_REQUEST(res, { data: validate.data, status: false });

      const comment = new CreateCommentRequestDTO(validate.data);

      return await this.commentService
        .createComment(comment)
        .then((savedComment) => {
          return HttpResponse.OK(res, { data: savedComment, status: true });
        })
        .catch((error) => {
          return HttpResponse.EXPECTATION_FAILED(res, { data: error, status: false });
        });
    } catch (error) {
      return next(error);
    }
  };
}

export default CommentController;
