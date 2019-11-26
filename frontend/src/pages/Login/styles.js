import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    justify-content: center;
    align-items: center;

    form {
        padding: 20px;
        box-shadow: 0 10px 10px 0 rgba(0,0,0,.2);
        width: 100%;
        max-width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: #fff;

        h1 {
            display: flex;
            justify-content: center;
            margin-bottom: 20px;

            svg {
                margin-right: 10px;
            }
        }

        input {
            padding: 10px;
            margin-bottom: 10px;
            background: none;
            border-radius: 5px;
            border: 1px solid #ddd;
        }

        button {
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
