import React from "react";

import Piu from "../Piu";
import User from "../User";

interface PiuLike {
	id: string;
	user: typeof User;
	piu: typeof Piu;
}

const PiuLike: React.FC<PiuLike>= (PiuLike) =>{
   return(
		<h1>Oi</h1>
   );
}

export default PiuLike;