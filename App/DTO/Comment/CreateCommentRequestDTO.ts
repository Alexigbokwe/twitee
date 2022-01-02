import { commentType } from "App/Http/Requests/CommentValidation";
import IComment from "./IComment";

class CreateCommentRequestDTO {
  private commented_by: number;
  private comment_content: string;
  private post_id: number;

  constructor(data: commentType) {
    this.commented_by = data.comment_author;
    this.comment_content = data.comment;
    this.post_id = data.post_id;
  }

  /**
   * Getter $post_id
   * @return {number}
   */
  public get $post_id(): number {
    return this.post_id;
  }

  /**
   * Getter $commented_by
   * @return {number}
   */
  public get $commented_by(): number {
    return this.commented_by;
  }

  /**
   * Getter $comment_content
   * @return {string}
   */
  public get $comment_content(): string {
    return this.comment_content;
  }
}

export default CreateCommentRequestDTO;
