import styled from 'styled-components'

export const CardRow = styled.div`
    margin-bottom: 10px;
`;

export const CardArea = styled.div`
    overflow-x: hidden;
    padding-left: 30px;
    padding-bottom: 10px;
    padding-top: 10px;
`;

export const CardList = styled.div<{margemEsq: number; largura: number}>`
    width: ${props => props.largura}px;
    margin-top: 10px;
    margin-left: ${props => props.margemEsq}px;
    transition: all ease 0.7s;
`;

export const Left = styled.div`
    position: absolute;
    left: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-size: 50px;
    cursor: pointer;
    height: 280px;
    width: 40px;
    trasition: all ease 0.6s;
    :hover{
        background-color: rgba(0,0,0, 0.1);
    }
`;
export const Right = styled.div`
    position: absolute;
    right: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-size: 50px;
    cursor: pointer;
    width: 40px;
    height: 280px;
    trasition: all ease 0.6s;
    :hover{
        background-color: rgba(0,0,0, 0.1);
    }
`;