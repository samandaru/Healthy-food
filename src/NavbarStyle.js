import styled from 'styled-components'

export const  Container = styled.div`
display: flex;
align-items: center;
margin-left:150px;

`

export const  Logo = styled.img`
width: 45px;
height: 45px;

`


export const  NavItem = styled.div`

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: ${(props)=>(props.isActive ? '#DC780B' : '#150C01')} ;
opacity: ${(props)=> !props.isActive && '0.6'};
cursor: pointer;
margin-left:40px;
`
export const getSize=(props)=>{
    switch(props.type){
        case'large':
        return '60px';
        case'medium':
        return '46px';
        case'small':
        return '36px'
        default:
            return'60px';
    }
};

export const Button = styled.div`
width: 160px;
height :${(props)=> getSize(props)};
display: flex;
justify-content: center;
align-items: center;
margin: 5px;
background: ${({bgcolor})=>bgcolor};
cursor: pointer;
color: ${({color, bgcolor})=>color ? bgcolor :'white'};
border: ${({color, bgcolor})=>color && '1.5px solid #DC780B'};
border-radius: 5px;
margin-left: ${({book})=> book && 'auto'};
`


