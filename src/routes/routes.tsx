import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Feed from "../pages/Feed";
import Login from "../pages/Login";

export default function Routes(){
   return(
      <BrowserRouter>
         <Route path="/" exact component={Feed} />
         <Route path="/login" component={Login} />
      </BrowserRouter>
   );
}