import Comment from "App/Model/Comment_model";
import { SQLPD_repository } from "Elucidate/Repository/SQLPD_repository";

class CommentRepository extends SQLPD_repository {
  constructor() {
    super(Comment);
  }

  async findByIdWithAuthor(comment_id: number): Promise<object> {
    try {
      let comment = await Comment.query().findById(comment_id).withGraphFetched("author");
      return Promise.resolve(comment);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default CommentRepository;
