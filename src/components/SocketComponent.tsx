'use client'

import io from 'socket.io-client'
import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

const SocketComponent = () => {
    useEffect(() => {
        const socket = io('http://localhost:5000') // TODO: Change this later

        socket.on('connect', () => {
            console.log('Connected to Socket server')

            socket.emit('get name', 'pong')
        })

        return () => {
            socket.disconnect()
        }
    }, [])

    return null
}

export default SocketComponent
