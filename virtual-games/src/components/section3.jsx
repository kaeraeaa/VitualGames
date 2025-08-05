import React from "react";
import "../App.css"
import img from "./img/imgSection3.png"

function Section3 () {
    return (
        <section className="section3">
            <div className="section3-content">
                <img className="img-section3" src={img} alt="img"></img>

                <div className="section1-content">
        <h1 className="main-title">
          DISCOVER THE <br />
          <span className="gradient-text">VIRTUAL</span> REALITY <br />
          GAMING 
        </h1>
        <p className="main-text">
          A well-designed gaming header often incorporates elements such 
          as game characters, iconic symbols, vibrant colors, and dynamic 
          visuals to convey excitement, adventure, and the immersive nature 
          of gaming.
        </p>

        <div className="section1-buttons">
          <button className="btn-play"><span>PLAY NOW</span></button>
          </div>
          </div>
            </div>

            <div class="marquee-wrapper-section3">
    <div class="marquee-section3">
      <span class="glow">GAMING SPANING ✦ ACTION - PACKED ✦ MIND - BENDING ✦ COLLECTION OG GAMES ✦</span>
      <span class="glow">GAMING SPANING ✦ ACTION - PACKED ✦ MIND - BENDING ✦ COLLECTION OG GAMES ✦</span>
       <span class="glow">GAMING SPANING ✦ ACTION - PACKED ✦ MIND - BENDING ✦ COLLECTION OG GAMES ✦</span>
    </div>
  </div>
        </section>
    )
}

export default Section3