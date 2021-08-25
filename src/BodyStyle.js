import styled from 'styled-components';


export const Container = styled.div`
display: flex;
padding-bottom: 100px;
/* border-bottom: 1px solid red; */
margin-bottom:132px

`;

Container.Left =styled.div`
display: flex;
flex-direction: column;
flex: 1;
margin-top:auto;
`;
Container.Right =styled.img`
display: flex;
justify-content:center;
width:800px;
height:600px;
flex: 1;
`;

export const Content =styled.div`

font-family: Philosopher;
font-style: normal;
font-weight: bold;
font-size: 48.83px;
line-height: 58px;


color: #150C01;

`;

export const Description=styled.div`
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
margin-top: 42px;
margin-bottom: 50px;


color: #150C01;

opacity: 0.7;

`;

export const ButtonBox=styled.div`
display:flex;

`
