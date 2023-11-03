'use client'

import { Container, Video } from 'lucide-react'
import { useEffect, useState } from 'react'
import * as React from 'react'

// async function getPresigned(key: string) {
//     const res = await fetch(`http://localhost:8080/modify/${key}`)

//     if (!res.ok) {
//         throw new Error('Failed to get presigned url')
//     }
//     const data = await res.json()

//     return data
// }

function Stream() {
    const [url, setUrl] = useState('')
    const [isClient, setIsClient] = useState(false)

    useEffect(() => setIsClient(true), [])

    useEffect(() => {
        const fetchUrl = async () => {
            const response = await fetch('http://localhost/backend/modify/output')
            const url = await response.text()
            setUrl(url)
        }
        fetchUrl()
    }, [url])

    // useEffect(() => {
    //     // Fetch the presigned URL and update the URL state
    //     getPresigned('output')
    //         .then((presignedUrl) => {
    //             setUrl(presignedUrl)
    //         })
    //         .catch((error) => {
    //             console.error(error)
    //         })
    // }, [])
    return (
        <>
            {isClient && (
                <video
                    id="video"
                    controls={true}
                    autoPlay={true}
                    className="videoCentered"
                    style={{ width: '80%' }}
                    src="https://toktik-bucket.s3.ap-southeast-2.amazonaws.com/output.m3u8?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231101T142326Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIAUBKTRWRI7PJUFDQV%2F20231101%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=54970b8ddb929cb4e0da3e835e17480e9dc12e391695e7131f476fcf2c03fb00"
                ></video>
            )}
        </>
    )
}

export default Stream
