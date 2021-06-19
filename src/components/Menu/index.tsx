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
               <li><button>Meu perfil</button></li>
               <li><button>Minha atividade</button></li>
               <li><button>Configurações</button></li>
               <li><button>Ajuda</button></li>
               <li><button>Idioma</button></li>
               <li><button id="logout-button">Sair</button></li>
            </ul>
         </div>
      </div>
   );
}