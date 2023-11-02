'use client'

import Stream from './video'
import App from './App'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const Page = () => {
    const searchParams = useSearchParams()
    const search = searchParams.get('uuid') || ''

    return (
        <div className="w-full">
            <App uuid={search} />
        </div>
    )
}

export default Page
