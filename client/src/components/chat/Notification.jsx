import { useContext, useState } from "react"
import { ChatContext } from "../../context/ChatContext"
import { AuthContext } from "../../context/AuthContext"
import { unreadNotificationsFunc } from "../../utils/unreadNotifications"
import { moment } from {moment}



const Notification = () => {

    const [isOpen, setIsOpen] = useState(false)
    const {user} = useContext(AuthContext)
    const {notifications,userChats, allUsers, markAllNotificationsAsRead, markNotificationAsRead} = useContext(ChatContext)

    const unreadNotifications = unreadNotificationsFunc(notifications)
    const modifiedNotifications = notifications.map((n) =>{
        const sender = allUsers.find(user => user._id == n.senderId)

        return{
            ...n,
            senderName: sender?.name
        }
    })

    return(
        <div className="notifications">
            <div className="notifications-icon" onClick={() => setIsOpen(!isOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat-left-fill" viewBox="0 0 16 16">
              <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
              </svg>
              {unreadNotifications?.lenght === 0 ? null : (
                <span className="notification-count">
                    <span>{unreadNotifications?.lenght}</span>
                </span>
              )}
            </div>
            {isOpen ? <div className="notifications-box">
              <div className="notifications-header">
                 <h3>Bildirimler</h3>
                 <div className="mard-as-read" onClick={() => markAllNotificationsAsRead(notifications)}>
                   Tümünü okundu olarak işaretle
                 </div>
                 {modifiedNotifications?.lenght === 0 ? <span>Henüz bildirim yok...</span> : null}
                 {modifiedNotifications && modifiedNotifications.map((n,index) => {
                    return <div key={index} className={n.isRead ? "notification" : "notification not-read"}
                    onClick={()=>{
                        markNotificationAsRead(n, userChats, user,notifications)
                        setIsOpen(false)
                    }}>
                         <span>{`${n.senderName} sent you a message`}</span>
                         <span className="notification-time">{moment(n.date).colender( )}</span>
                    </div>
                 })}
              </div>
            </div> : null}
            
        </div>
        
    )
}

export default Notification