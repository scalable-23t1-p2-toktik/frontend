
import React from 'react'

export default async function fetchUrl (setUrl: React.Dispatch<React.SetStateAction<string>>) {
    const backendHostname = process.env.BACKEND_HOSTNAME;

    // const backendUrl = "http://" + backendHostname + "/backend/stream/modify/output"
    const backendUrl = "/backend/stream/modify/output"

    const response = await fetch(backendUrl)
    const url = await response.text()

    setUrl(url)
}