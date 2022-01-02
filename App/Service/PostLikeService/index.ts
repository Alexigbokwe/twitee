import CreatePostLikeRequestDTO from "App/DTO/PostLike/CreatePostLikeRequestDTO";
import PostLikeResponseDTO from "App/DTO/PostLike/PostLikeResponseDTO";
import PostLikeRepository from "App/Repository/PostLikeRepository";
import IPostExistence from "../PostService/IPostExistence";
import IPostLikeService from "./IPostLikeService";

class PostLikeService implements IPostLikeService {
  protected postService: IPostExistence;

  constructor(PostService: IPostExistence) {
    this.postService = PostService;
  }

  private async getPostLike(like_id: number): Promise<PostLikeResponseDTO> {
    try {
      let like = await new PostLikeRepository().findByIdWithAuthor(like_id);
      return Promise.resolve(new PostLikeResponseDTO(like));
    } catch (error) {
      return Promise.reject(error);
    }
  }

  private async hasUserLikedPost(post_id: number, liked_by: number): Promise<boolean> {
    try {
      const check = await new PostLikeRepository().findOne({ id: post_id, liked_by });
      if (check) {
        return Promise.resolve(true);
      } else {
        return Promise.reject(false);
      }
      //return check != undefined ? Promise.resolve(true) : Promise.reject(false);
    } catch (error) {
      return Promise.reject(false);
    }
  }

  async likePost(data: CreatePostLikeRequestDTO): Promise<PostLikeResponseDTO> {
    try {
      let doesPostExist = await this.postService.doesPostExist(data.$post_id);
      if (doesPostExist) {
        const check = await new PostLikeRepository().findOne({ id: data.$post_id, liked_by: data.$liked_by });
        if (check) {
          return Promise.reject("You've liked this post before, can't like multiple times");
        } else {
          const likeObject = {
            post_id: data.$post_id,
            liked_by: data.$liked_by,
          };
          let savePostLike = await new PostLikeRepository().create(likeObject);
          return Promise.resolve(this.getPostLike(savePostLike["id"]));
        }
      } else {
        return Promise.reject("Post does not exist");
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default PostLikeService;
