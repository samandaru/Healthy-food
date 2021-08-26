import styled from "styled-components";


export const Container=styled.div`
width: 1440px;
height: 658px;
margin-top:120px;
border:1px solid #fffff3;
position: relative;

`;



export const Box=styled.div`
margin: 67px 0 73px 0;
width: 1440px;
height: 518px;
background: #FBF1E7;
border:1px solid #FBF1E7;




`;
export const PhoneImg=styled.img`
position: absolute;
right: 244px;
top:0;

`;


export const Title=styled.div`
width: 555px;
height: fit-content;
margin-top: 114px;
margin-left:247px;
/* border: 1px solid red; */
margin-top:114px;


`;

Title.Name=styled.div`
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
display: flex;
align-items: center;
letter-spacing: 0.2em;
text-transform: uppercase;
color: #DC780B;
opacity: 0.7;
`;

Title.Text=styled.div`
font-family: Philosopher;
font-style: normal;
font-weight: bold;
font-size: 31.25px;
line-height: 41px;
color: #150C01;
margin-top:5px;
margin-bottom: 29px;
`;


Title.Dis=styled.div`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #150C01;
opacity: 0.7;
`;


export const App=styled.div`
display: flex;
align-items:center;
margin-top:39px;


`;

App.Apple=styled.div`
width: 163px;
height: 48px;
left: 247px;
top: 3635px;
margin-right: 30px;
background: #150C01;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
`;



App.Google=styled.div`
width: 179px;
height: 48px;
left: 440px;
top: 3635px;
display: flex;
justify-content: center;
align-items: center;
border: 1.5px solid #150C01;
box-sizing: border-box;
border-radius: 5px
`;

export const Link=styled.img`
display: flex;
align-items:center;


`;





