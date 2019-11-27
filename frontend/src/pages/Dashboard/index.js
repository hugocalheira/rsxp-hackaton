import React, { useEffect, useState } from 'react';
import { FaRobot, FaSignOutAlt } from 'react-icons/fa';

import { Container, Header, Logged, Programs } from './styles';
import api from '../../services/api';
import Modal from '../../components/Modal';

export default function Dashboard() {

    const [programs, setPrograms] = useState([]);
    const [selectedProgram, setSelectedProgram] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await api.get('/programs');
            setPrograms(response.data);
        })();

    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login'; // refazer
    }

    const handleSubscription = p => {
        console.log(p)
    }

    const handleDetail = p => {
        setSelectedProgram(p)
    }

    return (
        <>
            <Modal program={selectedProgram}/>
            <Header>
                <h1><FaRobot size={30} color='#bd2121'/> Gabiru-Tech</h1>
                <Logged>
                    <img alt='Pedro Bó' src={`https://pbs.twimg.com/profile_images/992292134773407744/9CP4tEZm.jpg`} />
                    <div>
                        <strong>Pedro Bó</strong>
                        <span>(Aluno)</span>
                    </div>
                    <FaSignOutAlt size={20} onClick={handleLogout} />
                </Logged>
            </Header>
            <Container>

                <h2>Programas inscritos</h2>

                <Programs>
                    { programs && programs.map(p => (

                    <li key={p.id}>
                        <div onClick={() => handleDetail(p)}>
                            <img src={p.img} alt={p.title} />
                            <h4>{p.company}</h4>
                            <h3>{p.title}</h3>
                        </div>
                        <button onClick={() => handleSubscription(p)}>Inscrever</button>
                    </li>

                    ))}
                </Programs>

                <h2>Programas disponíveis</h2>

                <Programs>
                    { programs && programs.map(p => (

                    <li key={p.id}>
                        <div onClick={() => handleDetail(p)}>
                            <img src={p.img} alt={p.title} />
                            <h4>{p.company}</h4>
                            <h3>{p.title}</h3>
                        </div>
                        <button onClick={() => handleSubscription(p)}>Inscrever</button>
                    </li>

                    ))}
                </Programs>
            </Container>
        </>
    );
}
