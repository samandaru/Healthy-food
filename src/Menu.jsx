import React, { Component } from 'react';
import { Category, Container, Tittle ,Card , Narx, Bottom,Star} from './MenuStyle';
import burger from './img/burger.png';
import salads from './img/salads.png';
import egg from './img/egg.png';
import grill from './img/grill.png';
import melba from './img/melba.png';
import delmonic from './img/delmonic.png';
import star2 from './img/star2.png';
import star3 from './img/star3.png';
import star4 from './img/star4.png';
import star5 from './img/star5.png';


export default class Menu extends Component {
    render() {
        return (
            <Container>
                <Tittle>
                    <Tittle.Menu>Menu</Tittle.Menu>
                    <Tittle.Text>Food Full of treaty Love</Tittle.Text>
                    <Tittle.Dis>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, </Tittle.Dis>
                </Tittle>
                <Category>
                    <Category.Up>
                        <Card>
                            <Card.Rasm src={grill} alt='grill.png'/>
                            <Card.Name>
                                <Narx>Vegie Muffen</Narx>
                                <Narx>16$</Narx>
                            </Card.Name>
                            <Card.Dis>There are many things are needed to start the Fast Food Business.</Card.Dis>
                            <Card.Bot>
                                <Bottom>+</Bottom>
                                <Star src={star4} alt='star'/>
                            </Card.Bot>
                        </Card>
                        <Card>
                            <Card.Rasm src={salads} alt='salads.png'/>
                            <Card.Name>
                                <Narx>Salads</Narx>
                                <Narx>12$</Narx>
                            </Card.Name>
                            <Card.Dis>There are many things are needed to start the Fast Food Business.</Card.Dis>
                            <Card.Bot>
                                <Bottom>+</Bottom>
                                <Star src={star5} alt='star'/>
                            </Card.Bot>
                        </Card>
                        <Card>
                            <Card.Rasm src={burger} alt='burger.png'/>
                            <Card.Name>
                                <Narx>Burger</Narx>
                                <Narx>10$</Narx>
                            </Card.Name>
                            <Card.Dis>There are many things are needed to start the Fast Food Business.</Card.Dis>
                            <Card.Bot>
                                <Bottom>+</Bottom>
                                <Star src={star3} alt='star'/>
                            </Card.Bot>
                        </Card>
                    </Category.Up>
                    <Category.Down>
                        <Card>
                            <Card.Rasm src={delmonic} alt='delmonic.png'/>
                            <Card.Name>
                                <Narx>Delmonico Steak dish</Narx>
                                <Narx>14$</Narx>
                            </Card.Name>
                            <Card.Dis>There are many things are needed to start the Fast Food Business.</Card.Dis>
                            <Card.Bot>
                                <Bottom>+</Bottom>
                                <Star src={star2} alt='star'/>
                            </Card.Bot>
                        </Card>
                        <Card>
                            <Card.Rasm src={egg} alt='egg.png'/>
                            <Card.Name>
                                <Narx>Egg Masala</Narx> 
                                <Narx>9$</Narx>
                            </Card.Name>
                            <Card.Dis>There are many things are needed to start the Fast Food Business.</Card.Dis>
                            <Card.Bot>
                                <Bottom>+</Bottom>
                                <Star src={star4} alt='star'/>
                            </Card.Bot>
                        </Card>
                        <Card>
                            <Card.Rasm src={melba} alt='melba.png'/>
                            <Card.Name>
                                <Narx>Peach Melba dish</Narx>
                                <Narx>15$</Narx>
                            </Card.Name>
                            <Card.Dis>There are many things are needed to start the Fast Food Business.</Card.Dis>
                            <Card.Bot>
                                <Bottom>+</Bottom>
                                <Star src={star3} alt='star'/>
                            </Card.Bot>
                        </Card>
                    </Category.Down>
                    <Category.Bot>Learn More</Category.Bot>
                </Category>

            </Container>
        )
    }
}
