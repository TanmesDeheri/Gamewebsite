import React from 'react'
import NavBarrr from './NavBarrr'
import Cardsss from './Cardsss'
export default function MainPage() {
    return (
        <div>
            <NavBarrr/>
            <Cardsss toggleTheme='#1f1f1f' toggleTextColor='white'/>
        </div>
    )
}