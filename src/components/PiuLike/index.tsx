import React from "react";

import Piu, { PiuProps } from "../Piu";
import User, { UserProps } from "../User";

export interface PiuLikeProps {
	id: string;
	user: UserProps;
	piu: PiuProps;
}

const PiuLike: React.FC<PiuLikeProps>= (PiuLikeProps) =>{
   return(
		<h1> Oi </h1>
   );
}

export default PiuLike;