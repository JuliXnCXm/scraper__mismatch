import React from 'react'
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css'

const Nav = () => {
    let activeStyle = {
    color: "#2F80ED",
    };
    let activeClassName = "userNavlist--container__link";
    const { pathname } = useLocation();
    const switchData = () => {
        switch (pathname.split("/").at(-1)) {
            case "farmatodo":
                return require("../assets/data_farmatodo.csv");
            case "olimpica":
                return require("../assets/data_olimpica.csv");
            case "carulla":
                    return require("../assets/data_carulla.csv");
            case "hipermar":
                    return require("../assets/data_hipermar.csv");
            case "canaveral":
                    return require("../assets/data_canaveral.csv");
            case "exito":
                    return require("../assets/data_exito.csv");
            default:
                return require("../assets/data_larebaja.csv")
        }
    }

return (
    <div>
    <nav className="userNavlist--container">
        <ul className="userNav--container__list">
        <li
            onClick={() => window.location.reload()}
        >
            <NavLink
            to="/stores/larebaja"
            className={({ isActive }) => (isActive ? activeClassName : undefined)}
            isActive={() => ["stores"].includes(pathname)}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            end
            >
            <div>
                <div className="user_Line-nav"></div>
                <span>La Rebaja</span>
            </div>
            </NavLink>
        </li>
        <li
            onClick={() => window.location.reload()}
        >
            <NavLink
            to="/stores/carulla"
            className={({ isActive }) => (isActive ? activeClassName : undefined)}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
            <div>
                <div className="user_Line-nav"></div>
                <span>Carulla</span>
            </div>
            </NavLink>
        </li>
        <li
            onClick={() => window.location.reload()}
        >
            <NavLink
            to="/stores/farmatodo"
            className={({ isActive }) => (isActive ? activeClassName : undefined)}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
            <div>
                <div className="user_Line-nav"></div>
                <span>Farmatodo</span>
            </div>
            </NavLink>
        </li>
        <li
            onClick={() => window.location.reload()}
        >
            <NavLink
            to="/stores/hipermar"
            className={({ isActive }) => (isActive ? activeClassName : undefined)}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
            <div>
                <div className="user_Line-nav"></div>
                <span>Hipermar</span>
            </div>
            </NavLink>
        </li>
        <li
            onClick={() => window.location.reload()}
        >
            <NavLink
            to="/stores/olimpica"
            className={({ isActive }) => (isActive ? activeClassName : undefined)}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
            <div>
                <div className="user_Line-nav"></div>
                <span>Olimpica</span>
            </div>
            </NavLink>
        </li>
        <li
            onClick={() => window.location.reload()}
        >
            <NavLink
            to="/stores/exito"
            className={({ isActive }) => (isActive ? activeClassName : undefined)}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
            <div>
                <div className="user_Line-nav"></div>
                <span>Exito</span>
            </div>
            </NavLink>
        </li>
        <li
            onClick={() => window.location.reload()}
        >
            <NavLink
            to="/stores/canaveral"
            className={({ isActive }) => (isActive ? activeClassName : undefined)}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
            <div>
                <div className="user_Line-nav"></div>
                <span>Cañaveral Doña Lupe</span>
            </div>
            </NavLink>
        </li>
        </ul>
    </nav>
    <a
    href={switchData()}
    className="downloadFile"
    download= {"data_"+ pathname.split("/").at(-1) + ".csv"}
    >
        <button
            className="downloadCsv"
            target="_blank"
        >
            Download Raw data
        </button>
    </a>
    </div>
);
}

export default Nav