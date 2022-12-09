import React from "react";
import logo from '../img/logo.png';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../reducers/userReducer"
const NavComponent = () =>{
    const isAuth = useSelector(state => state.user.isAuth)
    const isAdmin = useSelector(state => state.user.isAdmin)
    const dispatch = useDispatch()
        return (
            <header>
                <div className="Logo">
                    <img src={logo} alt="123"/>
                    GrandGym
                </div>
                <ul className="NavBar">
                    {!isAdmin && !isAuth && <li><NavLink to="/">Home</NavLink></li>}
                    {!isAdmin && isAuth && <li><NavLink to="/services">Services</NavLink></li>}
                    {isAdmin && <li><NavLink to="/inventory">Inventory</NavLink></li>}
                    {!isAdmin && <li><NavLink to="/">About us</NavLink></li>}
                    {!isAdmin && <li><NavLink to="/">Contact</NavLink></li>}
                    {!isAuth && <li><NavLink to="/registration">Register</NavLink></li>}
                    {isAuth && <li> <NavLink to="/" onClick={()=> dispatch(logout())}>Logout</NavLink> </li>}
                    {!isAdmin && isAuth && <NavLink to ="/client" ><img className="nav-img" src={require('../img/Profile.png') } alt=""/></NavLink>}
                    {isAdmin && isAuth && <NavLink to ="/admin" ><img className="nav-img" src={require('../img/Profile.png') } alt=""/></NavLink>}
                </ul>
            </header>
        );
}
export default NavComponent;