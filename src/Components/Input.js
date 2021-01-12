import React from 'react'

const Input = ({setCity, setTigger, trigger}) => {

    const cityHandler = (city) => {

        setCity(city)
        setTigger(!trigger)
        console.log(city);
    }
    
    return (
    <div className="input-container">
        <input onChange={(e)=> cityHandler(e.target.value)} type="search" name="" id="" placeholder='Enter a city'/>
    </div>
    )
}

export default Input
