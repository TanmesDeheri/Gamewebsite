import React from 'react'
import '../Styles/Welcome.css'
const Welcome=()=> {
    return (
        <>
            <div className='Welcomepage'>
                <h1>Welcome to the GamersHub</h1>
                <div className="Welcomepageitems">
                    <p>Find any game you want</p>
                    <p>Download All the Games for free</p>
                </div>
                <button className='btn success'>Browse</button>
            </div>
        </>
    )
}
export default Welcome