import CreatePostRequestDTO from "App/DTO/Post/CreatePostRequestDTO";
import CreatePostResponseDTO from "App/DTO/Post/CreatePostResponseDTO";
import IPost from "App/DTO/Post/IPost";
import PostRepository from "App/Repository/PostRespository";
import IPostExistence from "./IPostExistence";
import IPostService from "./IPostService";

class PostService implements IPostService, IPostExistence {
  async getAllPosts(): Promise<CreatePostResponseDTO[]> {
    try {
      const posts = <IPost[]>await new PostRepository().getAllWithAuthors();
      let response: CreatePostResponseDTO[] = posts.map((post) => {
        return new CreatePostResponseDTO(post);
      });
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getPost(post_id: number): Promise<CreatePostResponseDTO> {
    try {
      return await this.doesPostExist(post_id)
        .then(async () => {
          const post = <IPost>await new PostRepository().findByIdWithAuthor(post_id);
          return Promise.resolve(new CreatePostResponseDTO(post));
        })
        .catch(() => {
          return Promise.reject("Post does not exist");
        });
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async createPost(post: CreatePostRequestDTO): Promise<CreatePostResponseDTO> {
    try {
      const postData = {
        posted_by: post.$posted_by,
        post_content: post.$post_content,
      };
      let savedPost = await new PostRepository().create(postData);
      return Promise.resolve(this.getPost(savedPost["id"]));
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async deletePost(post_id: number, author_id: number): Promise<string> {
    try {
      return await this.doesPostExist(post_id)
        .then(async () => {
          const post = <IPost>await new PostRepository().findById(post_id);
          if (post.posted_by != author_id) {
            return Promise.reject({ type: "permission", message: "Sorry, you don't permission to delete this post" });
          }
          await new PostRepository().deleteWhere({ id: post_id, posted_by: author_id });
          return Promise.resolve("Post Successfully removed from system");
        })
        .catch((error) => {
          if (error["type"] == "permission") {
            return Promise.reject(error["message"]);
          }
          return Promise.reject("Post does not exist");
        });
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async doesPostExist(post_id: number): Promise<boolean> {
    try {
      const check = <IPost>await new PostRepository().findById(post_id);
      return check.id ? Promise.resolve(true) : Promise.reject(false);
    } catch (error) {
      return Promise.reject(false);
    }
  }
}

export default PostService;
