'use client'

import { signIn, signOut } from 'next-auth/react'
import { buttonVariants } from '@/components/ui/button'
import router from 'next/router'

export const LoginButton = () => {
    return (
        <button className={buttonVariants()} onClick={() => signIn()}>
            Sign In
        </button>
    )
}

export const LogoutButton = () => {
    return (
        <button className={buttonVariants()} onClick={() => { 
            signOut({ redirect: false }).then(() => {
                router.push("/"); // Redirect to the root page after signing out
    });}}>
            Sign Out
        </button>
    )
}
