import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">


                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link className="nav-link" to='/prvi'>Prva osoba</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/drugi'>Druga osoba</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </header>
    )
}
