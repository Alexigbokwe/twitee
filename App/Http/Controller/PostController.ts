"use strict";
import CreatePostRequestDTO from "App/DTO/Post/CreatePostRequestDTO";
import CreatePostLikeRequestDTO from "App/DTO/PostLike/CreatePostLikeRequestDTO";
import CreateUserResponseDTO from "App/DTO/User/CreateUserResponseDTO";
import IPostLikeService from "App/Service/PostLikeService/IPostLikeService";
import IPostService from "App/Service/PostService/IPostService";
import { Request, Response, NextFunction } from "Elucidate/HttpContext";
import HttpResponse from "Elucidate/HttpContext/ResponseType";
import { postLikeType, postLikeValidation } from "../Requests/PostLikeValidation";
import { postValidation, postType } from "../Requests/PostValidation";

class PostController {
  protected postService: IPostService;
  protected postLikeService: IPostLikeService;

  constructor(PostService: IPostService, PostLikeService: IPostLikeService) {
    this.postService = PostService;
    this.postLikeService = PostLikeService;
  }
  /**
   * Display a listing of the resource.
   * @method GET
   * @endpoint api/post/all
   * @param Request
   * @return Response
   */
  index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      return await this.postService
        .getAllPosts()
        .then((posts) => {
          return HttpResponse.OK(res, { data: posts, status: true });
        })
        .catch((error) => {
          return HttpResponse.EXPECTATION_FAILED(res, { data: error, status: false });
        });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * Store a newly created resource in storage.
   * @method POST
   * @endpoint api/post/save
   * @param Request
   * @return Response
   */
  store = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let validate = await postValidation.validate<postType>(req.body);
      if (!validate.success) return HttpResponse.BAD_REQUEST(res, { message: validate.message, data: validate.data, status: false });

      let post = new CreatePostRequestDTO(validate.data);
      return await this.postService
        .createPost(post)
        .then((createdPost) => {
          return HttpResponse.OK(res, { message: "Post successfully created", data: createdPost, status: true });
        })
        .catch((error) => {
          return HttpResponse.EXPECTATION_FAILED(res, { data: error, status: false });
        });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * Display the specified resource.
   * @method GET
   * @endpoint api/post/get/:post_id
   * @param Request
   * @return Response
   */
  show = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let validate = await req.validate(req.params, { post_id: "required|numeric" });
      if (!validate.success) return HttpResponse.BAD_REQUEST(res, { message: validate.message, data: validate.data, status: false });

      return await this.postService
        .getPost(Number(validate.data["post_id"]))
        .then((post) => {
          return HttpResponse.OK(res, { data: post, status: true });
        })
        .catch((error) => {
          return HttpResponse.EXPECTATION_FAILED(res, { data: error, status: false });
        });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * Like the specified resource in storage.
   * @method GET
   * @endpoint api/post/like
   * @param Request
   * @return Response
   */
  like = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let validate = await postLikeValidation.validate<postLikeType>(req.body);
      if (!validate.success) return HttpResponse.BAD_REQUEST(res, { message: validate.message, data: validate.data, status: false });

      let like = new CreatePostLikeRequestDTO(validate.data);

      return await this.postLikeService
        .likePost(like)
        .then((data) => {
          return HttpResponse.OK(res, { data, status: true });
        })
        .catch((error) => {
          return HttpResponse.EXPECTATION_FAILED(res, { data: error, status: false });
        });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * Remove the specified resource from storage.
   * @method DELETE
   * @endpoint api/post/delete/:post_id
   * @param Request
   * @return Response
   */
  destroy = async (req: Request<CreateUserResponseDTO>, res: Response, next: NextFunction) => {
    try {
      let validate = await req.validate(req.params, { post_id: "required|numeric" });
      if (!validate.success) return HttpResponse.BAD_REQUEST(res, { data: validate.data, status: false });

      return await this.postService
        .deletePost(Number(validate.data["post_id"]), req.user.id)
        .then((deleteMessage) => {
          return HttpResponse.OK(res, { message: deleteMessage, data: deleteMessage, status: true });
        })
        .catch((error) => {
          return HttpResponse.EXPECTATION_FAILED(res, { data: error, status: false });
        });
    } catch (error) {
      return next(error);
    }
  };
}

export default PostController;
