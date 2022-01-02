/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
import { Migration } from "Elucidate/Database/Model";

let tableName = "post_likes";
exports.up = function (migration: Migration) {
  return migration.schema.createTable(tableName, (table) => {
    table.increments("id");
    table.integer("post_id").unsigned().references("id").inTable("posts");
    table.integer("liked_by").unsigned().references("id").inTable("users");
    table.timestamps(true, true);
  });
};

exports.down = function (migration: Migration) {
  return migration.schema.dropTable(tableName);
};
