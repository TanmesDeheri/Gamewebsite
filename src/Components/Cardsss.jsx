
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { React, useState, useEffect } from 'react'
import '../Styles/Cards.css'
import apiClient from '../Services/apiClient';

export default function Cardsss(props) {
    const [toggleCardTheme, settoggleCardTheme] = useState(null)
    const [Games, setGames] = useState([])
    const [Error, setError] = useState(null)
    useEffect(() => {
        document.body.style.backgroundColor = props.toggleTheme
        document.body.style.color = props.toggleTextColor
        if (props.toggleTheme === '#1f1f1f')
            settoggleCardTheme('cards-mystyledark')
        else
            settoggleCardTheme('cards-mystylelight')
    }, [props.toggleTheme,props.toggleTextColor])
    useEffect(() => {
     apiClient.get('/games').then(res=>setGames(res.data.results)).catch(err=>setError(err.message))
    }, [])
    

    return (
        <>
        {Error && <h2>{Error}</h2>}
        <div className='cards'>
            <Row xs={1} md={4} className="g-2">
                {Games.map((game) => (
                    <Col key={game.id}>
                        <Card className={toggleCardTheme}>
                            <Card.Img variant="top" src={game.background_image} style={{height:'12em'}} />
                            <Card.Body>
                                <Card.Title>{game.name}</Card.Title>
                                <Card.Text>Released On:
                                    {game.released}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
        </>
        
    )
}