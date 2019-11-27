import React, {useEffect, useState} from 'react';

import { Container } from './styles';
// import { toast } from 'react-toastify';

export default function Modal({ program, handleSubscription }) {

    const [content, setContent] = useState(false)

    useEffect(() => {
        setContent(program);
    }, [program]);

    const closeModal = () => {
        setContent(false);
    }

    const handleSubscript = (p) => {
        // do subscription ...
        handleSubscription(p)
        closeModal();
    }

  return (
    content &&
    <Container>
        <div className="lightbox">
            <div className="background" onClick={() => closeModal()}></div>
            <div className="card">
                <h1>{content.title}</h1>
                {content.description}
                <button onClick={() => handleSubscript(content)}>Inscrever</button>
            </div>
        </div>
    </Container>
  );
}
