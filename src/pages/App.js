import {BrowserRouter,Routes, Route} from "react-router-dom";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Login from "../pages/Login";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {auth} from "../http/userAPI";
import Client from "./Client";
import Admin from "./Admin";
import Services from "./Services"
import Inventory from "./Inventory";

export default function App() {
    const isAuth = useSelector(state => state.user.isAuth)
    const isAdmin = useSelector(state => state.user.isAdmin)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(auth())
    })

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/client" element={<Client/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/inventory" element={<Inventory/>}/>
            </Routes>
            {!isAuth &&
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/registration" element={<Register />}/>
                </Routes>
                        }
            {isAdmin &&
                <Routes>
                    <Route path="/admin" element={<Admin/>}/>

                </Routes>
            }

        </BrowserRouter>

    );
}