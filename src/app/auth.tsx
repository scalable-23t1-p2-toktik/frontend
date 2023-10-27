'use client'

import { signIn, signOut } from 'next-auth/react'
import { buttonVariants } from '@/components/ui/button'

export const LoginButton = () => {
    return (
        <button className={buttonVariants()} onClick={() => signIn()}>
            Sign In
        </button>
    )
}

export const LogoutButton = () => {
    return (
        <button className={buttonVariants()} onClick={() => signOut()}>
            Sign Out
        </button>
    )
}
