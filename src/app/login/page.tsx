export default function Login() {
    return (
        <main>
            <h2>
                Login Page
            </h2>
        </main>
    )
}

async function checkCredential(username: String, password: String) {
    // Fetch the databse through fetch()

    // const conn = await fetch(<api to database>)
    // const user = await conn.json (or some other type that's not json)
    // ^ use interface {} to define the object of User

    // If credential exists and password match
    // redirect to Validated User Home Page
    // ...

    // Otherwise, output/log appropriate error message and stay at the same root page
    // ...
}