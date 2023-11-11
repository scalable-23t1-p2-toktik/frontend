import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { User } from './user'
import { LoginButton, LogoutButton } from './auth'
import App from './video/App'
import Playlist from './playlist/playlist'



export default function Home() {
    return (
        <div
            className="video"
            style={{
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'center',
                flexDirection: 'column',
                overflow: 'scroll',
            }}
        >
            <Playlist />
        </div>
    )
}

//  {/* <h2>Server Session</h2>
//             <pre>{JSON.stringify(session)}</pre>
//             <h2>Client Call</h2>
//             <User /> */}
//             {/* <div>
//                 <App />
//             </div> */}
