import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

export default function Home() {

  const apiKey = "a83715130f9c2d02acc1f8fa1c3780e3";
  const location = "Vancouver";
  const units = "metric";

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${units}&appid=${apiKey}`;

  const [data, setData] = useState();
  const grabWeather = useRef(false);

  const fetchWeather = async () => {
const response = await axios.get(url);
console.log(response);

console.log(response.data.list);
const arrayOfDays = [];

let weatherData = response.data.list.map((weather, index) => {
    console.log(parseInt(weather.dt_txt.substr(8,2), 10));
    let num = parseInt(weather.dt_txt.substr(8,2), 10);

    if (num !== arrayOfDays.find(element => element === num)) {
    arrayOfDays.push(num);
    console.log("Here")
    console.log(response.data.list[index]);
    var month = '';
    var icon = '';

    if(weather.dt_txt.substr(5,2) === '01') {
        month = 'January';
    } else if(weather.dt_txt.substr(5,2) === '02') {
        month = 'February';
    } else if(weather.dt_txt.substr(5,2) === '03') {
        month = 'March';
    } else if(weather.dt_txt.substr(5,2) === '04') {
        month = 'April';
    } else if(weather.dt_txt.substr(5,2) === '05') {
        month = 'May';
    } else if(weather.dt_txt.substr(5,2) === '06') {
        month = 'June';
    } else if(weather.dt_txt.substr(5,2) === '07') {
        month = 'July';
    } else if(weather.dt_txt.substr(5,2) === '08') {
        month = 'August';
    } else if(weather.dt_txt.substr(5,2) === '09') {
        month = 'September';
    } else if(weather.dt_txt.substr(5,2) === '10') {
        month = 'October';
    } else if(weather.dt_txt.substr(5,2) === '11') {
        month = 'November';
    } else if(weather.dt_txt.substr(5,2) === '12') {
        month = 'December';
    }

    if(weather.weather[0].main === 'Clouds') {
        icon = '/icons/broken-clouds.png';
    } else if(weather.weather[0].main === 'Clear') {
        icon = '/icons/clear-sky.png';
    } else if(weather.weather[0].main === 'Rain') {
        icon = '/icons/rain.png';
    } else if(weather.weather[0].main === 'Snow') {
        icon = '/icons/snow.png';
    } else if(weather.weather[0].main === 'Thunderstorm') {
        icon = '/icons/thunderstorm.png';
    } else if(weather.weather[0].main === 'Drizzle') {
        icon = '/icons/shower-rain.png';
    } else if(weather.weather[0].main === 'Atmosphere') {
        icon = '/icons/mist.png';
    }

    var now = new Date(weather.dt_txt);
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var day = days[now.getDate()];

        return (
            <div key={index}>
            <Image
                src={icon}
                alt={icon}
                width={180}
                height={180}
                priority
            />
            <p>{day}</p>
            <p>{month} {weather.dt_txt.substr(8,2)}</p>
            <p>{weather.main.temp.toFixed(1)}°C</p>
            <p>{weather.weather[0].main}</p>
            </div>
        )
    }
})
    console.log(arrayOfDays);
    setData(weatherData);
  }

  useEffect(() => {
    if (grabWeather.current === true) {
      fetchWeather();
    }
    return () => {
      grabWeather.current = true;
    }
  }, []);

  const current =  new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <>
      <Head>
        <title>Retro Weather App</title>
        <meta name="description" content="Retro Weather app gives 5-day weather forecast in pixel art" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon-retroweather.png" />
      </Head>
      <main className={styles.main}>
          <div className={styles.header}>
            <Image 
              src="/fonts/title.png" 
              alt="Weather Forecast Logo" 
              width={540} height={200} priority 
              id={styles.logo}
              />
          </div>
          <button 
            onClick={fetchWeather}
            className={styles.button}>
            START
          </button>
        <div className={styles.foreGround}>
          <Image 
            src="/background/foreground.png" 
            alt="Foreground" 
            width={1540} height={180} priority 
            id={styles.ground}
          />
        </div>
        <div className={styles.backGround}>
          <Image
            src="/background/backgroundgreen.png"
            alt="Background"
            width={1540}
            height={180}
            priority
            id={styles.bgGreen}
          />
        </div>
        <div className={styles.backGround}>
          <Image
            src="/background/backgroundblue.png"
            alt="Background"
            width={1540}
            height={180}
            priority
            id={styles.bgBlue}
          />
        </div>
      </main>
    </>
  )
}
