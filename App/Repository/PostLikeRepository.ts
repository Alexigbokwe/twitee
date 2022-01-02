import Postlike from "App/Model/PostLike_model";
import { SQLPD_repository } from "Elucidate/Repository/SQLPD_repository";

class PostLikeRepository extends SQLPD_repository {
  constructor() {
    super(Postlike);
  }
}

export default PostLikeRepository;
