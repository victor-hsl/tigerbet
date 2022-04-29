import styled from 'styled-components'
import fundo from '../../assets/fundocard.png'
export const Card = styled.div`
    display: inline-block;
    background-color: #f5f5f5;
    height: 200px;
    width: 350px;
`;

export const CardBody = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
    border: 1px solid #d2d2d2;
    box-shadow: 0px 0px 10px 3px rgba(0,0,0,0.1);
    width: 100%;
    height: 100%;
    transform: scale(0.9);
    transition: all ease 0.3s;
    position: relative;
    cursor: pointer;
    :hover{
        transform: scale(1);
    }

    .background{
        position: absolute;
        z-index: -1;
        opacity: 0.15;
        top: 0;
        margin-top: 10px;
        border-radius: 5px;
    }
`;

export const CardContent = styled.div`
    height: 100px;
    font-family: sans-serif;
    font-size: 20px;
`;

export const CardFooter = styled.div`
    height: 45px;
    font-family: sans-serif;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Hr = styled.hr`
`