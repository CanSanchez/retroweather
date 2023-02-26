import React from 'react'
import Image from 'next/image'
import styles from '../styles/WeatherCard.module.css'

//create a random number function between 0 and 100 for the raindrops position
const randomNum = () => {
    return Math.floor(Math.random() * 100);
}

//creates a random time function between 0 and 20
const randomTime = () => {
    return Math.floor(Math.random() * 20);
}

//creates a random size for the raindrops
const randomSize = () => {
    return Math.floor(Math.random() * (10 - 5 + 5) + 5);
}

//creates a drizzle effect

export default function Drizzle() {
    return (
        <div className={styles.rain}>
            {[...Array(1000)].map((e, i) => {
                return (
                    <Image
                        key={`${i}+drizzle`}
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

