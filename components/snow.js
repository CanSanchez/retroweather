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

//create a random size 
const randomSize = () => {
    return Math.floor(Math.random() * (20 - 10 + 5) + 10);
}

//create a raining effect
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

