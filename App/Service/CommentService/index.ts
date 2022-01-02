import CreateCommentRequestDTO from "App/DTO/Comment/CreateCommentRequestDTO";
import CreateCommentResponseDTO from "App/DTO/Comment/CreateCommentResponseDTO";
import CommentRepository from "App/Repository/CommentRepository";
import ICommentService from "./ICommentService";

class CommentService implements ICommentService {
  async createComment(comment: CreateCommentRequestDTO): Promise<CreateCommentResponseDTO> {
    try {
      const commentObject = {
        commented_by: comment.$commented_by,
        comment_content: comment.$comment_content,
      };
      let savedComment = await new CommentRepository().create(commentObject);
      return Promise.resolve(this.getComment(savedComment["id"]));
    } catch (error) {
      return Promise.reject(error);
    }
  }

  private async getComment(comment_id: number): Promise<CreateCommentResponseDTO> {
    try {
      const comment = await new CommentRepository().findByIdWithAuthor(comment_id);
      return Promise.resolve(new CreateCommentResponseDTO(comment));
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default CommentService;
