import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { User } from './user'
import { LoginButton, LogoutButton } from './auth'
import App from './video/App'

export default async function Home() {
    const session = await getServerSession(authOptions)

    return (
        <main>
            <h2>Server Session</h2>
            <pre>{JSON.stringify(session)}</pre>
            <h2>Client Call</h2>
            <User />
            <div>
                <App />
            </div>
        </main>
    )
}
