import { createContext, useContext, useState } from "react";
import { UserProps } from "../components/User";
import api from "../services/api";

interface LoginCredentials{
  email: string,
  password: string,
}

interface AuthContextData{
  user: UserProps,
  token: string,
  login(loginCred: LoginCredentials): void
  logout(logoutCred: boolean): void
}

interface AuthState{
  user: UserProps,
  token: string
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

	const [userData, setUserData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@Project:token');
        const user = localStorage.getItem('@Project:user');

        if (user && token) {
            return { token, user: JSON.parse(user) };
        }

        return {} as AuthState;
  });

	const login = async ({ email, password }: LoginCredentials) => {
      const response = await api.post('/sessions/login', {
          email,
          password,
      })

      const { token, user } = response.data;
      setUserData({token, user});

      localStorage.setItem('@Project:token', token);
      localStorage.setItem('@Project:user', JSON.stringify(user));

      setUserData({ token, user });
  };

  const logout = () => {
    localStorage.removeItem('@Project:user');
    localStorage.removeItem('@Project:token');
 
   setUserData({} as AuthState);
 }

  return(
    <AuthContext.Provider value={{
      login,
      logout,
      user: userData.user,
      token: userData.token
    }}>
      {children}
    </AuthContext.Provider>
  )

}

export const useAuth = ():AuthContextData =>{
  const useAuthContext = useContext(AuthContext)
  return useAuthContext
}