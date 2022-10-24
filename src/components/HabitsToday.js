import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components"

import Tick from "../assets/images/Tick.png"
import UserContext from "./Context";

export default function HabitsToday({habit}){
    console.log(habit);
    const token = JSON.parse(localStorage.getItem('token'));
    const [boolean, setBoolean] = useState(habit.done);
   
    
    
    
    function tick(e) {
        console.log(habit.id)
        e.preventDefault()
        
        

        if(habit.done === false){
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`

        setBoolean(!boolean);

        
        const promisse = axios.post(URL, [], {headers: { authorization: `Bearer ${token}` }})

        promisse.then((res) => {
            console.log(res);
            window.location.reload(true);
           
        })

        promisse.catch((err) => {
            alert(err.response.data.message)

        })
    } else{
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`

    setBoolean(!boolean);

    
    const promisse = axios.post(URL, [], {headers: { authorization: `Bearer ${token}` }})

    promisse.then((res) => {
        console.log(res);
        window.location.reload(true);
        
       
    })

    promisse.catch((err) => {
        alert(err.response.data.message)

    })

    }
    };


  
    return(
    <HabitToday>
        <Flex><p>{habit.name}</p> <Rectangle onClick={tick} boolean={boolean}><img src={Tick}/></Rectangle></Flex>
        <h4>Sequência atual: {habit.currentSequence} dias</h4>
        <h4>Seu record: {habit.highestSequence} dias</h4>
    </HabitToday>)
}


const HabitToday = styled.div`
height: 94px;
width: 340px;
border-radius: 5px;
background-color: #FFFFFF;
margin-top: 28px;
margin-left: 18px;


p{
    height: 25px;
    width: 250px;
    font-family: Lexend Deca;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    margin-left: 15px;
    padding-top: 13px;
    color: #666666;
}

h4{
    margin-top: -40px;
    margin-bottom:41px;
    margin-left: 15px;
    font-family: Lexend Deca;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    text-align: left; 
    color: #666666;
    }
`

const Rectangle = styled.div`
    margin-top: 13px;
    margin-right: 13px;
    height: 69px;
    width: 69px;

border-radius: 5px;

    background-color: ${(prop) => prop.boolean? `#8FC549` : `#E7E7E7`};

    display: flex;
    justify-content: center;
    align-items: center;
   

`
const Flex = styled.div`
display: flex;

`