import styled from '@emotion/styled'  

export const GalleryCard = styled.li`
    width: 300px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 1px rgba(0,0,0,.14), 0 2px 1px rgba(0,0,0,.2);
`

export const GalleryPhoto = styled.img`
    border-radius: 4px;
    width: 100%;
    height: 260px;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);      
`

export const GalleryLink = styled.a `
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover>img {
        transform: scale(1.03);       
        cursor: zoom-in;
    }    
`

