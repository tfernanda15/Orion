import React, { useState } from 'react';
import './Notifications.css';

function Notifications() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'Melodía Lunar publicó un nuevo beat.', read: false },
    { id: 2, text: 'Alguien le dio "me gusta" a tu composición.', read: false },
    { id: 3, text: 'Tienes una nueva solicitud de colaboración.', read: true },
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const toggleNotifications = () => {
    setIsOpen(!isOpen);
    // Marcar todas como leídas al abrir
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  return (
    <div className="notifications-container">
      <button className="notifications-button" onClick={toggleNotifications}>
        🔔
        {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
      </button>

      {isOpen && (
        <div className="notifications-dropdown">
          <h4>Notificaciones</h4>
          {notifications.length > 0 ? (
            <ul>
              {notifications.map(notification => (
                <li key={notification.id} className={notification.read ? 'read' : 'unread'}>
                  {notification.text}
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-notifications">No tienes notificaciones nuevas.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Notifications;