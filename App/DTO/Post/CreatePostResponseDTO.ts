class CreatePostResponseDTO {
  id!: number;
  posted_by: {
    id: number;
    username: string;
  };
  post_content: string;
  likes: number;
  comment: object[];
  created_at!: string;

  constructor(data: object) {
    this.id = data["id"];
    this.posted_by = data["author"];
    this.post_content = data["post_content"];
    this.likes = data["likes"];
    this.created_at = data["created_at"];
    this.comment = data["comment"];
  }
}

export default CreatePostResponseDTO;
