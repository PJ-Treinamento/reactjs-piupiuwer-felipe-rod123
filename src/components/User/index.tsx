import React from "react";

import './styles.css';
import avatarImg from '../../assets/icons/avatar.svg';
import PiuLike, { PiuLikeProps } from '../PiuLike';
import Piu, { PiuProps } from '../Piu';

export interface UserProps {
	id: string;
	username: string;
	first_name: string;
	last_name: string;
	email: string;
	about: string;
	photo: string;
	pius: PiuProps[];
	likes: PiuLikeProps[];
	following: UserProps[];
	followers: UserProps[];
	favorites: PiuProps[];
}

const User: React.FC<UserProps> = (UserProps) =>{
	return(
      <div className="user-profile">
			<img src={avatarImg} alt="Foto de perfil" />
			<h2>{UserProps.username}</h2>
         
      </div>
   );
}

export default User;