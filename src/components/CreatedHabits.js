import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "./Context";

import ListedHabits from "./ListedHabits";

export default function CreatedHabits(){
    const token = JSON.parse(localStorage.getItem('token'));
    const { createdHabits, setCreatedHabits } = useContext(UserContext);

    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const promisse = axios.get(URL, {
            headers: { authorization: `Bearer ${token}` }
        });

        promisse.then((res) => {
            //console.log(res.data);
            setCreatedHabits(res.data);
        }
        );
        promisse.catch((err) => console.log(err.response.data.message));
    }, []);

    return(
        <HabitsList>
            {createdHabits.map((h, index) => <ListedHabits key = {index} listedHabits={h}/>)}
        </HabitsList>
    )
}

const HabitsList = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top:20px;
`