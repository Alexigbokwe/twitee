"use strict";
import IComment from "App/DTO/Comment/IComment";
import { Model } from "Elucidate/Database/Model";
class Comment extends Model implements IComment {
  id!: number;
  commented_by!: number;
  comment_content!: string;
  // Table name
  static tableName = "comment";
}

export default Comment;
