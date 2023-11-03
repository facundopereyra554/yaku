import "./Nav.css";

function Nav() {
    return (
        <>
            <div className="container-fluid">
                <div className="container navContainer">
                    <img src="../src/assets/wave.png" alt="wave" />
                    <div className="navbar-info">
                        <ul className="list-pages">
                            <li>
                                <a href="#">Inicio</a>
                            </li>
                            <li>
                                <a href="#">Catálogo</a>
                            </li>
                            <li>
                                <a href="#">Contacto</a>
                            </li>
                            <li className="icon">
                                <a href="#">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7"
                                        fill="none"
                                        viewBox="0 0 22 22"
                                        stroke="currentColor"
                                        stroke-width="2">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nav;
