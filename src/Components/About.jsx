import Accordion from 'react-bootstrap/Accordion';
import React from 'react'
import '../Styles/About.css'
export default function About(props) {
  document.body.style.backgroundColor = props.toggleTheme
  document.body.style.color = props.toggleTextColor
  return (
    <div className="container">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>About The Developer</Accordion.Header>
          <Accordion.Body>
            Hello my name is Tanmes deheri, I am a self-proclaimed programmer who claims that he knows how to code efficiently, but in reality people throw materialistic objects at me when they review my code. unfortunately i'm not good at cactching error and materialisticobject so both my head my code breaks.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>My Works</Accordion.Header>
          <Accordion.Body>
            well, you are watching one.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>My Experience</Accordion.Header>
          <Accordion.Body>
            "GHANTA !!!!"
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}