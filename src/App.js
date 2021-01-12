import {useState, useEffect} from 'react';
import Input from "./Components/Input";
import Weather from "./Components/Weather";
import axios from 'axios'
import './Components/Sass/main-page.scss'

function App() {

  const [weather, setWeather] = useState('');
  const [city , setCity ] = useState('kyiv')
  const [trigger , setTigger] = useState(true);

  const callApi = async () => {
    const key = `bce930ee274714a6b37226576e6ac625 `
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
    const data = await fetch(url)
    const call = await data.json()
    if(call.cod == 404) {
      setCity('kyiv')
      
    }else {
      setWeather(call)
    }
  }

useEffect(() => {
  
  callApi()
  
}, [trigger])

console.log(weather);

  return (
    <div className="main-container">
      <Input setCity={setCity} setTigger={setTigger} trigger={trigger} />
      {weather.name  ?  <Weather weather={weather} /> : `No result` }  
    </div>
  );
}

export default App;
