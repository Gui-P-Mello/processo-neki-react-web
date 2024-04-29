// src/components/SignUpForm.js
import React, { useState } from 'react';
import { signUp } from '../api/auth';

const SignUpForm = () => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');

 const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }
    const result = await signUp(username, password);
    if (result.success) {
      alert('Cadastro realizado com sucesso');
    }
 };

 return (
    <form>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Login" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" />
      <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirmar Senha" />
      <button type="button" onClick={handleSignUp}>Salvar</button>
    </form>
 );
};

export default SignUpForm;
