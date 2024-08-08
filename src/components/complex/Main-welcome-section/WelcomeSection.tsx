"use client"
import React, { useEffect, useRef, useState } from 'react'
import style from "./WelcomeSection.module.css"


const WelcomeSection = () => {
  const [isVisible, setIsVisible] = useState<Boolean>(false)
  const componentRef = useRef(null)

  const onIntersection = ([entries]: IntersectionObserverEntry[]) => {
    setIsVisible(entries.isIntersecting)
  }
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection, options)
    if (componentRef.current) {
      observer.observe(componentRef.current);
    }
  }, [])

  return (
    <>
      <div className={style.container} ref={componentRef} >
        <div className={style.mainWrapper}>
          <div className={style.leftColumn}>
            <div className={style.welcomeMessageBlock}>
              <p className={style.welcomeText}>
                We're excited to help you organize your day and achieve your goals.
                Whether you're managing your work schedule, planning personal activities,
                or setting reminders for important tasks, DayPlanner is here to streamline your daily routine.
              </p>
              <div className={style.welcomActionBlock}>
                <button className={`btn btn-outline-light`}>Get Started</button>
              </div>
            </div>
          </div>
          <div className={style.rightColumn}>
            <div>
              {
                isVisible ? <div className={style.welcomeTitleBlock}>
                  <span className={style.title}>Plan...</span>
                  <span className={style.title}>Achieve...</span>
                  <span className={style.title}>Succeed...</span>
                </div> : ""
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default WelcomeSection