import React from 'react'
import '../Components/Sass/weather.scss'

const Input = ({weather}) => {

    const {name, main} = weather
   
      console.log(weather.weather);
   
    
  
    return (
      
        <div className='weather-container city'>

        <h1 className="city-name">{name}</h1>
        {weather.weather.map(w => <p className="city-description">{w.description}</p>)}
        <h1 className="city-degree">{Math.round(main.temp) + '°C'}</h1>
        {weather.weather.map(w => <img src={`http://openweathermap.org/img/wn/${w.icon}@2x.png`} alt=""/>)}
        </div>
    )
  
}

export default Input
