import styled from "styled-components"
import Ellipse2 from "../assets/images/Ellipse 2.png"
import Vector from "../assets/images/Vector.png"

import { Link } from "react-router-dom"

export default function Historic(){
    const image = JSON.parse(localStorage.getItem('image'));
    return(
        <>
            <Container>
            <Header >
                <p>TrackIt</p> <img src={image} />
            </Header>
            <MainContent>
            <MyHistoric><p>Histórico</p></MyHistoric>
            <h5>Em breve você poderá ver o histórico dos seus hábitos aqui!</h5>
            </MainContent>
            <Footer><Link to="/habitos"><p>Hábitos</p></Link> <Link to="/historico"><p>Histórico</p></Link></Footer>
            <Link to="/hoje"><Circle ><img src={Ellipse2} /><p>Hoje</p> </Circle>
            <CurvedLine><img src={Vector} /></CurvedLine></Link>
        </Container>
        </>
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

h5{
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    color:#666666;
    width: 350px;
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
const MyHistoric = styled.div`

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
h5{

}

`
