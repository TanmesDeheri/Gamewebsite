import { React, useState } from 'react'
import NavBarrr from './NavBarrr'
import Cardsss from './Cardsss'
import {
    Routes,
    Route,
} from "react-router-dom";
export default function MainPage(props) {
    const [NightMode, setNightMode] = useState({
        backgroundtheme: 'white',
        textcolor: 'black'
    })
    const handleTheme = (theme) => {
        const theme1 = !theme
        if (theme1) {
            setNightMode({
                backgroundtheme: '#1f1f1f',
                textcolor: 'wheat'
            })
            console.log(theme1)
            props.sendToController({
                backgroundtheme: '#1f1f1f',
                textcolor: 'wheat'
            })
        }

        else {
            setNightMode({
                backgroundtheme: 'white',
                textcolor: 'black'
            })
            console.log(theme1)
            props.sendToController({
                backgroundtheme: 'white',
                textcolor: 'black'
            })
        }
    }
    return (
        <>
            <NavBarrr handleTheme={handleTheme} />
            <Cardsss toggleTheme={NightMode.backgroundtheme} toggleTextColor={NightMode.textcolor} />
            <Routes>
                <Route exact path='/action' element={<Cardsss toggleTheme={NightMode.backgroundtheme} toggleTextColor={NightMode.textcolor} />} />
                <Route exact path='/indie' element={<Cardsss toggleTheme={NightMode.backgroundtheme} toggleTextColor={NightMode.textcolor} />} />
                <Route exact path='/adventure' element={<Cardsss toggleTheme={NightMode.backgroundtheme} toggleTextColor={NightMode.textcolor} />} />
                <Route exact path='/rpg' element={<Cardsss toggleTheme={NightMode.backgroundtheme} toggleTextColor={NightMode.textcolor} />} />
                <Route exact path='/stratergy' element={<Cardsss toggleTheme={NightMode.backgroundtheme} toggleTextColor={NightMode.textcolor} />} />
                <Route exact path='/shooter' element={<Cardsss toggleTheme={NightMode.backgroundtheme} toggleTextColor={NightMode.textcolor} />} />
                <Route exact path='/casual' element={<Cardsss toggleTheme={NightMode.backgroundtheme} toggleTextColor={NightMode.textcolor} />} />
                <Route exact path='/simulation' element={<Cardsss toggleTheme={NightMode.backgroundtheme} toggleTextColor={NightMode.textcolor} />} />
                <Route exact path='/puzzle' element={<Cardsss toggleTheme={NightMode.backgroundtheme} toggleTextColor={NightMode.textcolor} />} />
                <Route exact path='/arcade' element={<Cardsss toggleTheme={NightMode.backgroundtheme} toggleTextColor={NightMode.textcolor} />} />
                <Route exact path='/platformer' element={<Cardsss toggleTheme={NightMode.backgroundtheme} toggleTextColor={NightMode.textcolor} />} />
                <Route exact path='/multiplayer' element={<Cardsss toggleTheme={NightMode.backgroundtheme} toggleTextColor={NightMode.textcolor} />} />
                <Route exact path='/racing' element={<Cardsss toggleTheme={NightMode.backgroundtheme} toggleTextColor={NightMode.textcolor} />} />
                <Route exact path='/sports' element={<Cardsss toggleTheme={NightMode.backgroundtheme} toggleTextColor={NightMode.textcolor} />} />
                <Route exact path='/fighting' element={<Cardsss toggleTheme={NightMode.backgroundtheme} toggleTextColor={NightMode.textcolor} />} />
                <Route exact path='/family' element={<Cardsss toggleTheme={NightMode.backgroundtheme} toggleTextColor={NightMode.textcolor} />} />
                <Route exact path='/board' element={<Cardsss toggleTheme={NightMode.backgroundtheme} toggleTextColor={NightMode.textcolor} />} />
                <Route exact path='/card' element={<Cardsss toggleTheme={NightMode.backgroundtheme} toggleTextColor={NightMode.textcolor} />} />
            </Routes>
        </>
    )
}