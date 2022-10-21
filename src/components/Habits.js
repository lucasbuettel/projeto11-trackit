import { Link } from "react-router-dom"
import styled from "styled-components"
import teste from "../assets/images/Group 8.png"
import Ellipse2 from "../assets/images/Ellipse 2.png"
import Vector from "../assets/images/Vector.png"
import { useState } from "react"

export default function Habits() {

    const [display, setDisplay] = useState("none");
    const [habit, setHabit] = useState("");
    const days = ["D", "S", "T", "Q", "Q", "S", "S"];

    function addHabits() {
        setDisplay("");
    }

    return (
        <Container>
            <Header>
                <p>TrackIt</p> <img src={teste} />
            </Header>
            <MainContent>
                <MyHabits><p>Meus hábitos</p> <button onClick={addHabits}>+</button></MyHabits>
                <ContAddHabit /* onSubmit={} */>

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
                </ContAddHabit>
                <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1>
            </MainContent>
            <Footer><p>Hábitos</p> <p>Histórico</p></Footer>
            <Circle><img src={Ellipse2} /><p>Hoje</p> </Circle> <CurvedLine><img src={Vector} /></CurvedLine>
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

const ContAddHabit = styled.form`
height: 180px;
width: 340px;
margin-top: 20px;
margin-left: 35px;
margin-bottom: 29px;
border-radius: 5px;
background-color: #FFFFFF;

`
const MyHabits = styled.div`

    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;

`