
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { React, useState, useEffect } from 'react'
import '../Styles/Cards.css'

export default function Cardsss(props) {
    const [toggleCardTheme, settoggleCardTheme] = useState(null)
    useEffect(() => {
        document.body.style.backgroundColor = props.toggleTheme
        document.body.style.color = props.toggleTextColor
        if (props.toggleTheme === '#1f1f1f')
            settoggleCardTheme('cards-mystyledark')
        else
            settoggleCardTheme('cards-mystylelight')
    }, [props.toggleTheme,props.toggleTextColor])

    return (
        <div>
            <Row xs={1} md={4} className="g-2">
                {Array.from({ length: 40 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card className={toggleCardTheme}>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}