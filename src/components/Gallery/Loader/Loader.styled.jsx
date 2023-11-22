import styled from '@emotion/styled' 

export const LoaderContainer = styled.div`
    display:flex; 
    flex-direction: column;
    align-items: center; 
    text-align: center;
    justify-content: center;
    padding: 60px; 
        
    &>svg {
        width: 70px; 
        height: 70px; 
        margin-bottom: 20px;
        stroke: ${({ theme }) => theme.colors.blue};
    }

`
export const Info = styled.p`
    font-size: 20px;     
`