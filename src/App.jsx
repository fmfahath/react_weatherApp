import './App.css'
import searchIcon from './assets/search.png';
import clearIcon from './assets/clear.png';
import cloudyIcon from './assets/cloudy.png';
import drizzleIcon from './assets/drizzle.png';
import humidityIcon from './assets/humidity.png';
import rainyIcon from './assets/rainy.png';
import snowIcon from './assets/snow.png';
import sunnyIcon from './assets/sunny.png';
import windyIcon from './assets/windy.png';
import { useState } from 'react';

const WeatherDetails = ({ temp, city, country, lati, long, windSpeed, humidity }) => {
  return (
    <>
      <div className='weather-details'>
        <div className="weather-image">
          <img src={clearIcon} alt="wetaher-img" />
        </div>
        <div className="weather-temp">{temp}°C</div>
        <div className="weather-city">{city}</div>
        <div className="weather-country">{country}</div>
        <div className="weather-cord">
          <div className="latitude">
            <span>Latitude</span>
            <span className='lat'> {lati}</span>
          </div>
          <div className="longtitude">
            <span>Longtitude</span>
            <span className='long'> {long}</span>
          </div>
        </div>
        <div className="data-container">
          <div className="wind-data">
            <img src={windyIcon} alt="windSpeed" />
            <div className='wind-speed'>
              <span className='data'>{windSpeed} Kmph</span>
              <span>Speed</span>
            </div>
          </div>
          <div className="humidity-data">
            <img src={humidityIcon} alt="humidity" />
            <div className='humidity'>
              <span className='data'>{humidity}%</span>
              <span>Humidity</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

function App() {

  const apiKey = "04139978167fb2218b0159a7fae7746c";

  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [icon, setSetIcon] = useState(clearIcon);
  const [temp, setTemp] = useState("");
  const [city, setCity] = useState("Colombo");
  const [country, setCountry] = useState("");
  const [lati, setLati] = useState("");
  const [long, setLong] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [humidity, setHumidity] = useState("");
  const [error, setError] = useState(false);

  const handleInput = (e) => {
    setUserInput(e.target.value);
  }

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      search();
    }
  }

  const search = async () => {
    setLoading(true);

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}&units=Metric`;
    console.log('api url: ', url);

    try {
      let res = await fetch(url);
      const data = await res.json();
      console.log("data: ", data)

      if (data.cod === "404") {
        console.log("City Not Found");
        setError(true);
        setLoading(false);
        return;
      }

      setTemp(Math.floor(data.main.temp));
      setCity(data.name);
      setCountry(data.sys.country);
      setLati(data.coord.lat);
      setLong(data.coord.lon);
      setWindSpeed(data.wind.speed);
      setHumidity(data.main.humidity);


    } catch (error) {
      console.log("API Fetch Error: ", error.message);
    } finally {
      setLoading(false)
    }
  }





  return (
    <>
      <div className="container">
        <div className="input-container">
          <input type="text" className='cityInput' placeholder='Search City' onChange={handleInput} onKeyDown={handleKeyDown} />
          <div className='search-icon'>
            <img src={searchIcon} alt="search-con" onClick={() => search()} />
          </div>
        </div>

        <WeatherDetails temp={temp} city={city} country={country} lati={lati} long={long} windSpeed={windSpeed} humidity={humidity} />
      </div>

    </>
  )
}

export default App
