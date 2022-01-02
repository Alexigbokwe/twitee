import { postLikeType } from "App/Http/Requests/PostLikeValidation";

class CreatePostLikeRequestDTO {
  private post_id: number;
  private liked_by: number;

  constructor(data: postLikeType) {
    this.post_id = data.post_id;
    this.liked_by = data.author;
  }

  /**
   * Getter $post_id
   * @return {number}
   */
  public get $post_id(): number {
    return this.post_id;
  }

  /**
   * Getter $liked_by
   * @return {number}
   */
  public get $liked_by(): number {
    return this.liked_by;
  }
}

export default CreatePostLikeRequestDTO;
