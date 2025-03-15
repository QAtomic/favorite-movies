import Link from "next/link";

export default function NavBar() {

    return (
        <>
            <nav className="navbar">
                <div className="navbar-brand">
                    Nav Bar
                </div>
                <div className="navbar-links">
                    <Link className="navbar-link" href="/">Home</Link>
                    <Link className="navbar-link" href="/favorites">Favorites</Link>
                </div>
            </nav>
        </>
    );
}