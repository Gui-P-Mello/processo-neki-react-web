import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../api/auth';
import { savePassword, clearPassword } from '../utils/storage';

const LoginForm = () => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [showPassword, setShowPassword] = useState(false);
 const [rememberMe, setRememberMe] = useState(false);
 const history = useHistory();

 const handleLogin = async () => {
    const result = await login(username, password);
    if (result.success) {
      if (rememberMe) {
        savePassword(username, password);
      } else {
        clearPassword();
      }
      history.push('/home');
    }
 };

 return (
    <form>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Login" />
      <input type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" />
      <input type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
      <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
      <button type="button" onClick={handleLogin}>Entrar</button>
    </form>
 );
};

export default LoginForm;