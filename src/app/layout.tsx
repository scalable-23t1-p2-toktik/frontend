import Providers from './providers'
import '../styles/globals.css'
import { Toaster } from '@/components/ui/toaster'
import Navbar from '@/components/NavBar'


export const metadata = {
    title: 'Next.js',
    description: 'Generated by Next.js',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Providers>{children}</Providers>
                <Toaster />
            </body>
        </html>
    )
}
