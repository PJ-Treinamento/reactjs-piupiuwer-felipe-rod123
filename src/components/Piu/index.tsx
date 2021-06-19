import React from "react";
import UserProfile from "../UserProfile";

import './styles.css';

import likeImg from '../../assets/icons/like.svg';
import likedImg from '../../assets/icons/liked.svg';

import favoriteImg from '../../assets/icons/favorite.svg';
import favoriteFullImg from '../../assets/icons/favoriteFull.svg';

export default function Piu(){
   return(
      <div className="piu">
         <div className="post">
            <UserProfile/>
            <div className="delete-button-container">
               <button className="delete-button">Excluir</button>
            </div>
            
            <div className="message-container">
               <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
            </div>
            
            <div className="post-footer">
               <div className="like-container">
                  <button className="like-button">
                     <img src={likeImg} alt="Curtir" />
                  </button>

                  <span>123 pessoas curtiram isso</span>
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