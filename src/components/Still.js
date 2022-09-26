import React, { useState, useEffect } from "react"
import { stills } from "../stills";

export default function Still(){
  const [stillImage, setStillImage] = useState("be-still-3.jpg")

  /*
  Get random image from our array of images in still.js
  */
  function getStill(){
    const randomStill = Math.floor(Math.random() * stills.length)
    setStillImage(stills[randomStill].img)
    console.log(stillImage);
  }
  
  return(
    <main>
      <section className="still--container">
        <img src={`/imgs/stills/${stillImage}`} alt="x" className="still--image"/>

        <div className="form">
          <input 
            type="text"
            placeholder="fade into you..."
            className="form--input"
          />
          <button 
            className="form--button"
            onClick={getStill}
          >
            Generate new image
          </button>
        </div>
      </section>
    </main>
  )
}