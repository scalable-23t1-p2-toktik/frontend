'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

async function getPresigned() {
    const res = await fetch(`http://localhost:8080/presigned`)

    if (!res.ok) {
        throw new Error('Failed to get presigned url')
    }
    const data = await res.json()

    return data
}

async function put(url: any, data: any) {
    const res = await fetch(url, {
        method: 'PUT',
        body: data,
    })

    if (!res.ok) {
        throw new Error(`Failed to upload data: ${res.status}`)
    }

    console.log('Data uploaded successfully.')
}

async function notify(username: any, videoName: any, uuid: any) {
    const res = await fetch(
        `http://localhost:8080/notify/${username}/${videoName}/${uuid}`
    )
}

function Upload() {
    const [file, setFile] = useState<File>()
    const session = useSession()

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!file) return null

        try {
            const username = session.data?.user.username
            // const url = await getPresigned(username, file.name)
            const ticket = await getPresigned()

            const url = ticket['uploadUrl']
            const uuid = ticket['uuid']

            console.log(url)
            console.log(uuid)

            await put(url, file)

            await notify(username, file.name, uuid)
            console.log('File uploaded successfully')
        } catch (e: any) {
            console.log(e)
        }
    }

    useEffect(() => {
        if (!session || !session.data?.user.email) {
            redirect('/api/auth/signin')
        }
    }, [session])

    return (
        <form onSubmit={onSubmit}>
            <input
                type="file"
                name="file"
                onChange={(e) => setFile(e.target.files?.[0])}
            />
            <input type="submit" value="Upload" />
        </form>
    )
}

export default Upload
