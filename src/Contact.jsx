import React, { Component } from 'react'
import { Container,Enter } from './ContactStyle'
import { Title ,} from './TakeAwayStyle';
import { Button } from './NavbarStyle';

export default class Contact extends Component {
    render() {
        return (
            <Container>
                    <Title.Name>Contact</Title.Name>
                    <Title.Text>Food Stalls with Persons but also specialized equipment, Skills to manage.</Title.Text> 
                    <Enter>
                        <input placeholder='Enter your messege'></input>
                        <Button small b=''gcolor='#DC780B'>Send</Button>
                    </Enter>
            </Container>
        )
    }
}
