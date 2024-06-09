import SearchBox from './searchBoc';
import InfoBox from './infoBox';
import { useState } from 'react';
import './weatherApp.css'

export default function WeatherApp(){
    const [weatherInfo,setweatherInfo]=useState({
        city:"kathmandu",
        feelsLike: 26.12,
        humidity: 73,
        max_temp: 26.12,
        min_temp: 26.12,
        temp: 26.12,
        weather:"cloudy",
      });

      let updateInfo =(newinfo)=>{
        setweatherInfo(newinfo)
      };
    return (
        <div className='main'  >
            <SearchBox updateInfo={updateInfo} />   { /*  passing updateInfo function as probe */}
            <InfoBox info={weatherInfo}/>
            
        </div>
    )
}