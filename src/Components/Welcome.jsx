import React from 'react'
import '../Styles/Welcome.css'
import CommonButtons from './CommonButtons'
const Welcome = () => {
    return (
        <>
            <div className='Welcomepage'>
                <h1 className='h1class'><strong >Welcome</strong>
                    <strong> to the </strong>
                    <strong> Gamers </strong>
                    <strong> Hub</strong>
                </h1>
                <div className="Welcomepageitems">
                    <p className='p1'> Find any game you want</p>
                    <p className='p1'> Download All the Games for free</p>
                </div>
                <CommonButtons title='Browse' navigateTo='/home' />
            </div>
        </>
    )
}
export default Welcome