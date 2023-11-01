'use client'

import { useState } from 'react'

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

function Upload() {
    const [file, setFile] = useState<File>()

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!file) return null

        try {
            const url = await getPresigned()

            await put(url, file)
            console.log('File uploaded successfully')
        } catch (e: any) {
            console.log(e)
        }
    }

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
