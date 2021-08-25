import React, { Component } from 'react';
import {Wrapper} from './style' ;
import Navbar from './Navbar.jsx';
import Body from './Body.jsx';
import Features from './Features.jsx';
import AboutUs from './AboutUs.jsx';
import Menu from './Menu.jsx';

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar/>
        <Body/>
        <Features/>
        <AboutUs/>
        <Menu></Menu>
      </Wrapper>
    )
  }
}
