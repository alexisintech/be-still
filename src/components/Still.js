import React, { useState, useEffect } from "react"
import { stills } from "../stills";

export default function Still(){
  // const [stillImage, setStillImage] = useState("be-still-3.jpg")
  const [still, setStill] = useState({
    caption: "",
    randomStill: "be-still-3.jpg"
  })
  /*
  Get random image from our array of images in still.js
  */
  function getStill(){
    const randomNum = Math.floor(Math.random() * stills.length)
    setStill(prevStill => ({
      ...prevStill,
      randomStill: stills[randomNum].img,
    }))
  }
  
  return(
    <main>
      <section className="still--container">
        <div className="still">
          <img src={`/imgs/stills/${still.randomStill}`} alt="x" className="still--image"/>
          <h3 className="still--text">{still.caption}</h3>
        </div>

        <div className="form">
          <input 
            type="text"
            placeholder="fade into you..."
            className="form--input"
            name="caption"
            value={still.caption}
            onChange={updateCaption}
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