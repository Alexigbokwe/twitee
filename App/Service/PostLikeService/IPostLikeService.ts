import CreatePostLikeRequestDTO from "App/DTO/PostLike/CreatePostLikeRequestDTO";
import PostLikeResponseDTO from "App/DTO/PostLike/PostLikeResponseDTO";

interface IPostLikeService {
  likePost(data: CreatePostLikeRequestDTO): Promise<PostLikeResponseDTO>;
}

export default IPostLikeService;
