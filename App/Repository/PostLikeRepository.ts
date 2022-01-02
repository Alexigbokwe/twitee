import Postlike from "App/Model/PostLike_model";
import { SQLPD_repository } from "Elucidate/Repository/SQLPD_repository";

class PostLikeRepository extends SQLPD_repository {
  constructor() {
    super(Postlike);
  }

  async findByIdWithAuthor(like_id: number): Promise<object> {
    try {
      let like = await Postlike.query().findById(like_id).withGraphFetched("author");
      return Promise.resolve(like);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default PostLikeRepository;
