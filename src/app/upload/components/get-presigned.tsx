
export default async function getPresigned() {
    const backendHostname = process.env.BACKEND_HOSTNAME;

    const url = "http://" + backendHostname + "/backend/presigned"

    const res = await fetch(url)

    if (!res.ok) {
        throw new Error('Failed to get presigned url')
    }
    const data = await res.json()

    return data
}