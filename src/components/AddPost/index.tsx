import React, { useState } from "react";

import './styles.css';

import addPostImg from '../../assets/icons/addPost.svg';
import api from "../../services/api";

export default function AddPost(){
   const storedToken = localStorage.getItem('@Project:token');
   const [text, setText] = useState('');
   const [showPost, setShowPost] = useState(true);



   const writePost = () => {
      if(showPost === true){
         setShowPost(false);
      }
      else{
         setShowPost(true);
      }
   }

   const data = { text: text };
   const headers = { 
      'Authorization': `Bearer ${storedToken}`
   };
   

   const postPiu = async () => {
      if(text.toString().trim.length != 0 && text.toString().length < 141){
         const response = await api.post('/pius', data, { headers });
      }
      if(text.toString().trim.length == 0){
         alert("Digite alguma coisa para publicar!");
      }
   }
   if(text.toString().trim.length > 140){
      setText("Você digitou mais do que 140 caracteres!");
   }

   return(
      <div className="add-post-container">
         <button className="add-post-button" onClick={() => {
            if(showPost === true){
               setShowPost(false);
            }
            else{
               setShowPost(true);
            }
         }} 
         style={{display: showPost ? 'block' : 'none' }}>
            <img src={addPostImg} alt="Adicionar publicação" />
         </button>

         <h1 style={{display: showPost ? 'block' : 'none' }}>Adicionar um novo "piu"</h1>

         <div className="write-post-container" style={{display: showPost ? 'none' : 'block' }}>
            <h2 className="title-new-post">Digite uma mensagem para publicar:</h2>
            <h3 className="count-letters">{text.toString().length}/140</h3>
            <input name="piu-text-area" id="piu-text-area" 
            onChange={event => setText(event.target.value)} onSubmit={postPiu}></input>
            <button id="send-button" style={{display: showPost ? 'none' : 'block' }} onClick={postPiu} >Enviar</button>
         </div>

         
      </div>
   );
}