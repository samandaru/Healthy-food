import React, { Component } from 'react'
import { Container,Box , Title ,App,Link ,PhoneImg} from './TakeAwayStyle';
import apple from './img/Apple.png';
import google from './img/Google.png';
import phone from './img/Phone.png';

export default class TakeAway extends Component {
    render() {
        return (
            <Container>
                <Box>
                    <Title>
                        <Title.Name>Take Away</Title.Name>
                        <Title.Text>Food Stalls with Persons but  to  Product marketing plane. </Title.Text>
                        <Title.Dis>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipmentwith Persons but also  Just Food Stalls with Persons.</Title.Dis>
                        <App>
                            <App.Apple><Link src={apple} alt='apple'/></App.Apple>
                            <App.Google><Link src={google} alt='google'/></App.Google>
                        </App>
                    </Title>
                    <PhoneImg src={phone} alt='phone'/>
                </Box>
            </Container>
        )
    }
}
