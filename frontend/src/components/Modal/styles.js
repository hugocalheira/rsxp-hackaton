import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;

    .lightbox {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .background {
        position: absolute;
        top: 0;
        left: 0;

        height: 100%;
        width: 100%;
        background: rgba(0,0,0,.5);
        width: 100%;
        z-index: 10;
    }

    .card {
        max-width: 70%;
        background: #fff;
        box-shadow: 0 10px 10px 0 rgba(0,0,0,.2);
        padding: 20px;
        z-index: 11;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        button {
            width: 100px;
            background-color: #bd2121;
            color: #fff;
            border: none;
            padding: 10px;
            border-radius: 5px;
            transition: background-color .3s;

            &:hover{
                background-color: #d41e1e;
            }
        }
    }
`;
