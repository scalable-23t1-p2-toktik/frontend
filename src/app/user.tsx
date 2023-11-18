'use client'

import { useSession } from 'next-auth/react'

export const User = () => {
    const session = useSession()
    return <pre>{JSON.stringify(session)}</pre>
}
