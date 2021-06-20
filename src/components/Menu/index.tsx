import React from "react";
import { Link } from "react-router-dom";

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
               <li><Link to=''>Meu perfil</Link></li>
               <li><Link to=''>Minha atividade</Link></li>
               <li><Link to=''>Configurações</Link></li>
               <li><Link to=''>Ajuda</Link></li>
               <li><Link to=''>Idioma</Link></li>
               <li><Link to='' id="logout-button">Sair</Link></li>
            </ul>
         </div>
      </div>
   );
}