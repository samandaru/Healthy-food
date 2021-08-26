import React, { Component } from 'react'
import { Container, TexDis,Profil } from './MakingStyle'
import { Title ,} from './TakeAwayStyle';
import { Star ,} from './MenuStyle';
import star4 from './img/star4.png';
import member from './img/member.png';



export default class MakingFood extends Component {
    render() {
        return (
            <Container>
                <Title.Name>Testimonial</Title.Name>
                <Title.Text>Making Food great again and again</Title.Text>
                <TexDis>You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage <br></br>Customers, Effective Product catlogues etc to make your.</TexDis>
                <Profil src={member} alt='member'/>
                <TexDis>You need not only Just Food Stalls with Persons but also specialized<br></br> equipment, Skills to manage Customers, Effective Product catlogues<br></br> etc to make your.</TexDis>
                <Star style={{margin:'20px 0 32px 0'}} src={star4} alt='star'/>
                <TexDis >Augusta W. Reynoso</TexDis>
                <TexDis >UI&UX DeSIGNER</TexDis>


            </Container>
        )
    }
}
