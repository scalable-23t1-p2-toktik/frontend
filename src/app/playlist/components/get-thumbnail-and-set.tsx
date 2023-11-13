
const backendHostname = process.env.BACKEND_HOSTNAME;

export default async function getThumbnailAndSet(uuidName: string, setThumbnail: React.Dispatch<React.SetStateAction<string>>) {

    // const url = "http://" + backendHostname + "/backend/thumbnail/" + uuidName
    const url = "/backend/thumbnail/" + uuidName

    const fetchedThumbnail = await fetch(url)

    const thumbnailUrl = await fetchedThumbnail.text()

    setThumbnail(thumbnailUrl)
}