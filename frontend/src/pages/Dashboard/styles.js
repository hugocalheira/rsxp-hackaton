import styled from 'styled-components';

export const Container = styled.div`

`;

export const Logado = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 30px;
        border-radius: 8px;
        margin-right: 10px;
        border: 1px solid #ddd;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding-right: 20px;
        border-right: 1px solid #ddd;
    }

    svg {
        margin-left: 20px;
    }
`;

export const ChatWindow = styled.div`
    border: 2px solid gray;
    height: 300px;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 250px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.2);
    background: #fff;
    color: #444;

    div {
        border-bottom: 1px solid gray;
        height: 50px;
        width: 100%;
        align-items: center;
        display: flex;

    }

    strong {
        font-size: 18px;
        margin-bottom: 5px;
        position: absolute;

        svg {
            margin-left: 15px;
        }
    }
`;

export const ChatHistory = styled.div`

`;

export const ChatMessage = styled.div`
    width: 100%;
    height: 20px;
    border-top: 1px solid gray;
    overflow: hidden;

    .chat-text {
        border: none;
        width: 199px;
        height: 50px;
    }

    .bt-enviar {
        height: 50px;
        float: right;
        width: 47px;
    }
`;

export const Header = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.2);
    background: #fff;
    padding: 20px;
    color: #444;

    h1 {
        display: flex;
        justify-content: center;

        svg {
            margin-right: 10px;
        }
    }
`;

export const Body = styled.body``;

export const Footer = styled.footer`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.2);
    background: #fff;
    padding: 20px;
    color: #444;
    position: absolute;
    bottom: 0;
`;