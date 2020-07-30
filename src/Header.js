import React from 'react';
import { Jumbotron as Jumbo } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .jumbo {
    background-color: rgba(0,0,0,0);
    color: #efefef;
    font-size: 1.4rem; //smaller the fonts
    height: 100%;
    position: relative;
  }
`;

export const Header = () => (
  <Styles>
    <Jumbo fluid className="jumbo text-center">
      <h1 style={{fontSize: '3.6rem'}}>Hi, I'm Dhaval Kotak</h1><br/>
      <p>I'm just a super curious guy who likes to self <br/>learn web development through <br/>research and practice. I love designing<br/> websites and I'm looking for more<br/> opportunities to work in freelance basis.</p>
    </Jumbo>
  </Styles>
)