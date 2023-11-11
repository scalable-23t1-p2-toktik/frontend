
export default async function getThumbnail(uuidName: String) {

    const backendHostname = process.env.BACKEND_HOSTNAME;

    const url = "http://" + backendHostname + "/backend/thumbnail/" + uuidName

    const thumbnail = await fetch(url)

    return thumbnail
}