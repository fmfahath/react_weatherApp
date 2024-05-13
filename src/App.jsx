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

const WeatherDetails = ({ temp = "20", city = "Colombo", country = "Sri Lanka", lati = "112.143.56.78",
  long = "112.143.56.78", windSpeed = "120", humidity = "80" }) => {
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

  return (
    <>
      <div className="container">
        <div className="input-container">
          <input type="text" className='cityInput' placeholder='Search City' />
          <div className='search-icon'>
            <img src={searchIcon} alt="search-con" />
          </div>
        </div>

        <WeatherDetails />
      </div>

    </>
  )
}

export default App
