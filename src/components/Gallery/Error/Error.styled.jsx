import styled from '@emotion/styled' 

export const ErrorContainer = styled.div`
    display:flex; 
    flex-direction: column;
    align-items: center; 
    text-align: center;
    justify-content: center;
    padding: 60px; 
    font-size: 30px; 
    

    &>svg {
        width: 60px; 
        height: 60px; 
        margin-bottom: 20px;
        stroke: ${({ theme }) => theme.colors.red};
    }

`

