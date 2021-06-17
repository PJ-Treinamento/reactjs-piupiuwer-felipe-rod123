import React from "react";

import './styles.css';

import logoImg from '../../assets/images/logo.svg';
import optionsImg from '../../assets/icons/options.svg';
import closeOptionsImg from '../../assets/icons/close.svg';

export default function Menu(){
   return(
      <div className="menu">
         <div className="nav-bar">
            <img id="options-img" src={optionsImg} alt="Opções" />
            <img id="logo-img" src={logoImg} alt="Piupiuwer" />
         </div>

         <div className="menu-options">
            <ul>
               <li>Meu perfil</li>
               <li>Minha atividade</li>
               <li>Configurações</li>
               <li>Ajuda</li>
               <li>Idioma</li>
               <li id="logout-button">Sair</li>
            </ul>
         </div>
      </div>
   );
}