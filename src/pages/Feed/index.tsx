import React from "react";
import Menu from "../../components/Menu";
import Piu from "../../components/Piu";

import './styles.css';



function Feed(){
   return(
      <div id="page-feed">
         <div id="page-feed-content" className="container">
            <Menu/>

            <div className="posts-container">
               <Piu/>
            </div>
         </div>
      </div>
   );
}

export default Feed;