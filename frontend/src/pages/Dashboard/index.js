import React from 'react';
import { FaRobot, FaSignOutAlt , FaRocketchat } from 'react-icons/fa';

import { Container, Header, Logado , Body, Footer, ChatWindow, ChatMessage } from './styles';
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
            <Body>
                
            </Body>
            <Footer>
                <ChatWindow>
                    <div>
                        <strong><FaRocketchat size={25} color='#bd2121'/> Bate-Papo</strong>
                    </div>
                    <ChatMessage>
                    <form>
                        <input class="chat-text" type="text" />
                        <input class="bt-enviar" type="submit" value="Enviar" />
                    </form>
                    </ChatMessage>
                </ChatWindow>
            </Footer>
        </Container>
    );
}
