import { FaUsersViewfinder } from "react-icons/fa6";

import {NotificationContainer} from './Notification.styled'

function Notification({ children }) {
    return (
        <NotificationContainer>
            <FaUsersViewfinder />
            {children}
        </NotificationContainer>
    )
}

export default Notification;