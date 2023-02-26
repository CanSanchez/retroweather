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

export default function WeatherCard(props) {

   const router = useRouter()
   const location = router.query.location

    return (
        <div key={props.index} className={styles.WeatherCard} style={props.isActive? {display: 'flex'}:{display: 'none'}}>
            {/* <Image
                src={props.icon}
                alt={props.icon}
                width={180}
                height={180}
                priority
            /> */}

            {props.weather === "Clouds" &&
            <>
                <Image
                    className={styles.cloudy1}
                    src="/background/cloud1.svg"
                    alt="cloudy"
                    width={180}
                    height={180}
                    priority
                />
                <Image
                    className={styles.cloudy2}
                    src="/background/cloud2.svg"
                    alt="cloudy"
                    width={180}
                    height={180}
                    priority
                />
            </>
            }
            {props.weather === "Clear" &&
            <>
                <Image
                    className={styles.clear}
                    src="/icons/sun.svg"
                    alt="rainy"
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
                <Image
                    className={styles.mist1}
                    src="/icons/mist.svg"
                    alt="mist"
                    width={500}
                    height={500}
                    priority
                />
                <Image
                    className={styles.mist2}
                    src="/icons/mist.svg"
                    alt="mist"
                    width={800}
                    height={800}
                    priority
                />
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
