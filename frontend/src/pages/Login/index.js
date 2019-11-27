import React, { useState } from 'react';
import { FaRobot, FaHandPaper } from 'react-icons/fa';
import api from '../../services/api';

import { Container } from './styles';

import GlobalStyle from '../../global/styles';
import { toast } from 'react-toastify';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await api.get(`/users?email=${email}&password=${password}`)

        if(response.data.length) {
            localStorage.setItem('token', `${btoa(JSON.stringify(response.data[0]))}.${btoa(new Date().getTime())}` );
            window.location.href = '/dashboard';
        } else {
            toast.error(() => <><FaHandPaper size={20}/> "You'll shall not pass!"</>)
        }
    }

  return (
        <>
            <GlobalStyle />
            <Container>
                <div className="background"></div>
                <form onSubmit={handleSubmit}>
                    <h1><FaRobot size={30} color='#bd2121'/> Gabiru-Tech</h1>
                    <input type="text" value={email} placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type="submit">Entrar</button>
                </form>
            </Container>
        </>
  );
}
