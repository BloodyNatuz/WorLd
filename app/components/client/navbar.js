import Link from "next/link"

export default function Navbar() {
    return (
        <>
        <nav>
            <Link href="/"><img src="/img/logo.PNG" alt="Logo de WorLd"></img></Link>
            <Toprnav></Toprnav>
        </nav>

        <hr/>
        </>

    )
}

export async function Toprnav(){

    let isLogged = false;

    if (isLogged == true) {
        return (
            <Link href="/" className="tertiary-btn">Mon compte</Link>
        )
    } else {
        return (
            <Link href="/login" className="tertiary-btn">Connexion</Link>
        )
    }
}