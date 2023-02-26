import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function Home() {

  const router = useRouter();

  const [isStart, setIsStart] = useState(false);

  const handleSubmit = () => {
    router.push(`/weather?location=${location}`);
  }

  //pass the location from this page to the weather page
  const [location, setLocation] = useState("Vancouver");
  
  //click when user presses enter
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }

  return (
    <>
      <Head>
        <title>Retro Weather App</title>
        <meta name="description" content="Retro Weather app gives 5-day weather forecast in pixel art" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon-retroweather.png" />
      </Head>
      <main className={styles.main}>
          <div className={styles.header}>
            { !isStart? 
              <>
              <Image 
                    src="/fonts/title.svg" 
                    alt="Weather Forecast Logo" 
                    width={540} height={200} priority 
                    id={styles.logo}
                  />
                  <button
                    style={{display: isStart? "none": "block"}}
                    onClick={()=> setIsStart(true)}
                    className={styles.button}>
                    START
                  </button>
              </>
                :
                <div className={styles.container}>
                  <h1 className={styles.h1}>Where to?</h1>
                  <input 
                    className={styles.input} 
                    type="text" 
                    placeholder="Enter City Name"
                    onChange={(e)=>setLocation(e.target.value)} 
                    onKeyDown={(e)=>handleKeyDown(e)}/>
                  <button
                    className={styles.button}
                    onClick={()=>handleSubmit()}>
                    GO
                  </button>
                </div>  
            }
          </div>
        <div className={styles.foreGround}>
          <Image 
            src="/background/foreground.svg" 
            alt="Foreground" 
            width={1540} height={180} priority 
            id={styles.ground}
          />
        </div>
        <div className={styles.backGround}>
          <Image
            src="/background/BGgreen.svg"
            alt="Background"
            width={1540}
            height={180}
            priority
            id={styles.bgGreen}
          />
        </div>
        <div className={styles.backGround}>
          <Image
            src="/background/BGblue.svg"
            alt="Background"
            width={1540}
            height={180}
            priority
            id={styles.bgBlue}
          />
        </div>
      </main>
    </>
  )
}
