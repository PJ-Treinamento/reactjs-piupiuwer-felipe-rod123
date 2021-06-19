import React from "react";

import './styles.css';
import avatarImg from '../../assets/icons/avatar.svg';

export default function UserProfile(){
   return(
      <div className="user-profile">
         <img src={avatarImg} alt="Foto de perfil" />
         <h2>user_name</h2>
      </div>
   );
}