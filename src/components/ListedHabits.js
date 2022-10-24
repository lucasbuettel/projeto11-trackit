import axios from "axios";
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import trash from "../assets/images/trash.png"
import UserContext from "./Context";
import ScheduledDay from "./ScheduledDay"

export default function ListedHabits({ listedHabits }) {

    const { id, setId } = useContext(UserContext);
   
    const token = JSON.parse(localStorage.getItem('token'));
    //console.log(listedHabits)

    const days = [
        { id: 0, initialletter: "D"},
        { id: 1, initialletter: "S"},
        { id: 2, initialletter: "T"},
        { id: 3, initialletter: "Q"},
        { id: 4, initialletter: "Q"},
        { id: 5, initialletter: "S"},
        { id: 6, initialletter: "S"}
    ]
 
   


    function deletHabit(e) {
        e.preventDefault()
        setId(listedHabits.id);

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`


       
        const promisse = axios.delete(URL, {
            headers: { authorization: `Bearer ${token}` }
        })

        promisse.then((res) => {
            
            window.location.reload(true);
            //console.log(res.data)

        })

        promisse.catch((err) => {
            alert(err.response.data.message)
        })
    }

    
    return (
        <>
            <List>
                <NameList><h3>{listedHabits.name}</h3><img src={trash} onClick={deletHabit} /></NameList>
                <HabitDays>{days.map((d,index) => <ScheduledDay key = {index} i={index} chosenDays={d.initialletter} daysSelected ={listedHabits.days}/>)}</HabitDays>
            </List>

        </>
    )
}

const List = styled.div`

height: 91px;
width: 340px;
left: 17px;
top: 147px;
border-radius: 5px;
background-color: #FFFFFF;
margin-bottom:10px;



h3{
    height: 25px;
    width: 220px;
    margin-top:13px;
    margin-left: 15px;

    font-family: Lexend Deca;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    text-align: left;

}
img{
    height: 15px;
    width: 13px;
    margin-top: 18px;
    margin-left: 70px;
}
`
const NameList = styled.div`
display: flex;
flex-wrap: wrap;
color: #666666;
`

const HabitDays = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
`
