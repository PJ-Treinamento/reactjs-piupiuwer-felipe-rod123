import React from "react";
import Menu from "../../components/Menu";

import './styles.css';



function Feed(){
   return(
      <div id="page-feed">
         <div id="page-feed-content" className="container">
            <Menu/>
         </div>
      </div>
   );
}

export default Feed;