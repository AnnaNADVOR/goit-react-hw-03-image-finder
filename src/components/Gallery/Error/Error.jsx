import { TbFaceIdError } from "react-icons/tb";
import {ErrorContainer} from './Error.styled'

function Error({ children }) {
    return (
        <ErrorContainer>
            <TbFaceIdError />
            {children}
        </ErrorContainer>
    )
}

export default Error;