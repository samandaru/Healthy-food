import React, { Component } from 'react';
import { Container , Title , FoodItem, Item} from './FeaturesStyle';
import house from './img/house.png';
import delivery from './img/delivery.png';
import smile from './img/smile.png';

export default class Features extends Component {

    render() {
        return (
            <Container>
                <Title>
                    <Title.Title1>Features</Title.Title1>
                    <Title.Title2>Food with a New Passion</Title.Title2>
                </Title>
               <FoodItem>
                   <Item>
                       <Item.Rasm src={house} alt='house.png'/>
                       <Item.Title>Quality Food</Item.Title>
                       <Item.Text>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</Item.Text>
                   </Item>
                   <Item>
                   <Item.Rasm src={delivery} alt='delivery.png'/>
                       <Item.Title>Food Delivery</Item.Title>
                       <Item.Text>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</Item.Text>
                   </Item>
                   <Item>
                   <Item.Rasm src={smile} alt='smile.png'/>
                       <Item.Title>Super Taste</Item.Title>
                       <Item.Text>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</Item.Text>
                   </Item>
               </FoodItem>
            </Container>
        )
    }
}
