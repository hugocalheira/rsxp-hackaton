import React from 'react';
import { FaRobot, FaSignOutAlt } from 'react-icons/fa';

import { Container, Header, Logado } from './styles';
import history from '../../services/history';

export default function Dashboard() {

    const handleLogout = () => {
        localStorage.removeItem('token');
        history.push('/login')
    }

    return (
        <Container>
            <Header>
                <h1><FaRobot size={30} color='#bd2121'/> Gabiru-Tech</h1>
                <Logado>
                    <img src={`https://pbs.twimg.com/profile_images/992292134773407744/9CP4tEZm.jpg`} />
                    <div>
                        <strong>Pedro Bó</strong>
                        <span>(Aluno)</span>
                    </div>
                    <FaSignOutAlt size={20} onClick={handleLogout} />
                </Logado>
            </Header>
        </Container>
    );
}
