
export default async function notify(username: any, videoName: any, uuid: any) {
    const backendHostname = process.env.BACKEND_HOSTNAME;

    // const url = "http://" + backendHostname + "/backend/notify/" + username + "/" + videoName + "/" + uuid
    const url = "/backend/notify/" + username + "/" + videoName + "/" + uuid

    const res = await fetch(url)
}