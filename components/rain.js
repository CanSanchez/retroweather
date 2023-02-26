import React from 'react'
import Image from 'next/image'
import styles from '../styles/WeatherCard.module.css'

//create a random number function for positioning
const randomNum = () => {
    return Math.floor(Math.random() * 100);
}

//create a random time function between 0 and 30 for delay
const randomTime = () => {
    return Math.floor(Math.random() * 30);
}

//create a random size function between 10 and 30
const randomSize = () => {
    return Math.floor(Math.random() * (30 - 10 + 5) + 10);
}

//creates a raining effect
export default function Rain() {
    return (
        <div className={styles.rain}>
            {[...Array(400)].map((e, i) => {
                return (
                    <Image
                        key={i+'rain'}
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
        </div>
    )
}

