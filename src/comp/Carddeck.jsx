import React from 'react'
import Card from './card'

const Carddeck = () => {
    return (
        
            <div className="container">
                <div className="card-deck mb-3 text-center d-flex justify-content-evenly w-100" >
                    <Card name="Free" price="0" users="10" giga="10" btn="Sign up for free" support="Email support" btnc="btn-outline-primary"/>
                    <Card name="Pro" price="15" giga="20" users="20" btn="Get started" support="Priority email support" btnc="btn-primary"/>
                    <Card name="Enterprise" price="29" giga="30" users="30" btn="Contact us" support="Phone and email support" btnc="btn-primary"/>
                </div>
                
            </div>
            )
}

            export default Carddeck