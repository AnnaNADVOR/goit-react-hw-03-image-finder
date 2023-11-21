
import { TbFaceIdError } from "react-icons/tb";

function Error({ children }) {
    return (
        <div>
<TbFaceIdError /> {children}
        </div>
    )
}

export default Error;