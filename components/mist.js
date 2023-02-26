import React from 'react'
import Image from 'next/image'
import styles from '../styles/WeatherCard.module.css'

//create a random number for positioning
const randomNum = () => {
    return Math.floor(Math.random() * 100);
}

//create a random size function between 500 and 800
const randomSize = () => {
    return Math.floor(Math.random() * (800 - 500 + 5) + 500);
}

//creates a mist effect
export default function Mist() {
    return (
        <div className={styles.misty}>
            {[...Array(5)].map((e, i) => {
                return (
                    <>
                        <Image
                            key={`${i}+mist1`}
                            className={styles.mist1}
                            style={{left: `${randomNum()}vw`, top:`${randomNum()-40}vh`}}
                            src='/icons/mist.svg'
                            alt="mist"
                            width={randomSize()}
                            height={randomSize()}
                            priority
                        />
                        <Image
                            key={`${i}+mist2`}
                            className={styles.mist2}
                            style={{top:`${randomNum()-40}vh`}}
                            src='/icons/mist.svg'
                            alt="mist"
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

