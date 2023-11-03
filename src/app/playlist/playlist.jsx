'use client'

import { get } from 'http'
import React from 'react'
import { set } from 'react-hook-form'
import Image from 'next/image'

async function getVideos() {
    const res = await fetch(`http://localhost/backend/playlist`)

    const videos = await res.json()

    return videos
}

async function getThumbnail() {
    const thumbnail = await fetch(`http://localhost/backend/thumbnail/` + uuidName)

    return thumbnail
}

export const Playlist = () => {
    const [videos, setVideos] = React.useState([])

    React.useEffect(() => {
        getVideos = async () => {
            const res = await fetch(`http://localhost/backend/playlist`)

            const videos = await res.json()

            console.log(videos)

            setVideos(videos)
        }
        getVideos()
    }, [])

    return (
        <>
            {videos.map((video) => (
                <div className="container" key={video}>
                    <div className="row">
                        <div className="container">
                            <a href={`video?uuid=${video['uuidName']}`}>
                                <VideoItem
                                    uuidName={video['uuidName']}
                                ></VideoItem>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

const VideoItem = ({ name, uuidName }) => {
    const [thumbnail, setThumbnail] = React.useState('')

    React.useEffect(() => {
        getThumbnail = async () => {
            const fetchedThumbnail = await fetch(
                `http://localhost/backend/thumbnail/` + uuidName
            )
            const thumbnailUrl = await fetchedThumbnail.text()
            setThumbnail(thumbnailUrl)
        }
        getThumbnail()
    }, [])
    return (
        <div style={{ padding: '10px 0px' }}>
            <Image
                src={thumbnail}
                alt="Thumbnail"
                width={400}
                height={200}
                className="relative"
            />
            <p>{name}</p>
        </div>
    )
}

export default Playlist
