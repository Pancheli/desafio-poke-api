import { NavLink } from "react-router-dom";


export default function NavBar() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "" );

    return (
        <nav>
            <div className="logo">
                <img width="100" src='/logo-navbar.png' alt="logo" />
            </div>
            <div className="links">
                <NavLink className={setActiveClass} to="/">
                    Home
                </NavLink>
                <NavLink className={setActiveClass} to="pokemones">
                    Pokémones
                </NavLink>
            </div>

        </nav>
    )
}
