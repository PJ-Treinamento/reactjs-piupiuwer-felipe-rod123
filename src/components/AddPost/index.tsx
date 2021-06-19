import React from "react";

import './styles.css';

import addPostImg from '../../assets/icons/addPost.svg';

export default function AddPost(){
   return(
      <div className="add-post-container">
         <button className="add-post-button">
            <img src={addPostImg} alt="Adicionar publicação" />
         </button>
         <h1>Adicionar um novo "piu"</h1>
      </div>
   );
}