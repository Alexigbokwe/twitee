class CreatePostResponseDTO {
  id!: number;
  posted_by: {
    id: number;
    username: string;
  };
  post_content: string;
  likes: {
    id: number;
    post_id: number;
    liked_by: { id: number; username: string };
  }[] = [];
  like_count: number;
  comment: {
    id: number;
    post_id: number;
    commented_by: { id: number; username: string };
    comment_content: string;
    created_at: number;
  }[] = [];
  created_at!: string;

  constructor(data: object) {
    this.id = data["id"];
    this.posted_by = data["author"];
    this.post_content = data["post_content"];
    this.created_at = data["created_at"];
    this.like_count = data["likes"].length;
    if (this.like_count > 0) {
      this.likes = data["likes"].map((like: object) => {
        return {
          id: <number>like["id"],
          post_id: <number>like["post_id"],
          liked_by: <{ id: number; username: string }>like["author"],
          created_at: <string>like["created_at"],
        };
      });
    }
    if (data["comment"].length > 0) {
      this.comment = data["comment"].map((comment: object) => {
        return {
          id: <number>comment["id"],
          post_id: <number>comment["post_id"],
          commented_by: <{ id: number; username: string }>comment["author"],
          comment_content: <string>comment["comment_content"],
          created_at: <string>comment["created_at"],
        };
      });
    }
  }
}

export default CreatePostResponseDTO;
