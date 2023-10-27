import Link from 'next/link'
import { buttonVariants } from './ui/button'
import Image from 'next/image'
import { LoginButton, LogoutButton } from '@/app/auth'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

const Navbar = async () => {
    const session = await getServerSession(authOptions)

    return (
        <div className=" bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
            <div className="container flex items-center justify-between">
                <Link href="/">
                    <Image
                        src="/images/tik-tok.png"
                        alt="Logo"
                        width={150}
                        height={45}
                        className="relative"
                    />
                </Link>
                <div>
                    {session?.user ? <LogoutButton /> : <LoginButton />}
                    {/* <LoginButton />
                    <LogoutButton /> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar
