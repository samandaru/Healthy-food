import styled from 'styled-components';





export const Container=styled.div`
width: 100%;
height: 500px;
/* border:1px solid black; */
display: flex;
margin-left: 150px;

`;


export const GirlImg=styled.img`
flex:1;
border-radius: 30px;
margin-right:98px;
`;
export const AboutText=styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;

`;

AboutText.Dis=styled.div`
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
/* or 150% */

display: flex;
align-items: center;
letter-spacing: 0.2em;
text-transform: uppercase;

color: #DC780B;

opacity: 0.7;

`;
AboutText.Title=styled.div`
font-family: Philosopher;
font-style: normal;
font-weight: bold;
font-size: 31.25px;
line-height: 41px;
/* or 130% */


color: #150C01;

`;
AboutText.Text=styled.div`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
/* or 150% */
margin-top: 30px;
margin-bottom:30px;

color: #150C01;

opacity: 0.7;

`;
