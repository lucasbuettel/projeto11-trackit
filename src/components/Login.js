import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"
import logo from "../assets/images/Group 8.png"

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function fazerLogin(e) {
        e.preventDefault()
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"

        const body = {
            email,password
        }
        
        console.log(body)
        const promisse = axios.post(URL, body)

        promisse.then((res) => {
            console.log(res.data)

            navigate("/hoje");
        })

        promisse.catch((err) => {
            alert(err.response.data.message)
            
        })
    }

    return (
        <Container>
            <CentralContent>
                <img src={logo} />

                <form onSubmit={fazerLogin}>
                    <div className="primeiro-input">
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email"
                            required />
                    </div>
                    <div className="segundo-input">
                        <input
                            id="senha"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="senha"
                            required
                        />
                    </div>
                    <button>Entrar</button>
                    <Link to={`/cadastro`}><p>Não tem uma conta? Cadastre-se!</p></Link>
                </form>
            </CentralContent>
        </Container>
    )
}

const Container = styled.div`

display: flex;
justify-content: center;
margin-top: 68px;

input{
    height: 45px;
    width: 303px;
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    text-align: left;
    margin-bottom: 6px;
    border: 1px solid #D4D4D4;

    ::placeholder { 
  color: #D4D4D4;
}

}
img{
    height: 178.38323974609375px;
    width: 180px;
    margin-bottom: 32.62px;
}
`

const CentralContent = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;

button{
    height: 45px;
    width: 303px;
    border-radius: 5px;
    border: none;
    background-color: #52B6FF;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    font-family: 'Lexend Deca', sans-serif;    
    font-size: 21px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: center;
}
p{
    
    margin-top: 25px;
    margin-left: 35.5px;
    font-family: 'Lexend Deca', sans-serif; 
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    color: #52B6FF;
   


}

`
