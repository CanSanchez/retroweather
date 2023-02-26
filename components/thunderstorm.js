//create a rain component

import React from 'react'
import Image from 'next/image'
import styles from '../styles/WeatherCard.module.css'

//create a random number function between 1 and 100

const randomNum = () => {
    return Math.floor(Math.random() * 100);
}

//create a random time function between 1 and 30

const randomTime = () => {
    return Math.floor(Math.random() * 30);
}

const randomSize = () => {
    return Math.floor(Math.random() * (30 - 10 + 5) + 10);
}

//create a random lightning size function between 100 to 500
const randomLightningSize = () => {
    return Math.floor(Math.random() * (500 - 100 + 5) + 100);
}

export default function Thunderstorm() {
    return (
        <div className={styles.rain}>
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
            {[...Array(400)].map((e, i) => {
                return (
                    <Image
                        key={i}
                        className={styles.raindrop}
                        style={{animationDelay: `${randomTime()}s`, left: `${randomNum()}vw`}}
                        src="/icons/rain.svg"
                        alt="raindrop"
                        width={randomSize()}
                        height={randomSize()}
                        priority
                    />
                )
            })}
             {[...Array(3)].map((e, i) => {
                return (
                    <Image
                        key={i}
                        className={styles.lightning}
                        style={{animationDelay: `${randomTime()}s`, left: `${randomNum()-10}vw`, top: `${randomSize()}vh`}}
                        src="/icons/thunder.svg"
                        alt="lightning"
                        width={randomLightningSize()}
                        height={randomLightningSize()}
                        priority
                    />
                )
            })}
        </div>
    )
}

