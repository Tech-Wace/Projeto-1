import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

import Logo from '../assets/logo/sportstorecenter-black.svg';
import { NavStyle } from "../css/NavStyle";

const Nav = () => {

    const [active, setActive] = useState(false);

    const toggleMode = () => {
        setActive(!active)
    }

    return (
        <>
            <NavStyle>
                <section id="nav">
                    <Link to='/'><img src={Logo} alt="logo site" /></Link>

                    <div className={active ? 'icon icon-active' : 'icon'} onClick={toggleMode}>
                        <div className="hamburguer hamburguer-icon"></div>
                    </div>

                    <nav className={active ? "menu-nav menu-nav-open" : "menu-nav menu-nav-close"}>
                        <ul className="menu-link">
                            <li><Link to='/' className="link">Home</Link></li>
                            <li><Link to='/produtos' className="link">Produtos</Link></li>
                            <li><Link to='/sobre' className="link">Sobre</Link></li>
                            <li><Link to='/contato' className="link">Contato</Link></li>
                        </ul>
                        <ul className="menu-login">
                            <li><Link to='/login' className="link">Login</Link></li>
                            <li><Link to='/login' className="link">Cadastro</Link></li>
                        </ul>
                        <ul className="menu-bag">
                            <i className="bi bi-bag"></i>
                        </ul>
                    </nav>
                </section>
            </NavStyle>
        </>
    );
}

export default Nav;
