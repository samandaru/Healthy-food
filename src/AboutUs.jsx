import React, { Component } from 'react'
import { AboutText, Container, GirlImg } from './AboutUsStyle'
import Girl from './img/girl.png'
import { Button } from './NavbarStyle'

export default class AboutUs extends Component {
    render() {
        return (
            <Container>
                <GirlImg src={Girl} alt='Girl'/>
                <AboutText>
                    <AboutText.Dis>About us</AboutText.Dis>
                    <AboutText.Title>Food Stalls with Persons but  to  Product marketing plane
catlogues etc to. </AboutText.Title>
                    <AboutText.Text>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also 
equipment  make your marketing plane Effective.</AboutText.Text>
                    <Button small bgcolor='#DC780B'>Read More</Button>
                </AboutText>
            </Container>
        )
    }
}
