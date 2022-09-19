export default function Still(){
  /*
  Get random image from our array of images in still.js
  */
  function getStill(){
    const randomStill = Math.floor(Math.random() * stills.length)
    stillImage = stills[randomStill].img
  }

  return(
    <main>
      <section className="still--container">
        <img src={`/imgs/stills/${stillImage}`} alt="x" className="still--image" />

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
            Create new caption
          </button>
        </div>
      </section>
    </main>
  )
}