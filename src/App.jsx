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

function App() {

  return (
    <>
      <div className="container">
        <div className="input-container">
          <input type="text" className='cityInput' placeholder='Search City' />
          <div className='search-icon'>
            <img src={searchIcon} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
