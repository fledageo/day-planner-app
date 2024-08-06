import React from 'react'
import style from "./WelcomeSection.module.css"

const WelcomeSection = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.mainWrapper}>
          <div className={style.leftColumn}>

          </div>
          <div className={style.rightColumn}>
            <div className={style.welcomeMessageBlock}>
              <div className={style.welcomeTitleBlock}>
                <span className={style.title}>Plan...</span>   
                <span className={style.title}>Achieve...</span>   
                <span className={style.title}>Succeed...</span>
              </div>
            </div>
          </div>
          {/* <h1 style={{color:"white"}}>Plan. Achieve. Succeed.</h1> */}
        </div>
      </div>
    </>
  )
}
export default WelcomeSection