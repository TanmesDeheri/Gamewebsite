import { React, useState } from 'react'
import MainPage from './MainPage'
import Welcome from './Welcome'
import About from './About'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
const Controller = () => {
  const [dummy, setdummy] = useState({ backgroundtheme: '', textcolor: '' })
  const sendToController = (NightMode) => {
    setdummy({
      backgroundtheme: NightMode.backgroundtheme,
      textcolor: NightMode.textcolor
    });
  }
return (
  <Router>
    <Routes>
      <Route exact path='/' element={<Welcome />} />
      <Route exact path='/home' element={<MainPage sendToController={sendToController} />} />
      <Route exact path="/about" element={<About toggleTheme={dummy.backgroundtheme} toggleTextColor={dummy.textcolor} />} />
    </Routes>
  </Router>
)
}
export default Controller