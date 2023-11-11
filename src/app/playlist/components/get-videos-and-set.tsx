
export default async function getVideosAndSet(setVideos: React.Dispatch<React.SetStateAction<never[]>>) {
    const backendHostname = process.env.BACKEND_HOSTNAME;

    const url = "http://" + backendHostname + "/backend/playlist"

    const res = await fetch(url)

    const videos = await res.json()

    setVideos(videos)
}