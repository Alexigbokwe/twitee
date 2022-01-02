"use strict";
import Route from "Elucidate/Route/manager";

/*
    |--------------------------------------------------------------------------
    | Comment Route File   
    |--------------------------------------------------------------------------
    | 
    */

Route.group({ prefix: "comment", middleware: ["auth"] }, () => {
  Route.post("/save", "CommentController@store");
});

//--------------------------------------------------------------------------
export default Route.exec;
