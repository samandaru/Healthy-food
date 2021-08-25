import styled from 'styled-components'




export const Container=styled.div`
display:flex;
width: 100%;
height: 333px;
/* border: 1px solid black; */
flex-direction: column;
margin-bottom:100px;

`;
export const Title=styled.div`
display:flex;
flex-direction: column;
align-items: center;



`

Title.Title1=styled.div`
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;

text-align: center;
letter-spacing: 0.2em;
text-transform: uppercase;

color: #DC780B;

opacity: 0.7;



`;
Title.Title2=styled.div`
font-family: Philosopher;
font-style: normal;
font-weight: bold;
font-size: 31.25px;
line-height: 35px;
/* identical to box height */

text-transform: capitalize;

color: #150C01;


`;

export const FoodItem=styled.div`
display:flex;
justify-content:space-around;

width: 1020px;;


`;
export const Item=styled.div`
width: 300px;
height: 228px;
margin-top:44px;
display:flex;
flex-direction: column;
align-items: center;

`;
Item.Rasm=styled.img`
width: 48px;
height: 48px;
`;

Item.Title=styled.div`
font-family: Philosopher;
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 24px;
/* identical to box height, or 96% */
margin-top: 33px;
margin-bottom: 15px;

color: #150C01;
`;
Item.Text=styled.div`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
/* or 150% */

text-align: center;

color: #150C01;

opacity: 0.7;
`;