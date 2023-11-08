import { React, useState } from 'react'
import NavBarrr from './NavBarrr'
import Cardsss from './Cardsss'
export default function MainPage() {
    const [NightMode, setNightMode] = useState({
        backgroundtheme: 'white',
        textcolor: 'black'
    })
    const handleTheme = (theme) => {
        if (theme !== true)
            setNightMode({
                backgroundtheme: '#1f1f1f',
                textcolor: 'wheat'
            })
        else {
            setNightMode({
                backgroundtheme: 'white',
                textcolor: 'black'
            })
        }
    }
    return (
        <div>
            <NavBarrr handleTheme={handleTheme}  />
            <Cardsss toggleTheme={NightMode.backgroundtheme} toggleTextColor={NightMode.textcolor} />
        </div>
    )
}