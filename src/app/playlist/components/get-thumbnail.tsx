const backendHostname = process.env.BACKEND_HOSTNAME;

export default async function getThumbnail(uuidName: String) {

    // const url = "http://" + backendHostname + "/backend/thumbnail/" + uuidName
    const url = "/backend/thumbnail/" + uuidName

    const thumbnail = await fetch(url)

    return thumbnail
}