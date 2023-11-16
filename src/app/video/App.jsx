'use client'

import React from 'react'
import { useEffect, useState } from 'react'

// This imports the functional component from the previous sample.
import VideoJS from './VideoJs'

const App = ({ uuid }) => {
    const playerRef = React.useRef(null)

    const videoJsOptions = {
        autoplay: true,
        controls: true,
        controlBar: {
            remainingTimeDisplay: true,
        },
        muted: true,
        height: '500px',
        width: '280px',
        liveui: true,
        volume: 0.5,
        loop: true,
        fluid: false,
        sources: [
            {
                src: 'http://localhost:8080/stream/' + uuid,
                type: 'application/x-mpegURL',
            },
        ],
    }

    const handlePlayerReady = (player) => {
        playerRef.current = player

        // You can handle player events here, for example:
        player.on('waiting', () => {
            videojs.log('player is waiting')
        })

        player.on('dispose', () => {
            videojs.log('player will dispose')
        })
    }

    return (
        <>
            <div>
                {/* <div>video</div> */}
                <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
                {/* <div>video</div> */}
            </div>
        </>
    )
}

export default App
