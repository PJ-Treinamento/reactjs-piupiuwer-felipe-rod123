import React from "react";
import {Route, Switch} from "react-router-dom";

// import Route from './Route';

import Feed from "../pages/Feed";
import Login from "../pages/Login";

import Redirection from './redirect';

const Routes: React.FC = () => {
   return (
      <Switch>
         <Route path="/login" component={Login} />
         <Route exact path="/" component={Feed} />

         {/* <Route exact path="/" component={Feed} isPrivate/> */}

         {/* <Route component={Redirection} /> */}
      </Switch>
   );
}

export default Routes;

{/* <Route path="/register" component={Register} />
    <Route path="/profile" component={Profile} /> */}