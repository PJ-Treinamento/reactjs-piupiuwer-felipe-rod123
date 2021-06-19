import React from "react";
import AddPost from "../../components/AddPost";
import Menu from "../../components/Menu";
import Piu from "../../components/Piu";
import SearchBox from "../../components/SearchBox";

import './styles.css';

function Feed(){
   return(
      <div id="page-feed">
         <div id="page-feed-content" className="container">
            <Menu/>

            <div className="add-post-container">
               <AddPost/>
            </div>

            <div className="search-container">
               <SearchBox/>
            </div>

            <div className="posts-container">
               <Piu/>
            </div>

         </div>
      </div>
   );
}

export default Feed;