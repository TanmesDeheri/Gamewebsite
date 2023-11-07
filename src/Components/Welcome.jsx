import React from 'react'
import '../Styles/Welcome.css'
import CommonButtons from './CommonButtons'
const Welcome=()=> {
    return (
        <>
            <div className='Welcomepage'>
                <h1>Welcome to the GamersHub</h1>
                <div className="Welcomepageitems">
                    <p>Find any game you want</p>
                    <p>Download All the Games for free</p>
                </div>
                <CommonButtons title='Browse'/>
            </div>
        </>
    )
}
export default Welcome