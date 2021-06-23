import React, { useState } from "react";

import './styles.css';

import addPostImg from '../../assets/icons/addPost.svg';
import api from "../../services/api";

export default function AddPost(){
   const storedToken = localStorage.getItem('@Project:token');
   const [text, setText] = useState('');
   const [showPost, setShowPost] = useState(true);

   const writePost = async () => {
      if(showPost === true){
         setShowPost(false);
      }
      else{
         setShowPost(true);
      }
   }

   const postPiu = async () => {
      const headers = { 
         'Authorization': `Bearer ${storedToken}`,
      };
      api.post('/pius', text, { headers });
   }
   

   return(
      <div className="add-post-container">
         <button className="add-post-button" onClick={writePost} 
         style={{display: showPost ? 'block' : 'none' }}>
            <img src={addPostImg} alt="Adicionar publicação" />
         </button>
         <h1>Adicionar um novo "piu"</h1>
         <textarea name="piu-text-area" id="piu-text-area" cols={64} rows={8} 
         style={{display: showPost ? 'none' : 'block' }}
         onChange={event => setText(event.target.value)} onSubmit={postPiu}></textarea>
         <button id="send-button" style={{display: showPost ? 'none' : 'block' }} onClick={postPiu} >Enviar</button>
      </div>
   );
}