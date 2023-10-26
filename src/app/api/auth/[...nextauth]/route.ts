import CredentialsProvider from 'next-auth/providers/credentials'
import NextAuth, { type NextAuthOptions } from 'next-auth'
import { compare } from 'bcrypt'
import { User } from '@prisma/client'

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: 'Sign In',
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: {
                    label: 'Username',
                    type: 'text',
                    placeholder: 'Username',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                },
            },
            async authorize(credentials) {
                // Add logic here to look up the user from the credentials supplied
                if (!credentials?.username || !credentials.password) {
                    return null
                }

                const user = await prisma.user.findUnique({
                    where: {
                        username: credentials.username,
                    },
                })

                if (!user) {
                    return null
                }

                const isValidPassword = await compare(
                    credentials.password,
                    user.password
                )

                if (!isValidPassword) {
                    return null
                }

                return {
                    id: user.id + ' ',
                    username: user.username,
                    email: user.email,
                }
            },
        }),
    ],

    callbacks: {
        session: ({ session, token }) => {
            console.log('Session callback', { session, token })
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                },
            }
        },
        jwt: ({ token, user }) => {
            console.log('JWT callback', { token, user })
            if (user) {
                const u = user as unknown as any
                return {
                    ...token,
                    id: u.id,
                }
            }
            return token
        },
    },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
