import Post from "App/Model/Post_model";
import { SQLPD_repository } from "Elucidate/Repository/SQLPD_repository";

class PostRepository extends SQLPD_repository {
  constructor() {
    super(Post);
  }

  async getAllWithAuthors(): Promise<object[]> {
    try {
      let posts = await Post.query().withGraphFetched("author");
      return Promise.resolve(posts);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async findByIdWithAuthor(post_id: number): Promise<object> {
    try {
      let post = await Post.query().findById(post_id).withGraphFetched("author");
      return Promise.resolve(post);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default PostRepository;
