import React from "react";

import './styles.css';

import logoImg from '../../assets/images/logo.svg';
import nextImg from '../../assets/icons/next.svg';

export default function Login(){
   return(
      <div className="login">
         <div className="logo-container">
            <img src={logoImg} alt="Piupiuwer" />
         </div>

         <div className="title-container">
            <h2>Entre na sua conta</h2>
         </div>
      
         <div className="email-container">
            <input type="text" placeholder="Digite seu email" id="email-input"/>
         </div>

         <div className="password-container">
            <input type="password" placeholder="Digite sua senha" id="password-input"/>
         </div>
         
         <div className="forgot-password-container">
            <a href="">Esqueci minha senha</a>
         </div>

         <div className="login-button-container">
            <button>
               <img src={nextImg} alt="Entrar" />
            </button>
         </div>
         
      </div>
   );
}