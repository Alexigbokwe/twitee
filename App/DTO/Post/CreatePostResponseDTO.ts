class CreatePostResponseDTO {
  id!: number;
  posted_by: {
    id: number;
    username: string;
  };
  post_content: string;
  likes: number;
  created_at!: string;

  constructor(data: object) {
    this.id = data["id"];
    this.posted_by = data["posted_by"];
    this.post_content = data["post_content"];
    this.likes = data["likes"];
    this.created_at = data["created_at"];
  }
}

export default CreatePostResponseDTO;
