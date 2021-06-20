import React from "react";

import './styles.css';
import avatarImg from '../../assets/icons/avatar.svg';
import PiuLike from '../PiuLike';
import Piu from '../Piu';

interface UserProps{
   // id: string;
	// username: string;
	// first_name: string;
	// last_name: string;
	// email: string;
	// about: string;
	// photo: string;
	// pius: typeof Piu[];
	// likes: PiuLike[];
	// following: typeof User[];
	// followers: typeof User[];
	// favorites: typeof Piu[];
}

const User: React.FC<UserProps> = () =>{
   return(
      <div className="user-profile">
			<img src={avatarImg} alt="Foto de perfil" />
			<h2>user_name</h2>
         {/* <img src={photo} alt="Foto de perfil" />
         <h2>{username}</h2> */}
         
      </div>
   );
}

export default User;