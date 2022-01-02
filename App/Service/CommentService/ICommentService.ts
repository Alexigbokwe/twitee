import CreateCommentRequestDTO from "App/DTO/Comment/CreateCommentRequestDTO";
import CreateCommentResponseDTO from "App/DTO/Comment/CreateCommentResponseDTO";

interface ICommentService {
  createComment(comment: CreateCommentRequestDTO): Promise<CreateCommentResponseDTO>;
}

export default ICommentService;
