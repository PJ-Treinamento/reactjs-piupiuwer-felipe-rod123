import React from "react";

import './styles.css';
import searchImg from '../../assets/icons/search.svg';

export default function SearchBox(){
   return(
      <div className="search-box-container">
         <div className="search-box">
            <input type="text" placeholder="Pesquisar user_name..." id="search-input"/>
            <button>
               <img src={searchImg} alt="Pesquisar" />
            </button>
         </div>
      </div>
   );
}