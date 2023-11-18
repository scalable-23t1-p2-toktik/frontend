'use client'

import { get } from 'http'
import React from 'react'
import { set } from 'react-hook-form'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

export const Notification = () => {
    const [notifications, setNotifications] = React.useState([])
    const { data: session, status } = useSession()

    React.useEffect(() => {
        const getNotifications = async () => {
            const username = session?.user?.username || null

            const res = await fetch(
                `/backend/notification/` + username
            )

            const notification = await res.json()

            console.log(notification)

            setNotifications(notification)
        }
        getNotifications()

        const updateInterval = setInterval(getNotifications, 10000)

        return () => {
            clearInterval(updateInterval)
        }
    }, [session])

    return (
        <>
            {notifications.map((notification) => (
                <div key={notification}>{notification['text']}</div>
            ))}
        </>
    )
}

export default Notification
