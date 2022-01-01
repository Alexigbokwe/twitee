import Comment from "App/Model/Comment_model";
import { SQLPD_repository } from "Elucidate/Repository/SQLPD_repository";

class CommentRepository extends SQLPD_repository {
  constructor() {
    super(Comment);
  }
}

export default CommentRepository;
