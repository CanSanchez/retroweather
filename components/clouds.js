import React from 'react'
import Image from 'next/image'
import styles from '../styles/WeatherCard.module.css'

//create a random number
const randomNum = () => {
    return Math.floor(Math.random() * 100);
}

const randomCloud = () => {
    return Math.floor(Math.random() * 2) + 1;
}

//create a random size function between 180 and 300
const randomSize = () => {
    return Math.floor(Math.random() * (300 - 180 + 5) + 180);
}

//create a raining effect

export default function Clouds() {
    return (
        <div className={styles.cloudy}>
            {[...Array(5)].map((e, i) => {
                return (
                    <>
                        <Image
                            key={`${i}+cloud`}
                            className={styles.cloud1}
                            style={{left: `${randomNum()}vw`, top:`${randomNum()-40}vh`}}
                            src='/background/cloud1.svg'
                            alt="clouds"
                            width={randomSize()}
                            height={randomSize()}
                            priority
                        />
                        <Image
                            key={`${i}+cloud2`}
                            className={styles.cloud2}
                            style={{left: `${randomNum()-40}vw`, top:`${randomNum()-40}vh`}}
                            src='/background/cloud2.svg'
                            alt="clouds"
                            width={randomSize()}
                            height={randomSize()}
                            priority
                        />
                    </>
                )
            })}
        </div>
    )
}

