import styled from 'styled-components'

export const adDiv = styled.div`
    height: 250px;
`

export const adImg = styled.img`
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.1);
    border-radius: 5px;
    height: 80%;
    cursor: pointer;
    @media (min-width: 768px){
        width: 80%;
        height: auto;
    }
`