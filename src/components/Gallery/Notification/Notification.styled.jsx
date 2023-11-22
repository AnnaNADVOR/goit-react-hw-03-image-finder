import styled from '@emotion/styled' 

export const NotificationContainer = styled.div`
    display:flex; 
    flex-direction: column;
    align-items: center; 
    padding: 60px; 
    font-size: 30px; 
    justify-content: center;

    &>svg {
        width: 60px; 
        height: 60px; 
        margin-bottom: 20px;
        fill: ${({ theme }) => theme.colors.blue};
    }

`

