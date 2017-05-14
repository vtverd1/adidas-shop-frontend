import React from 'react';
import styled from 'styled-components';
import Filter from './filter';
import Item from './item';
import { Grid, Row } from 'react-flexbox-grid';
import { Col } from 'react-flexbox-grid';

export const CustomCol = styled(Col)`

`;

const Wrapper = styled.div`
  height: 100vh;
  overflow: auto;
  flex-grow: 2;
`;

const CustomGrid = styled(Grid)`
  padding: 11px 24px 11px 24px;
`;

const products = [
  {
    key: 1,
    price: '$170',
    sale: true,
    img: require('./../../assets/img/shoes-1.jpg'),
  },

  {
    key: 2,
    price: '$240.99',
    sale: false,
    img: require('./../../assets/img/shoes-2.jpg'),
  },

  {
    key: 3,
    price: '$1024',
    sale: true,
    img: require('./../../assets/img/shoes-3.jpg'),
  },

  {
    key: 4,
    price: '$170',
    sale: false,
    img: require('./../../assets/img/shoes-1.jpg'),
  },

  {
    key: 5,
    price: '$170',
    sale: true,
    img: require('./../../assets/img/shoes-2.jpg'),
  },

  {
    key: 6,
    price: '$170',
    sale: false,
    img: require('./../../assets/img/shoes-3.jpg'),
  },

  {
    key: 7,
    price: '$350',
    sale: false,
    img: require('./../../assets/img/shoes-1.jpg'),
  },

  {
    key: 8,
    price: '$400',
    sale: true,
    img: require('./../../assets/img/shoes-2.jpg'),
  },

  {
    key: 9,
    price: '$450',
    sale: false,
    img: require('./../../assets/img/shoes-3.jpg'),
  },

  {
    key: 10,
    price: '$320',
    sale: false,
    img: require('./../../assets/img/shoes-1.jpg'),
  },

  {
    key: 11,
    price: '$340',
    sale: true,
    img: require('./../../assets/img/shoes-2.jpg'),
  },

  {
    key: 12,
    price: '$800',
    sale: false,
    img: require('./../../assets/img/shoes-3.jpg'),
  },
];

export default class List extends React.Component {
  render() {
    return (
      <Wrapper>
        <Filter />
        <CustomGrid fluid>
          <Row>
            {products.map(product => (
              <CustomCol xs={12} sm={6} md={4} lg={3} key={product.key}>
                <Item {...product} />
              </CustomCol>
            ))}
          </Row>
        </CustomGrid>
      </Wrapper>
    );
  }
}
