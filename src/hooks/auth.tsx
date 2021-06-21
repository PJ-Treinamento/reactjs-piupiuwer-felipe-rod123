import { createContext, useState } from "react";
import api from "../services/api";

// const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// export const AuthProvider: React.FC = ({ children }) => {

// 	const [userData, setUserData] = useState<AuthState>(() => {
//         const token = localStorage.getItem('@Project:token');
//         const user = localStorage.getItem('@Project:user');

//         if (user && token) {
//             return { token, user: JSON.parse(user) };
//         }

//         return {} as AuthState;
//   });

// 	const login = async ({ email, password }: LoginCredentials) => {
//       const response = await api.post('/login/', {
//           email,
//           password,
//       });

//       const { token, user } = response.data;
//       localStorage.setItem('@Project:token', token);
//       localStorage.setItem('@Project:user', JSON.stringify(user));

//       setUserData({ token, user });
//   };
// }

// const logout = () => {
//    localStorage.removeItem('@Project:user');
//    localStorage.removeItem('@Project:token');

//    setUserData({} as AuthState);
// });