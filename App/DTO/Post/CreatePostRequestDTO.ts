import { postType } from "App/Http/Requests/PostValidation";

class CreatePostRequestDTO {
  private posted_by: number;
  private post_content: string;

  constructor(data: postType) {
    this.posted_by = data.post_author;
    this.post_content = data.post;
  }

  /**
   * Getter $posted_by
   * @return {number}
   */
  public get $posted_by(): number {
    return this.posted_by;
  }

  /**
   * Getter $post_content
   * @return {string}
   */
  public get $post_content(): string {
    return this.post_content;
  }
}

export default CreatePostRequestDTO;
