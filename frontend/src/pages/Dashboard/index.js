import React, { useEffect, useState } from 'react';
import { FaRobot, FaSignOutAlt } from 'react-icons/fa';

import { Container, Header, Logged, Programs } from './styles';
import api from '../../services/api';
import Modal from '../../components/Modal';
import { toast } from 'react-toastify';

export default function Dashboard() {

    const [programs, setPrograms] = useState([]);
    const [subscripteds, setSubscripteds] = useState([]);
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
        setSubscripteds([...subscripteds, p]);

        toast.info('Inscrição efetuada com sucesso!');
    }

    const handleCancel = p => {
        setSubscripteds([ ...subscripteds.filter(s => {
            if (s.id !== p.id) {
                return s
            }
        }) ]);

        toast.info('Programa removido com sucesso!');
    }

    const handleDetail = p => {
        setSelectedProgram(p)
    }

    return (
        <>
            <Modal program={selectedProgram} handleSubscription={handleSubscription}/>
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
                    { subscripteds && subscripteds.map(p => (

                    <li key={p.id}>
                        <div onClick={() => handleDetail(p)}>
                            <img src={p.img} alt={p.title} />
                            <h4>{p.company}</h4>
                            <h3>{p.title}</h3>
                        </div>
                        <button onClick={() => handleCancel(p)}>Cancelar</button>
                    </li>

                    ))}
                </Programs>

                <h2>Programas disponíveis</h2>

                <Programs>
                    { programs && programs.filter(p => !subscripteds.includes(p) ).map(p => (

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
