import styled from "styled-components";



export const Container=styled.div`
width: 1140px;
height: 1220px;
/* border: 1px solid green; */
margin-top: 115px;
margin-left: 150px;
display: flex;
flex-direction: column;
align-items:center;

`;

export const Tittle=styled.div`
flex: 1;
/* border: 1px solid red; */
margin: 2px;
display: flex;
flex-direction: column;
align-items: center;
`;



Tittle.Menu=styled.div`
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.2em;
text-transform: uppercase;
color: #DC780B;
opacity: 0.7;
`;


Tittle.Text=styled.div`
font-family: Philosopher;
font-style: normal;
font-weight: bold;
font-size: 31.25px;
line-height: 24px;
display: flex;
align-items: center;
color: #150C01;
margin-top:9px;
margin-bottom: 25px;

`;

Tittle.Dis=styled.div`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
display: flex;
align-items: center;
text-align: center;
width: 748px;
height: 64px;
margin-bottom: 32px;
color: #150C01;
opacity: 0.7;
`;

export const Category=styled.div`
flex:6;
/* border: 1px solid blue; */
margin: 2px;
display:flex;
flex-direction: column;
align-items: center;

`;

Category.Up=styled.div`

display: flex;


`;

Category.Down=styled.div`

display: flex;
`;

export const Card=styled.div`
width: 360px;
height: 446px;
background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.1);
box-sizing: border-box;
border-radius: 75px 10px 10px 10px;
margin:15px;

`;


Card.Rasm=styled.img`
display: flex;
flex-direction:column;
width: 360px;
height: 264px;
background: #C4C4C4;
border-radius: 76px 10px 76px 0px;
`;


Card.Name=styled.div`
display: flex;
justify-content:space-between;
align-items: center;
margin: 20px 25px 20px 25px;

`;



export const Narx=styled.div`
font-family: Philosopher;
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 24px;
display: flex;
align-items: center;

color: #150C01;

`;



Card.Dis=styled.div`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
display: flex;
align-items: center;
margin: 20px 25px 20px 25px;
color: #150C01;

opacity: 0.7;


`;


Card.Bot=styled.div`
display: flex;
justify-content:space-between;
margin-left:25px;
margin-right: 25px;
align-items: center;
`;



export const Bottom=styled.div`
width: 36px;
height: 34px;
color:white;
font-size: 18px;
transform: matrix(1, 0, 0, -1, 0, 0);
background: #DC780B;
border-radius: 5px;
display:flex;
justify-content:center;
align-items: center;
`;

export const Star=styled.img`

`;



Category.Bot=styled.div`
width: 142px;
height: 42px;
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
/* identical to box height */
display: flex;
justify-content: center;
align-items: center;
margin-top: 50px;
color: #DC780B;

border: 1px solid #e9b37a;;
box-sizing: border-box;
border-radius: 5px;
`;



