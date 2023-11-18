import Link from 'next/link'
import { buttonVariants } from './ui/button'
import Image from 'next/image'
import { LoginButton, LogoutButton } from '@/app/auth'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import SocketComponent from './SocketComponent'
import { Providers } from '@/app/providers'

const Navbar = async () => {
    const session = await getServerSession(authOptions)

    return (
        <div className=" bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
            <div className="container flex items-center justify-between">
                <Link href="/">
                    <Image
                        src="/images/tik-tok.jpg"
                        alt="Logo"
                        width={45}
                        height={45}
                        className="relative"
                    />
                </Link>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <SocketComponent />
                    <Link href="/upload" style={{ paddingRight: '20px' }}>
                        <button className={buttonVariants()}>Upload</button>
                    </Link>
                    {session?.user ? <LogoutButton /> : <LoginButton />}
                    {/* <LoginButton />
                    <LogoutButton /> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar
