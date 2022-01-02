class PostLikeResponseDTO {
  id: number;
  liked_by: {
    id: number;
    username: string;
  };
  post_id: number;
  created_at: string;

  constructor(data: object) {
    this.id = data["id"];
    this.liked_by = data["author"];
    this.post_id = data["post_id"];
    this.created_at = data["created_at"];
  }
}

export default PostLikeResponseDTO;
