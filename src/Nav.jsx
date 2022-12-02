import React from 'react'
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
let activeStyle = {
  color: "#2F80ED",
};
let activeClassName = "userNavlist--container__link";
const { pathname } = useLocation();

return (
    <div>
    <nav className="userNavlist--container">
        <ul className="userNav--container__list">
        <li>
            <NavLink
            to=""
            className={({ isActive }) => (isActive ? activeClassName : undefined)}
            isActive={() => ["La rebaja"].includes(pathname)}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            end
            >
            <div>
                <div className="user_Line-nav"></div>
                <span>La Rebaja</span>
            </div>
            </NavLink>
        </li>
        <li>
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
        <li>
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
        <li>
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
        <li>
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
        </ul>
    </nav>
    <a
    href="CV.pdf"
    className="downloadFile"
    download="data_farmatodo.csv"
    target="_blank"
    >
    <button
        href="CV.pdf"
        className="downloadCsv"
        download="CV.pdf"
        target="_blank"
    >
        Download Raw data
    </button>
    </a>
    </div>
);
}

export default Nav