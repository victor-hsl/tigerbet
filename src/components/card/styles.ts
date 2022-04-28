import styled from 'styled-components'

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


    :hover{
        transform: scale(1);
    }
`;