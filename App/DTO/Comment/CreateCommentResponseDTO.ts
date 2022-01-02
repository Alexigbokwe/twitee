class CreateCommentResponseDTO {
  id: number;
  commented_by: {
    id: number;
    username: string;
  };
  comment_content: string;
  created_at: string;

  constructor(data: object) {
    this.id = data["id"];
    this.commented_by = data["author"];
    this.comment_content = data["comment_content"];
    this.created_at = data["created_at"];
  }
}

export default CreateCommentResponseDTO;
