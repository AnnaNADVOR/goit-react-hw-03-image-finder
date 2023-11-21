import { RotatingLines } from 'react-loader-spinner'

function Loader() {
    return (
        <div>
        <RotatingLines strokeColor="grey" width="60"/>
        <p>Loading</p>   
        </div>
        
    )
}

export default Loader; 