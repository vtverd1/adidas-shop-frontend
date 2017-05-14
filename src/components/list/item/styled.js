import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  border: 8px solid #f3f3f3;
  display: flex;
  flex-direction: column;
`;

export const Cover = styled.div`
  flex-grow: 2;
  min-height: 100px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  display: block;
  text-align: center;
  padding: 25px;
  border-top: 8px solid #f3f3f3;
  color: #0d0d0d;
  ${p => p.sale && 'color: #ffffff; background-image: linear-gradient(107deg, #0c09bf, #966dd8);'}
  font-family: "Avenir Next";
  font-size: 30px;
  font-weight: 700;
`;

export const Label = styled.span`
  position: absolute;
  top: 8px;
  right: 8px;
  color: #ffffff;
  font-family: "Avenir Next";
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 7px 20px;
  background-color: #ff5c5c;
`;

export const Image = styled.img`
  width: 100%;
`;
