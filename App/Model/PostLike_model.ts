"use strict";
import IPostLike from "App/DTO/PostLike/IPostLike";
import { Model } from "Elucidate/Database/Model";
class Postlike extends Model implements IPostLike {
  id!: number;
  post_id!: number;
  liked_by!: number;
  // Table name
  static tableName = "post_likes";

  static relationMappings() {
    return {
      author: this.belongsTo("App/Model/User_model", {
        foreign_key: "liked_by",
        filter: (query) => {
          query.select("id", "username");
        },
      }),
    };
  }
}

export default Postlike;
