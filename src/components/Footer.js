import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa"
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'

const Styles = styled.div`
    .container {
        position: sticky;
        bottom: 0;
        max-width: none;
        width: 100%;
    }
`

export const Footer = () => (
   
    <Styles>
        <Container className="text-center" >
           <a href="https://github.com/DhavalKotak/"><FaGithub color="white" size="2.5rem"/></a>&emsp;
           <a href="https://www.linkedin.com/in/dhaval-kotak-a1795b188/"><FaLinkedin color="white" size="2.5rem"/></a>&emsp;
           <a href="mailto:kotakdhaval01@gmail.com"><FaEnvelope color="white" size="2.5rem"/></a>
       </Container> 
    </Styles>
)