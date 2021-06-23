import React, { useState } from "react";

import './styles.css';

import logoImg from '../../assets/images/logo.svg';
import nextImg from '../../assets/icons/next.svg';
import api from "../../services/api";
// import { signIn } from "../../hooks/signIn";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";


export default function Login(){
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const {login} = useAuth();

   const signIn = () =>{
      login({email, password});
   }
   
   return(
      <div className="login">
         <div className="logo-container">
            <img src={logoImg} alt="Piupiuwer" />
         </div>

         <div className="title-container">
            <h2>Entre na sua conta</h2>
         </div>
      
         <div className="email-container">
            <input type="text" placeholder="Digite seu email" id="email-input" 
            onChange={event => setEmail(event.target.value)}/>
         </div>

         <div className="password-container">
            <input type="password" placeholder="Digite sua senha" id="password-input" 
            onChange={event => setPassword(event.target.value)}/>
         </div>
         
         <div className="forgot-password-container">
            <a href="">Esqueci minha senha</a>
         </div>

         <div className="login-button-container">
            <Link id="login-button" to='/feed'>
               <img src={nextImg} alt="Entrar" onClick={signIn}/>
            </Link>
         </div>
         
      </div>
   );
}