import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './components/sidebar';
import List from './components/list';
//import Product from "./components/product";

const Wrapper = styled.div`
  widht: 100%;
  min-height: 100vh;
  display: flex;
`;

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <Sidebar />
        <Route exact path="/" component={List} />
      </Wrapper>
    );
  }
}

/*
<Wrapper>
  <Route path="/products" component={Product} />
</Wrapper>
*/
