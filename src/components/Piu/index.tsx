import React from "react";
import User from "../User";

import './styles.css';

import likeImg from '../../assets/icons/like.svg';
import likedImg from '../../assets/icons/liked.svg';

import favoriteImg from '../../assets/icons/favorite.svg';
import favoriteFullImg from '../../assets/icons/favoriteFull.svg';
import PiuLike from "../PiuLike";

interface PiuProps{
   // id: string;
	// user: typeof User;
	// likes: PiuLike[];
	// text: string;
	// created_at: Date;
	// updated_at: Date;
}

const Piu: React.FC<PiuProps> = (PiuProps) => {
   return(
      <div className="piu">
         <div className="post">
            <User/>
            
            <div className="delete-button-container">
               <button className="delete-button">Excluir</button>
            </div>
            
            <div className="message-container">
               <p>Texto da mensagem</p>
               {/* <p>{PiuProps.text}</p> */}
            </div>
            
            <div className="post-footer">
               <div className="like-container">
                  <button className="like-button">
                     <img src={likeImg} alt="Curtir" />
                  </button>

                  <span>123 pessoas curtiram isso</span>
                  {/* <span>{PiuProps.likes} pessoas curtiram isso</span> */}
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