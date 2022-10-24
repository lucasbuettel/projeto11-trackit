import styled from "styled-components"
import Ellipse2 from "../assets/images/Ellipse 2.png"
import Vector from "../assets/images/Vector.png"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import HabitsToday from "./HabitsToday"
import dayjs from "dayjs"
import { Link } from "react-router-dom"
import UserContext from "./Context"



export default function Today(){

    const image = JSON.parse(localStorage.getItem('image'));
    const token = JSON.parse(localStorage.getItem('token'));
    const {habitToday, setHabitToday} = useContext(UserContext);
    
   
    console.log(habitToday);
    let cont = 0;
    let percernt = 0;
    let num = 0;
    function completedTasks(){
        for (let k = 0; k < habitToday.length; k++) {
            if(habitToday[k].done === true){
                cont++;
                percernt = cont/habitToday.length;
            }

            
        }
    } 
    completedTasks();
    num = (percernt*100).toFixed(0);
    console.log(num);
   

    let customParseFormat = require('dayjs/plugin/customParseFormat')
    dayjs.extend(customParseFormat);
    require('dayjs/locale/pt-br');
    let today = dayjs().locale('pt-br').format('dddd, DD/MM');
    let portuguese = today[0].toUpperCase() + today.substring(1);
    

    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const promisse = axios.get(URL, {
            headers: { authorization: `Bearer ${token}` }
        });

        promisse.then((res) => {
            console.log(res.data);
            setHabitToday(res.data);
            
        }
        );
        promisse.catch((err) => console.log(err.response.data.message));
    }, []);
   
   


 

    return(
        <>
            <Container>
            <Header >
                <p>TrackIt</p> <img src={image} />
            </Header>
            <MainContent>
            <TodayHabit><p>{portuguese}</p></TodayHabit>
            <Percent percernt={percernt}> {num}% dos hábitos concluídos</Percent>
            {habitToday.map((h,index) => <HabitsToday key={index} habit={h} />)}
            </MainContent>
            <Footer><Link to="/habitos"><p>Hábitos</p></Link> <Link to="/historico"><p>Histórico</p></Link></Footer>
            <Link to="/hoje"><Circle ><img src={Ellipse2} /><p>Hoje</p> </Circle>
            <CurvedLine><img src={Vector} /></CurvedLine></Link>
        </Container>
        </>
    );
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
const TodayHabit = styled.div`
   p{
    height: 29px;
    width: 300px;
    padding-top: 28px;
    padding-left: 17px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    color: #126BA5;
}
`
const Percent = styled.div`
height: 22px;
width: 278px;
font-family: Lexend Deca;
font-size: 18px;
font-weight: 400;
line-height: 22px;
margin-left: 17px;
text-align: left;
color:${(prop) => prop.percernt === 0 ? `#BABABA` : `#8FC549`};


`
