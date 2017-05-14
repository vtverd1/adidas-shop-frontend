import React from 'react';
import { Wrapper, Cover, Image, StyledLink, Label } from './styled';
/* eslint-disable */
export default ({ img, price, sale }) => (
  <Wrapper>
    <Cover>
      <Image src={img} alt="" />
    </Cover>
    <StyledLink to="/product" sale={sale}>{price}</StyledLink>
    {sale && <Label>Sale</Label>}
  </Wrapper>
);
/* eslint-enable */
