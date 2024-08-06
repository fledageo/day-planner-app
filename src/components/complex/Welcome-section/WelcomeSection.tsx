"use client"
import React, { useEffect, useRef, useState } from 'react'
import style from "./WelcomeSection.module.css"


const WelcomeSection = () => {
  const [isVisible,setIsVisible] = useState<Boolean>(false)
  const componentRef = useRef(null)
  
  console.log("rerender")
  const onIntersection = ([entries]:IntersectionObserverEntry[]) => {
    setIsVisible(entries.isIntersecting)
  }
  const options = {
    root: null, 
    rootMargin: '0px',
    threshold: 0.5, 
  }

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection,options)
    if (componentRef.current) {
      observer.observe(componentRef.current);
    }
  },[])

  return (
    <>
      <div className={style.container} ref={componentRef} >
        <div className={style.mainWrapper}>
          <div className={style.leftColumn}>

          </div>
          <div className={style.rightColumn}>
            <div className={style.welcomeMessageBlock}>
              {
                isVisible ? <div className={style.welcomeTitleBlock}>
                <span className={style.title}>Plan...</span>   
                <span className={style.title}>Achieve...</span>   
                <span className={style.title}>Succeed...</span>
              </div> : ""
              }
            </div>
          </div>
          {/* <h1 style={{color:"white"}}>Plan. Achieve. Succeed.</h1> */}
        </div>
      </div>
    </>
  )
}
export default WelcomeSection