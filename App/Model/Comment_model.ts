"use strict";
import IComment from "App/DTO/Comment/IComment";
import { Model } from "Elucidate/Database/Model";
class Comment extends Model implements IComment {
  id!: number;
  post_id!: number;
  commented_by!: number;
  comment_content!: string;
  // Table name
  static tableName = "comments";

  static relationMappings() {
    return {
      author: this.belongsTo("App/Model/User_model", {
        foreign_key: "commented_by",
        filter: (query) => {
          query.select("id", "username");
        },
      }),
    };
  }
}

export default Comment;
