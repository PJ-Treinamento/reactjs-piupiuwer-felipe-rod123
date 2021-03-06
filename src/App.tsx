import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import { AuthProvider } from './hooks/auth';

import './styles/global.css';

const App: React.FC = () =>{
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
