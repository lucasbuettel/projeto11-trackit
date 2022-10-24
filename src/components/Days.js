import { useContext, useState } from "react";
import styled from "styled-components"
import UserContext from "./Context";



export default function Days({ d, dayNumber}) {
    const[click, setClick]  = useState(true);
    const {selectedDay, setSelectedDay} = useContext(UserContext);
    

    function handleDay(dayNumber) {

        const isSelected = selectedDay.some(s => dayNumber === s.id)
        setClick(!click);
        console.log(click)

        if(isSelected){
            const newList = selectedDay.filter(s => dayNumber !== s.id)
            setSelectedDay(newList);
        } else{

            console.log(dayNumber);
            setSelectedDay([...selectedDay, dayNumber]);
        }
         
        
    }
    //console.log(selectedDay)
    
    return (

        <SelectDay click={click} onClick={()=>handleDay(dayNumber) }>
            {d}
        </SelectDay>
    )
}

const SelectDay = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 5px;
    background-color: ${(prop) => prop.click === false? `#D5D5D5` : `#FFFFFF`};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-left: 4px;

    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
    color: ${(prop) => prop.click === false? `#FFFFFF` : `#D5D5D5`};



`