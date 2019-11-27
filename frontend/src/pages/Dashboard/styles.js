import styled from 'styled-components';

export const Logged = styled.div`
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

export const Container = styled.div`
    padding: 2rem;

    h2 {
        margin-bottom: 20px;
    }
`;

export const Programs = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /* padding: 2rem; */

    li {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        margin-bottom: 20px;
        color: #fff;

        div {
            position: relative;
            overflow: hidden;

            width: 300px;
            height: 200px;
            padding: 15px;
            box-shadow: 0 0 10px 0 rgba(0,0,0,.2);
            margin-bottom: 20px;

            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: space-between;

            &:hover{
                img {
                    transform: scale(1.1);
                }
            }

            img {
                height: 100%;
                position: absolute;
                top: 0;
                align-self: center;
                z-index: -1;
                transition: transform .3s;
            }
        }

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
