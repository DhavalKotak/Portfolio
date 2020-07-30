import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import user from './assets/user.png'
import reaction from './assets/reaction.png'
import target from './assets/target.png'
import bird from './assets/bird.png'
import styled from 'styled-components'
//import { CardGroup } from 'react-bootstrap';

const Styled = styled.div`
    .card{
        background: linear-gradient(to bottom right, black 40% ,rgb(16,0,138) 39%);
        border: 1px solid rgba(255,255,255);
        color: white;
    }
    h1{
        color: white;
        text-align: center;
    }
`

export const Projects = () => {
    return (
      <React.Fragment>  
        <Styled>
            <h1>Projects</h1>
            <CardDeck>
                <Card>
                    <Card.Body>
                        <Card.Title><img src={user} alt="img"/> Portfolio</Card.Title>
                        <Card.Text>
                            My portfolio website is a Single Page web application made by using React framework
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button href="https://github.com/DhavalKotak/dhavalkotak.github.io" variant="outline-primary">{'</>'}Source</Button>&nbsp;
                        <Button href="https://dhavalkotak.github.io" variant="outline-danger">Live Demo</Button> 
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title><img src={reaction} alt="img"/> Reaction Test</Card.Title>
                        <Card.Text>
                            A web application to measure your reaction time. Made by using JavaScript
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button href="https://github.com/DhavalKotak/Reaction-Test" variant="outline-primary">{'</>'}Source</Button>&nbsp; 
                        <Button href="https://dhavalkotak.github.io/Reaction-Test" variant="outline-danger">Live Demo</Button> 
                    </Card.Footer>
                </Card>
            </CardDeck><br/>
            <CardDeck>
            <Card>
                <Card.Body>
                    <Card.Title><img src={target} alt="img"/> Aim Trainer</Card.Title>
                    <Card.Text>
                        A simple single player game to practice your aim using by shooting random tagets appearing on the screen. Made with Javascript
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button href="https://github.com/DhavalKotak/Aim-Trainer" variant="outline-primary">{'</>'}Source</Button>&nbsp;
                    <Button href="https://dhavalkotak.github.io/Aim-Trainer/" variant="outline-danger">Live Demo</Button> 
                </Card.Footer>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title><img src={bird} alt="img"/> Flappy Bird</Card.Title>
                    <Card.Text>
                        A Web Application on which you can play Flappy Bird game. Made by using Html and vanilla javascript
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button href="https://github.com/DhavalKotak/Flappy-Bird" variant="outline-primary">{'</>'}Source</Button>&nbsp;
                    <Button href="https://dhavalkotak.github.io/Flappy-Bird/" variant="outline-danger">Live Demo</Button> 
                </Card.Footer>
            </Card>
        </CardDeck><br/>
    </Styled>
  </React.Fragment>
    );
}
