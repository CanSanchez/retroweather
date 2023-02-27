//create weather card component
import React from 'react'
import Image from 'next/image'
import styles from '../styles/WeatherCard.module.css'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Rain from './rain'
import Snow from './snow'
import Thunderstorm from './thunderstorm'
import Drizzle from './drizzle'
import Clouds from './clouds'
import Mist from './mist'

export default function WeatherCard(props) {

   const router = useRouter()
   const location = router.query.location || "Vancouver"

    return (
        <div key={`${props.index}wc`} className={styles.WeatherCard} style={props.isActive? {display: 'flex'}:{display: 'none'}}>
            {props.weather === "Clouds" &&
                <>
                    <Clouds />
                </>
            }
            {props.weather === "Clear" &&
                <>
                    <Image
                        className={styles.clear}
                        src="/icons/sun.svg"
                        alt="sun"
                        width={180}
                        height={180}
                        priority
                    />
                </>
            }
            {props.weather === "Rain" &&
                <>
                    <Rain />
                </>
            }
            {props.weather === "Drizzle" &&
                <>
                    <Drizzle />
                </>
            }
            {props.weather === "Snow" &&
                <>
                    <Snow />
                </>
            }
            {props.weather === "Thunderstorm" &&
                <>
                    <Thunderstorm />
                </>
            }
            {props.weather === "Atmosphere" &&
                <>
                    <Mist />
                </>
            }
            <div className={styles.container}>
                <h1>{location}</h1>
                <h2>Weather Forecast</h2>

                <p>{props.day}</p>
                <p>{props.month} {props.date}</p>
                <p>{props.temp}°C</p>
                <p>{props.weather}</p>
            </div>
        </div>
    )
}
