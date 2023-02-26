import React from 'react'
import Image from 'next/image'
import styles from '../styles/WeatherCard.module.css'

//creates a random number function between 0 and 100 for the snowflake position
const randomNum = () => {
    return Math.floor(Math.random() * 100);
}

//creates a random time delay function between 0 and 30
const randomTime = () => {
    return Math.floor(Math.random() * 30);
}

//creates a random size between 10 and 20
const randomSize = () => {
    return Math.floor(Math.random() * (20 - 10 + 5) + 10);
}

//create a snowing effect
export default function Snow() {
    return (
        <div className={styles.snow}>
            {[...Array(300)].map((e, i) => {
                return (
                    <Image
                        key={`${i}snow`}
                        className={styles.snowflake}
                        style={{animationDelay: `${randomTime()}s`, left: `${randomNum()}vw`}}
                        src="/icons/snow.svg"
                        alt="snowflake"
                        width={randomSize()}
                        height={randomSize()}
                        priority
                    />
                )
            })}
        </div>
    )
}

