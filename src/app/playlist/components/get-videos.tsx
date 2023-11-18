
export default async function getVideos() {
    const backendHostname = process.env.BACKEND_HOSTNAME;

    const url = "http://" + backendHostname + "/backend/playlist"

    const res = await fetch(url)

    const videos = await res.json()

    return videos
}