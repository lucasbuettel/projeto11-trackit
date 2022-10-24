
import styled from "styled-components"

import Ellipse2 from "../assets/images/Ellipse 2.png"
import Vector from "../assets/images/Vector.png"
import Days from "./Days"
import { useContext, useState } from "react"
import axios from "axios"
import UserContext from "./Context"
import CreatedHabits from "./CreatedHabits"
import { Link } from "react-router-dom"

export default function Habits() {
    const [display, setDisplay] = useState("");
    const [habit, setHabit] = useState("");
    const { selectedDay, setSelectedDay } = useContext(UserContext);
    const { createdHabits, setCreatedHabits } = useContext(UserContext);
    
    console.log(createdHabits)

    const image = JSON.parse(localStorage.getItem('image'));
    const token = JSON.parse(localStorage.getItem('token'));
    console.log(image)
    console.log(token)


    const days = [
        { id: 0, day: "Domingo", initialletter: "D", status: "unavailable" },
        { id: 1, day: "Segunda", initialletter: "S", status: "unavailable" },
        { id: 2, day: "Terça", initialletter: "T", status: "unavailable" },
        { id: 3, day: "Quarta", initialletter: "Q", status: "unavailable" },
        { id: 4, day: "Quinta", initialletter: "Q", status: "unavailable" },
        { id: 5, day: "Sexta", initialletter: "S", status: "unavailable" },
        { id: 6, day: "Sábado", initialletter: "S", status: "unavailable" }
    ]


    
    function addHabits() {
        setDisplay("none");
    }
    function cancel() {
        setDisplay("");
        setSelectedDay([]);
        
    }

    function salvar(e) {

        e.preventDefault()
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

        const body = {
            name: habit,
            days: selectedDay
        }

        //console.log(body)
        const promisse = axios.post(URL, body, {
            headers: { authorization: `Bearer ${token}` }
        })

        promisse.then((res) => {
            
            console.log(res.data)
            window.location.reload(true);

        })

        promisse.catch((err) => {
            alert(err.response.data.message)
        })
    }


    return (
        <Container>
            <Header >
                <p>TrackIt</p> <img src={image} />
            </Header>
            <MainContent>
                <MyHabits><p>Meus hábitos</p> <button onClick={addHabits}>+</button></MyHabits>
                <ContainerAddHabit onSubmit={salvar} display={display}>

                    <div className="primeiro-input">
                        <input
                            id="habit"
                            type="text"
                            value={habit}
                            onChange={(e) => setHabit(e.target.value)}
                            placeholder="nome do hábito"
                            required
                        />
                    </div>
                    <Select>{days.map((d, index) =>
                        <Days
                            key={index}
                            dayNumber={d.id}
                            d={d.initialletter}
                            status={d.status}
                        />)}
                    </Select>

                    <Buttons>
                        <button onClick={cancel} className="button1">Cancelar</button>
                        <button type="submit" className="button2">Salvar</button>
                    </Buttons>

                </ContainerAddHabit>
                <TextVoid createdHabits={createdHabits}><h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1></TextVoid>
                
                <CreatedHabits/>
            </MainContent>
            <Footer><Link to="/habitos"><p>Hábitos</p></Link> <Link to="/historico"><p>Histórico</p></Link></Footer>
            <Link to="/hoje"><Circle ><img src={Ellipse2} /><p>Hoje</p> </Circle>
            <CurvedLine><img src={Vector} /></CurvedLine></Link>
        </Container>
    )

}

const Container = styled.div`
background-color: #E5E5E5;
width: 100%;

`

const Header = styled.div`
height: 70px;
width: 100%;
background-color: #126BA5;
position: fixed;
top:0;
left:0;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

p{
    font-family: 'Playball', cursive;
    font-size: 39px;
    font-weight: 400;
    line-height: 49px;
    text-align: left;
    padding-top: 10px;
    padding-left: 18px;
    color: #ffffff;
}

img{
    height: 51px;
    width: 51px;
    border-radius: 98.5px;
    background-color: #ffffff;
    margin-top: 9px;
    margin-right: 25px;
}


`

const MainContent = styled.div`
margin-top: 70px;
height: 1000px;



p{
    height: 29px;
    width: 148px;
    padding-top: 28px;
    padding-left: 17px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    color: #126BA5;
}

h1{
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    color:#666666;
    width: 100%;
    margin-left: 17px;
    margin-top: 17px;
    display: flex;
    flex-wrap: wrap;

}
`

const Footer = styled.div`
height: 70px;
width: 100%;
background-color: #ffffff;
position: fixed;
left: 0;
bottom: 0;
display: flex;
flex-wrap: wrap;
justify-content: space-between;

p{
    margin-right:70px;
    margin-left:40px;
    margin-top: 22px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
    color:#52B6FF;
}

`
const Circle = styled.div`
position: fixed;
height: 91px;
width: 91px;
left: 152px;
top: 585px;

p{
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    color: #ffffff;
    position: fixed;
    height: 91px;
    width: 91px;
    left: 152px;
    top: 617px;
}
`

const CurvedLine = styled.div`
position: fixed;
height: 91px;
width: 91px;
left: 168px;
top: 590px;
`
const MyHabits = styled.div`

    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;

    button{
    height: 35px;
    width: 40px;
    border-radius: 4.636363506317139px;
    border:none;
    background-color: #52B6FF;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 27px;
    font-weight: 400;
    line-height: 34px;
    text-align: center;
    color:#ffffff;
    margin-right: 18px;
    margin-top: 22px;
    cursor: pointer;

}

`

const ContainerAddHabit = styled.form`

display: ${(prop) => prop.display === "none" ? `` : `none`};
height: 180px;
width: 340px;
margin-top: 20px;
margin-left: 35px;
margin-bottom: 29px;
border-radius: 5px;
background-color: #FFFFFF;

input{
    height: 45px;
    width: 303px;
    border-radius: 5px;
    border: 1px solid #D5D5D5;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    text-align: left;
    border: 1px solid #D4D4D4;

    margin-left:19px;
    margin-top: 18px;
    margin-bottom: 10px;

    ::placeholder { 
  color: #D4D4D4;

}


}
`

const Select = styled.div`
display: flex;
flex-wrap:wrap;
margin-left: 18px;
`

const Buttons = styled.div`
margin-left: 148px;
margin-top: 26px;

.button1{
    background-color: #FFFFFF;
    border: none;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: #52B6FF;
    text-align: center;

}

.button2{
    background-color: #52B6FF;
    border:none;
    height: 35px;
    width: 84px;
    border-radius: 4.636363506317139px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
    margin-left: 15px;
    color: #FFFFFF;
}
`
const TextVoid = styled.div`
display: ${(prop) => prop.createdHabits === [] ? `` : `none`};
`