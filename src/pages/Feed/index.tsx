import axios, { AxiosResponse } from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import AddPost from "../../components/AddPost";
import Menu from "../../components/Menu";
import Piu from "../../components/Piu";
import SearchBox from "../../components/SearchBox";
import api from "../../services/api";

import './styles.css';

function Feed(){

   // const [posts, setPosts] = useState<Post[]>([]);

   // useEffect( () => {
   //    const loadData = async () =>{
   //       const response: AxiosResponse<Post[]> = await axios('https://piupiuwer.polijrinternal.com');
   //       setPosts(response.data);
   //    }
   //    loadData();
   // }, []);

   return(
      <div id="page-feed">
         <div id="page-feed-content" className="container">
            <Menu/>

            <div className="search-container">
               <SearchBox/>
            </div>

            <div className="add-post-container">
               <AddPost/>
            </div>

            <div className="posts-container">
               <Piu />
               {/* {
                  posts.map(post => {
                     return(
                        <Piu 
                           id= {post.id}
                           user= {post.id}
                           likes= {post.likes}
                           text= {post.text}
                           created_at= {post.date}
                           updated_at= {post.date}          
                        />
                     );
                  })
               } */}
            </div>

         </div>
      </div>
   );
}

export default Feed;