import React, { useState } from "react";

import './styles.css';
import searchImg from '../../assets/icons/search.svg';
import api from "../../services/api";

export default function SearchBox(){
   const storedToken = localStorage.getItem('@Project:token');
   const [search, setSearch] = useState('');

   const searchUsers = async () => {
      await api.get('/users?username='+`${search}`, {
         headers: {
            'Authorization': `Bearer ${storedToken}`
         }
       });
   }
   
   return(
      <div className="search-box-container">
         <div className="search-box">
            <input type="text" placeholder="Pesquisar user_name..." id="search-input" onChange={event => setSearch(event.target.value)}/>
            <button>
               <img src={searchImg} alt="Pesquisar" onClick={searchUsers}/>
            </button>
         </div>
      </div>
   );
}