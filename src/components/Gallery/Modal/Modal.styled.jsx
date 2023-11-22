import styled from '@emotion/styled'  

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
`

export const ModalField = styled.div`
    width: calc(70vw);
    height: calc(90vh);
`

export const ModalPhoto = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    object-fit: cover;    
`