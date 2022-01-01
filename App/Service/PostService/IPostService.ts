import CreatePostRequestDTO from "App/DTO/Post/CreatePostRequestDTO";
import CreatePostResponseDTO from "App/DTO/Post/CreatePostResponseDTO";

interface IPostService {
  getAllPosts(): Promise<CreatePostResponseDTO[]>;
  getPost(post_id: number): Promise<CreatePostResponseDTO>;
  likePost(post_id: number): Promise<number>;
  createPost(post: CreatePostRequestDTO): Promise<CreatePostResponseDTO>;
  deletePost(post_id: number, author_id: number): Promise<string>;
}

export default IPostService;
