import React from 'react'
import './Banner.css'
function Banner() {
    return (
        <div  className='banner'>
        
    
        <div className='content'>

        <h1 className='title'>Movie Name</h1>

            <div className='banner_buttons'>
                <button className='button'> Play </button>
                <button className='button'>My list </button>

            </div>
            <h1 className='description'> An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain. </h1>
        </div>

        <div className="fade_bottom">


        </div>


            
        </div>
    )
}

export default Banner
