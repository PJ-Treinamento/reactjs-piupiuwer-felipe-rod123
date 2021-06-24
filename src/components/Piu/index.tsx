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
   const storedToken = localStorage.getItem('@Project:token');

   const [isLiked, setIsLiked] = useState(false);
   const [isFavorite, setIsFavorite] = useState(false);

   let likeImgVariable = likeImg;
   let favoriteImgVariable = favoriteImg;

   const data = { piu_id: PiuProps.id };
   const headers = { 
      'Authorization': `Bearer ${storedToken}`
   };

   const handleLike = async () =>{
      const response = await api.post('/pius/like', data, { headers })
       
      if(isLiked == false){ //Acabou de curtir a publicação (não estava curtido antes)
         setIsLiked(true);
         likeImgVariable = '../../assets/icons/liked.svg';
      }
      else{ //Acabou de descurtir a publicação (já estava curtido antes)
         setIsLiked(false);
         likeImgVariable = '../../assets/icons/like.svg';
      }
   }

   const handleFavorite = async () =>{
      if(isFavorite == false){ //Acabou de adicionar a publicação aos Favoritos (não estava nos Favoritos antes)
         favoriteImgVariable = '../../assets/icons/favoriteFull.svg';
         const response = await api.post('/pius/favorite', data, { headers });
      }
      else{ //Acabou de retirar a publicação aos Favoritos (já estava nos Favoritos antes)
         favoriteImgVariable = '../../assets/icons/favorite.svg';
         const response = await api.post('/pius/unfavorite', data, { headers });
      }
   }

   // const handleDelete = async () =>{
   //    await api.delete('/pius', data, { headers })
   // }


   return(
      <div className="piu">
         <div className="post">
            <div className="user-profile">
               <img src={PiuProps.user.photo} alt="Foto de perfil" />
               <h2>{PiuProps.user.username}</h2>
            </div>
            
            <div className="delete-button-container">
               <button className="delete-button">Excluir</button>
            </div>
            
            <div className="message-container">
               <p>{PiuProps.text}</p>
            </div>
            
            <div className="post-footer">
               <div className="like-container">
                  <button className="like-button">
                  <img src={likeImgVariable} alt="Curtir"
                     onClick={() => handleLike()}/>
                  </button> 
                  <span>{PiuProps.likes.length} pessoas curtiram isso</span>
               </div>

               <div className="favorite-container">
                  <button className="favorite-button">
                     <img src={favoriteImgVariable} alt="Adicionar aos favoritos" 
                     onClick={() => handleFavorite()}/>
                  </button> 
               </div>
      
            </div>
         </div>
      </div>
   );
}

export default Piu;

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