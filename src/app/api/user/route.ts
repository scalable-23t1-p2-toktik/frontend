import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'
// import { z } from 'zod'

const prisma = new PrismaClient()

// const userRegisterSchema = z.object({
//     username: z.string().min(1, 'Username is required').max(100),
//     email: z.string().min(1, 'Email is required').email('Invalid email'),
//     password: z
//         .string()
//         .min(1, 'Password is required')
//         .min(8, 'Password must have atleast 8 characters'),
// })

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { email, username, password } = body
        // const { email, username, password } = userRegisterSchema.parse(body)

        const existingUserByEmail = await prisma.user.findUnique({
            where: { email: email },
        })
        if (existingUserByEmail) {
            return NextResponse.json(
                { user: null, message: 'Email already exists' },
                { status: 409 }
            )
        }

        const existingUserByUsername = await prisma.user.findUnique({
            where: { username: username },
        })
        if (existingUserByUsername) {
            return NextResponse.json(
                { user: null, message: 'Username already exists' },
                { status: 409 }
            )
        }

        const hashedPassword = await hash(password, 10)
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        })

        const { password: newUserpassword, ...rest } = newUser

        return NextResponse.json(
            { user: rest, message: 'User created successfully' },
            { status: 201 }
        )
    } catch (error) {
        return NextResponse.json(
            {
                message: 'Oops, Something went wrong!',
            },
            { status: 500 }
        )
    }
}
