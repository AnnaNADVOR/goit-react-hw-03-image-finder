import styled from '@emotion/styled'


export const Header = styled.header`
    position: sticky;
    top: 0;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.blue};
    z-index: 1100;
`
export const SearchForm = styled.form`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 600px;     
    margin: 0 auto;   
    position: relative;
    overflow: hidden;
`

export const SearchField = styled.input`
    width: 100%;
    border: none;
    outline: none;
    padding: 8px 8px 8px 45px;
    border-radius: 3px;
    transition: background-color .25s cubic-bezier(.4,0,.2,1);

    &:hover, :focus {
        background-color:${({ theme }) => theme.colors.hoverInputBlue}; 
    }
`

export const SearchButton = styled.button`
    position: absolute;
    left: 8px;
    display:flex; 
    top: 50%; 
    transform: translateY(-50%);
    border: none;
    background-color: inherit;
    cursor: pointer; 
    margin:0;
    padding:0;
    text-align: center; 
    transition: color .25s cubic-bezier(.4,0,.2,1);

    &:hover>svg, :focus>svg {
        fill:${({ theme }) => theme.colors.primaryBlack}; 
    }

    &>svg {
        width: 25px;
        height: 25px; 
        fill:  ${({ theme }) => theme.colors.darkGrey};
    }
`
