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

//create a random cloud size function between 200 and 500
const randomCloudSize = () => {
    return Math.floor(Math.random() * (500 - 200 + 5) + 200);
}


export default function Thunderstorm() {
    return (
        <div className={styles.rain}>
            {[...Array(3)].map((e, i) => {
                return (
                    <>
                        <Image
                            key={`${i}+lightning1`}
                            className={styles.cloud1}
                            style={{left: `${randomNum()}vw`, top:`${randomNum()-40}vh`}}
                            src='/background/cloud1.svg'
                            alt="clouds"
                            width={randomCloudSize()}
                            height={randomCloudSize()}
                            priority
                        />
                        <Image
                            key={`${i}+lightning2`}
                            className={styles.cloud2}
                            style={{left: `${randomNum()-40}vw`, top:`${randomNum()-40}vh`}}
                            src='/background/cloud2.svg'
                            alt="clouds"
                            width={randomCloudSize()}
                            height={randomCloudSize()}
                            priority
                        />
                    </>
                )
            })}
            {[...Array(400)].map((e, i) => {
                return (
                    <Image
                        key={`${i}+lightningrain`}
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
            <Image
                className={styles.lightning}
                src="/icons/thunder.svg"
                alt="lightning"
                width={700}
                height={700}
                priority
            />
        </div>
    )
}

