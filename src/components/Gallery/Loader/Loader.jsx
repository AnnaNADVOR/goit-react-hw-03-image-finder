import { RotatingLines } from 'react-loader-spinner';

import {
    LoaderContainer,
    Info
} from './Loader.styled';

function Loader() {
    return (
        <LoaderContainer>
        <RotatingLines/>
        <Info>Please wait...</Info>   
        </LoaderContainer>
        
    )
}

export default Loader; 