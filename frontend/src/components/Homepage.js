import React from 'react'
import Binoculars from '../images/Binoculars.png'

const Homepage = () => {
    const divStyle = {
		backgroundImage: 'url(https://imgur.com/AdTRmEs.png)',
        height: '500px'
	};
    return (
        <div>

            <div 
            className='bg-cover bg-center w-full h-full px-full py-6 sm:px-0'
            style={divStyle}/>
            <div className='grid grid-flow-row md:grid-cols-2 md:grid-rows-2 gap-4 ml-48'>
                <img src={Binoculars} alt="bino" />
            </div>        
        </div>
    )
}

export default Homepage
