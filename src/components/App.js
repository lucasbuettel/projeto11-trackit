import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "../assets/GlobalStyle";
import Login from "./Login";
import SignUp from "./SignUp";
import Habits from "./Habits";



export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<SignUp />} />
                <Route path="/hoje" element={<Habits />} />
            </Routes>
        </BrowserRouter>

    )
}