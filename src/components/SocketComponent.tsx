'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { io, Socket } from 'socket.io-client'
import { IoIosNotifications } from 'react-icons/io'
import dotenv from 'dotenv'
import { Link } from "@nextui-org/react";

dotenv.config()

const SocketComponent = () => {
    const session = useSession()
    const [socket, setSocket] = useState<Socket | null>(null)
    const [notifications, setNotifications] = useState<any[]>([])
    const [showNotifications, setShowNotifications] = useState(false)

    const socketHostname = process.env.SOCKET_IO_HOSTNAME || 'localhost';

    useEffect(() => {
    
        const newSocket = io(socketHostname)
        setSocket(newSocket)
        console.log(newSocket)

        return () => {
            // Clean up the socket connection when the component is unmounted
            newSocket.disconnect()
        }
    }, [])

    const user = session?.data?.user?.username || null

    useEffect(() => {
        socket?.emit('newUser', user)
    }, [socket, user])

    useEffect(() => {
        const handleNotification = (message: any) => {
            console.log(message)
            setNotifications((prevNotifications) => [
                ...prevNotifications,
                message,
            ])
        }
        socket?.on('notification', handleNotification)
    }, [socket])

    console.log(notifications)

    const toggleNotifications = async () => {
        setShowNotifications(!showNotifications)
        for (let i = 0; i < notifications.length; i++) {
            const notification = notifications[i]
            const res = await fetch(
                `/backend/readNotification/` + notification['id'],
                {
                    method: 'PUT',
                }
            )
        }
    }

    const handleRead = () => {
        setNotifications([])
    }

    return (
        <div className="flex items-center justify-between">
            <button style={{ paddingRight: '20px' }}>
                <span role="img" aria-label="bell">
                    <IoIosNotifications
                        style={{ fontSize: '3em' }}
                        onClick={toggleNotifications}
                    />
                    {notifications.length > 0 && (
                        <div
                            style={{
                                width: '18px',
                                height: '18px',
                                backgroundColor: 'red',
                                borderRadius: '50%',
                                padding: '5px',
                                fontSize: '14px',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'absolute',
                                top: '14px',
                                right: '315px',
                            }}
                        >
                            {notifications.length}
                        </div>
                    )}
                </span>
            </button>
            {showNotifications && (
                <div
                    style={{
                        position: 'absolute',
                        top: '60px',
                        right: '150px',
                        border: '1px solid black',
                        padding: '10px',
                        backgroundColor: 'lightgray',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                        zIndex: '1000',
                        maxHeight: '200px',
                        overflowY: 'auto',
                    }}
                >
                    {notifications.map((notification, index) => (
                        <div key={index}>{notification['text']}</div>
                    ))}
                    <div style={{ marginTop: '10px' }}>
                        <Link
                            style={{ border: 'solid black' }}
                            href="/notification"
                        >
                            View All Notifications
                        </Link>
                        <div style={{ paddingBottom: '10xp' }}>
                            <button
                                style={{
                                    border: 'solid black',
                                }}
                                onClick={handleRead}
                            >
                                Mark as read
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SocketComponent
