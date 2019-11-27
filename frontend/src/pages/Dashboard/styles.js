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
