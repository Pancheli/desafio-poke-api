import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "" );

    return (
        <Navbar className="d-flex px-5 bg-dark fixed-top py-lg-0 justify-content-between">
            <Navbar.Brand>
                <img width="100" src="/logo-navbar.png" alt="" />
            </Navbar.Brand>
            <div className="justify-content-end">
                <NavLink className={`me-3 ${setActiveClass}`} to="/">
                    Home
                </NavLink>
                <NavLink className={setActiveClass} to="pokemones">
                    Pokémones
                </NavLink>
            </div>

        </Navbar>
    )
}
