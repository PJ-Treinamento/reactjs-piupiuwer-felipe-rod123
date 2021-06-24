import React, { useState } from "react";
import { Link } from "react-router-dom";

import './styles.css';

import logoImg from '../../assets/images/logo.svg';
import optionsImg from '../../assets/icons/options.svg';
import closeOptionsImg from '../../assets/icons/close.svg';
import { useAuth } from "../../hooks/auth";
import MyProfile from "../../pages/MyProfile";

export default function Menu(){
   var showMenu = true;

   // const handleMenu = () => {
   //    if(screen.width > 700){
   //       showMenu==true;
   //    }
      
   //    if(showMenu === false){
   //       showMenu = true;
   //    }
   //    else{
   //       showMenu = false;
   //    }
   // } onClick={() => handleMenu()}

   const [exit, setExit] = useState(false);
   const {logout} = useAuth();

   const signOut = () =>{
      logout(exit);
   }

   

   return(
      <div className="menu">
         <div className="nav-bar">
            <img id="options-img" src={optionsImg} alt="Opções" />
            <img id="logo-img" src={logoImg} alt="Piupiuwer" />
         </div>

         <div className="menu-options" style={{display: showMenu ? 'flex' : 'none' }}>
            <ul>
               <li><Link to='/myprofile'>Meu perfil</Link></li>
               <li><Link to='/myprofile'>Minha atividade</Link></li>
               <li><Link to='/feed'>Configurações</Link></li>
               <li><Link to='/feed'>Ajuda</Link></li>
               <li><Link to='/feed'>Idioma</Link></li>
               <li><Link to='/login' id="logout-button" onClick={signOut}>Sair</Link></li>
            </ul>
         </div>
      </div>
   );
}