//arrow button component

import React from 'react'
import Image from 'next/image'
import styles from '../styles/ArrowButton.module.css'

export default function ArrowButton(props) {
    return (
        <div 
            className={styles.buttonarrow}
            style={props.style}
            onClick={props.onClick}>
            <Image
                src={props.icon}
                alt={props.alt}
                width={80}
                height={80}
                priority
            />
            <h2>{props.name}</h2>
        </div>
    )
}