"use strict";
import IPostLike from "App/DTO/PostLike/IPostLike";
import { Model } from "Elucidate/Database/Model";
class Postlike extends Model implements IPostLike {
  id!: number;
  post_id!: number;
  liked_by!: number;
  // Table name
  static tableName = "post_likes";
}

export default Postlike;
