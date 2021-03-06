import axios, { AxiosResponse } from "axios";
import React from "react";

import { useState, useEffect } from "react";

import AddPost from "../../components/AddPost";
import Menu from "../../components/Menu";
import Piu, { PiuProps } from "../../components/Piu";
import PiuLike from "../../components/PiuLike";
import SearchBox from "../../components/SearchBox";
import User, {UserProps} from "../../components/User";
import { useAuth } from "../../hooks/auth";

import api from "../../services/api";

import './styles.css';

const Feed = () => {
   const [pius, setPius] = useState<PiuProps[]>([]);
   const storedToken = localStorage.getItem('@Project:token');
   //console.log(storedToken);

   useEffect(() => {
      const loadData = async () => {
         const response = await api.get('/pius', {
            headers: {
               'Authorization': `Bearer ${storedToken}`
            }
          });
         setPius(response.data);
      }
      loadData();
   }, [PiuLike])


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
                  <ul>
                  {
                     pius.map(piu => {
                        return(
                              <li><Piu
                                 key = {piu.id}
                                 id= {piu.id}
                                 user= {
                                    {  id: piu.user.id,
                                       username: piu.user.username,
                                       first_name: piu.user.first_name,
                                       last_name: piu.user.last_name,
                                       email: piu.user.email,
                                       about: piu.user.about,
                                       photo: piu.user.photo,
                                       pius: piu.user.pius,
                                       likes: piu.user.likes,
                                       following: piu.user.following,
                                       followers: piu.user.followers,
                                       favorites: piu.user.favorites
                                    
                                    }
                                 }
                                 likes= {piu.likes}
                                 text= {piu.text}
                                 created_at= {piu.created_at}
                                 updated_at= {piu.updated_at}
                              /></li>
                        );
                     })
                  }
                  </ul>
            </div>

         </div>
      </div>
   );
}

export default Feed;

{/* <User 
      id= {useAuth().user.id}
      username= {useAuth().user.username}
      first_name= {useAuth().user.first_name}
      last_name= {useAuth().user.last_name}
      email= {useAuth().user.email}
      about= {useAuth().user.about}
      photo= {useAuth().user.photo}
      pius= {useAuth().user.pius}
      likes= {useAuth().user.likes}
      following= {useAuth().user.following}
      followers= {useAuth().user.followers}
      favorites= {useAuth().user.favorites}
      /> */}