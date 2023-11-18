import React from 'react'

// May causes type mismatch error due to uuid not initially being a string (any type is being inputted)
export default async function fetchUrl (uuid: string ,setUrl: React.Dispatch<React.SetStateAction<string>>) {
    const backendHostname = process.env.BACKEND_HOSTNAME;

    // const backendUrl = "http://" + backendHostname + "/backend/stream/" + uuid
    const backendUrl = "/backend/stream/" + uuid

    const response = await fetch(backendUrl)
    const url = await response.text()

    setUrl(url)
}