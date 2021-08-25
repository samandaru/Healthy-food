import React, { Component } from 'react'
import { ButtonBox, Container ,Content, Description} from './BodyStyle'
import { Button} from './NavbarStyle'
import steak from './img/steak.png'

export default class Body extends Component {
    render() {
        return (
            <Container>
                <Container.Left>
                    <Content>Making time a good time by making food the good food.</Content>
                    <Description>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,</Description>
                    <ButtonBox>
                        <Button bgcolor='#DC780B'>Order Now</Button>
                        <Button color>Food Details</Button>
                    </ButtonBox>
                </Container.Left>
                <Container.Right src={steak} alt='steak'/>
            </Container>
        )
    }
}
