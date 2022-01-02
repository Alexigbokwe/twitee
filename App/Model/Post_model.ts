"use strict";
import IPost from "App/DTO/Post/IPost";
import { Model } from "Elucidate/Database/Model";
class Post extends Model implements IPost {
  id!: number;
  posted_by!: number;
  post_content!: string;
  // Table name
  static tableName = "posts";

  static relationMappings() {
    return {
      likes: this.hasMany("App/Model/PostLike_model", { owner_key: "id", foreign_key: "post_id" }),
      comment: this.hasMany("App/Model/Comment_model", { owner_key: "id", foreign_key: "post_id" }),
      author: this.belongsTo("App/Model/User_model", {
        foreign_key: "posted_by",
        filter: (query) => {
          query.select("id", "username");
        },
      }),
    };
  }
}

export default Post;
