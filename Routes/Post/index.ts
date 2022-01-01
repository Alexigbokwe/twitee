"use strict";
import Route from "Elucidate/Route/manager";

/*
    |--------------------------------------------------------------------------
    | Post Route File   
    |--------------------------------------------------------------------------
    | 
    */

Route.group({ prefix: "post" }, () => {
  Route.get("/all", "PostController@index");

  Route.get("/get/:post_id", "PostController@show");

  Route.post("/save", "PostController@store");

  Route.get("/like", "PostController@like");

  Route.delete("/delete/:post_id", "PostController@destroy");
});

//--------------------------------------------------------------------------
export default Route.exec;
