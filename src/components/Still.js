export default function Still(){
  
  return(
    <main>
      <section className="still--container">
        <img src={`/imgs/stills/be-still-1`} alt="x" className="still--image" />

        <div className="form">
          <input 
            type="text"
            placeholder="fade into you..."
            className="form--input"
          />
          <button 
            className="form--button"
          >
            Create new caption
          </button>
        </div>
      </section>
    </main>
  )
}