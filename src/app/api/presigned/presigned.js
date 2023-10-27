import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

export default async function handler(req, res) {
    const client = new S3Client({
        region: process.env.S3_REGION,
        credentials: {
            accessKeyId: process.env.S3_ACCESS_KEY,
            secretAccessKey: process.env.S3_SECRET_KEY,
        },
    })

    const command = new PutObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: req.query.file,
        fileType: req.query.fileType,
    })
    const url = await getSignedUrl(client, command, { expiresIn: 60 })

    res.status(200).json({
        url: url,
    })
}
