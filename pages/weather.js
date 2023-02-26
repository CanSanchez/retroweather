import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Weather.module.css'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import WeatherCard from '@/components/weathercard'
import ArrowButton from '@/components/arrowbutton'

export default function WeatherPage() {

    const router = useRouter();

    //dynamically get location from query string
    const location = router.query.location || "Vancouver";
    console.log(location);

    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;
    const units = "metric";

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${units}&appid=${apiKey}`;

    const [data, setData] = useState();
    const grabWeather = useRef(false);
    console.log('data here');
    console.log(data);

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
            console.log(now);
            //get day of week based on date
            var day = now.getDay();
            console.log(day);
            switch(day) {
                case 0:
                    day = 'Sunday';
                    break;
                case 1:
                    day = 'Monday';
                    break;
                case 2:
                    day = 'Tuesday';
                    break;
                case 3:
                    day = 'Wednesday';
                    break;
                case 4:
                    day = 'Thursday';
                    break;
                case 5:
                    day = 'Friday';
                    break;
                case 6:
                    day = 'Saturday';
                    break;
            }
            
            //return json object
            return {
                day: day,
                month: month,
                date: weather.dt_txt.substr(8,2),
                temp: weather.main.temp.toFixed(1),
                weather: weather.weather[0].main,
                icon: icon
            }
        }
    })

        console.log(arrayOfDays);
        setData(weatherData.filter((weather) => {
            return weather !== undefined;
            }));
        setActiveIndex(0);
        console.log("data");
        console.log(weatherData.filter((weather) => {
            return weather !== undefined;
        }));
    }

    useEffect(() => {

        fetchWeather();

    }, []);

    const current =  new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    console.log(date);

    const [activeIndex, setActiveIndex] = useState(0);
  
    const handlePrevClick = () => {
      setActiveIndex((activeIndex - 1 + data.length) % data.length);
        //if activeIndex is 0, then set it to 4
        if(activeIndex === 0) {
            setActiveIndex(data.length - 1);
        }
    };
  
    const handleNextClick = () => {
      setActiveIndex((activeIndex + 1) % data.length);
      //if activeIndex is 4, then set it to 0
    };

  return (
    <>
      <Head>
        <title>Retro Weather App</title>
        <meta name="description" content="Retro Weather app gives 5-day weather forecast in pixel art" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon-retroweather.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
            <div className={styles.buttonContainer}>
                <ArrowButton
                    icon='/icons/prevarrow.svg'
                    onClick={handlePrevClick}
                    name='prev'
                    style={{
                        position: 'fixed',
                        left: '5em',
                        top: '50%'
                    }}
                />
                <ArrowButton
                    icon='/icons/nextarrow.svg'
                    onClick={handleNextClick}
                    name='next'
                    style={{
                        position: 'fixed',
                        right: '5em',
                        top: '50%'
                    }}
                />
            </div>
        {data && data.map((weather, index) => {

            if (weather !== undefined) {
                 return (
                    // <div key={index}>
                    //     <Image
                    //         src={weather.icon}
                    //         alt={weather.icon}
                    //         width={180}
                    //         height={180}
                    //         priority
                    //     />
                    //     <p>{weather.day}</p>
                    //     <p>{weather.month} {weather.date}</p>
                    //     <p>{weather.temp}°C</p>
                    //     <p>{weather.weather}</p>
                    // </div>
                    <WeatherCard
                        isActive={activeIndex === index}
                        key={index}
                        icon={weather.icon}
                        day={weather.day}
                        month={weather.month}
                        date={weather.date}
                        temp={weather.temp}
                        weather={weather.weather}
                    />
                 )
            }
        })}
        </div>
        <div className={styles.foreGround}>
          <Image 
            src="/background/foreground.svg" 
            alt="Foreground" 
            width={1540} height={180} priority 
            id={styles.ground}
          />
        </div>
        <div className={styles.backGround}>
          <Image
            src="/background/BGgreen.svg"
            alt="Background"
            width={1540}
            height={180}
            priority
            id={styles.bgGreen}
          />
        </div>
        <div className={styles.backGround}>
          <Image
            src="/background/BGblue.svg"
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
