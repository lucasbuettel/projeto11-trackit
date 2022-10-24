import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "../assets/GlobalStyle";
import Login from "./Login";
import SignUp from "./SignUp";
import Habits from "./Habits";
import { UserProvider } from "./Context";
import Today from "./Today";
import Historic from "./Historic";



export default function App() {
    return (
        <UserProvider>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<SignUp />} />
                    <Route path="/habitos" element={<Habits />} />
                    <Route path="/hoje" element={<Today />} />
                    <Route path="/historico" element={<Historic />} />
                </Routes>
            </BrowserRouter>
        </UserProvider>

    )
}