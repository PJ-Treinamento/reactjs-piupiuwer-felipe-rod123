import axios, { AxiosResponse } from "axios";
import React from "react";

import { useState, useEffect } from "react";

import AddPost from "../../components/AddPost";
import Menu from "../../components/Menu";
import Piu, { PiuProps } from "../../components/Piu";
import SearchBox from "../../components/SearchBox";

import api from "../../services/api";

import './styles.css';

const Feed = () => {
   const [pius, setPius] = useState<PiuProps[]>([]);

   useEffect(() => {
      const loadData = async () => {
         const response = await api.get('/pius');
         setPius(response.data);
      }
      loadData();
   }, [])

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
{/* USAR STYLED COMP */}
            <div className="posts-container">               
                  {
                     pius.map(piu => {
                        return(
                              <Piu
                                 id= {piu.id}
                                 user= {piu.user}
                                 likes= {piu.likes}
                                 text= {piu.text}
                                 created_at= {piu.created_at}
                                 updated_at= {piu.updated_at}
                              />
                        );
                     })
                  }
            </div>

         </div>
      </div>
   );
}

export default Feed;