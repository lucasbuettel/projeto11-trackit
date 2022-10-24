import { useEffect, useState } from "react";
import styled from "styled-components"

export default function ScheduledDay({chosenDays,daysSelected,i}){
    const[selection, setSelection ] = useState("");
    useEffect(() => {
       
        for ( let j = 0; j < daysSelected.length; j++) {
            /* console.log(days[j].id); */
            
            if(i === daysSelected[j]){
                setSelection("gray");

                };
            }
        
    }, []);
    return (

        <DaysHabits selection={selection}>
            {chosenDays}
        </DaysHabits>
    )
}

const DaysHabits = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 5px;
    background-color: ${(prop) => prop.selection};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-left: 13px;
    margin-top: 8px;

    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    
    text-align: center;
    color: #D5D5D5;

`