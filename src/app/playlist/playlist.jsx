'use client'

import { get } from 'http'
import React from 'react'
import { set } from 'react-hook-form'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

async function getVideos() {
    const res = await fetch(`http://localhost:8080/playlist`)

    const videos = await res.json()

    return videos
}

async function getThumbnail() {
    const thumbnail = await fetch(`http://localhost:8080/thumbnail/` + uuidName)

    return thumbnail
}

export const Playlist = () => {
    const [videos, setVideos] = React.useState([])
    const session = useSession()

    React.useEffect(() => {
        getVideos = async () => {
            const res = await fetch(`http://localhost:8080/playlist`)

            const videos = await res.json()

            console.log(videos)

            setVideos(videos)
        }
        getVideos()

        const updateInterval = setInterval(getVideos, 5000)

        return () => {
            clearInterval(updateInterval)
        }
    }, [])

    return (
        <>
            {videos.map((video) => (
                <div className="container" key={video}>
                    <div className="row">
                        <div className="container">
                            <p>{video['name']}</p>
                            <a href={`video?uuid=${video['uuidName']}`}>
                                <VideoItem
                                    uuidName={video['uuidName']}
                                ></VideoItem>
                            </a>
                            {/* <p>Likes: {video['likes'].length}</p> */}
                            <h2>
                                <button
                                    onClick={() => likeVideo(video.uuidName)}
                                >
                                    Like
                                </button>{' '}
                                {video['likes'].length} Views: {video['views']}
                            </h2>
                            <div>
                                <h3>Comments: </h3>
                                {video.comments.map((comment, index) => (
                                    <div key={index}>
                                        <p>
                                            [{comment.dateTime}]
                                            {comment.username}: {comment.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
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
                `http://localhost:8080/thumbnail/` + uuidName
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
