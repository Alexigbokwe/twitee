interface IComment {
  id?: number;
  post_id: number;
  commented_by: number;
  comment_content: string;
}

export default IComment;
