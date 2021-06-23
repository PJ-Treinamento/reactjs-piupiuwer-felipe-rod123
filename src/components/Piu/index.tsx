import React, { useEffect, useState } from "react";


import './styles.css';

import likeImg from '../../assets/icons/like.svg';
import likedImg from '../../assets/icons/liked.svg';
import favoriteImg from '../../assets/icons/favorite.svg';
import favoriteFullImg from '../../assets/icons/favoriteFull.svg';

import PiuLike from "../PiuLike";
import User, { UserProps } from "../User";
import api from "../../services/api";
import { useAuth } from "../../hooks/auth";


export interface PiuProps {
	id: string;
	user: UserProps;
	likes: typeof PiuLike[];
	text: string;
	created_at: Date;
	updated_at: Date;
}

const Piu: React.FC<PiuProps> = (PiuProps) => {

   return(
      <div className="piu">
         <div className="post">
            <User 
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
            
            />
            
            <div className="delete-button-container">
               <button className="delete-button">Excluir</button>
            </div>
            
            <div className="message-container">
               <p>{PiuProps.text}</p>
            </div>
            
            <div className="post-footer">
               <div className="like-container">
                  <button className="like-button">
                     <img src={likeImg} alt="Curtir" />
                  </button>

                  <span>{PiuProps.likes.length} pessoas curtiram isso</span>
               </div>

               <div className="favorite-container">
                  <button className="favorite-button">
                     <img src={favoriteImg} alt="Adicionar aos favoritos" />
                  </button>
               </div>
      
            </div>
         </div>
      </div>
   );
}

export default Piu;