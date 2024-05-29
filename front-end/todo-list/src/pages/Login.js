import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import '../App.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/login', { email, password });
      console.log(response.data);
      // Adicione lógica para armazenar token e redirecionar o usuário
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Senha:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Logar</button>
      </form>
      <p>
        Não tem uma conta? <Link to="/signup">Cadastre-se</Link>
      </p>
    </div>
  );
};

export default Login;
