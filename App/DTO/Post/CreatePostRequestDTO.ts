class CreatePostRequestDTO {
  private posted_by: number;
  private post_content: string;

  constructor(data: CreatePostRequestDTO) {
    this.posted_by = data.posted_by;
    this.post_content = data.post_content;
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
