import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <div className="Index">
                <Routes>
                    <Route path="/Register" element={<Register/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Login" element={<Login/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}