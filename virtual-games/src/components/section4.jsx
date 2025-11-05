
import React from "react";
import img1 from "./img/imgSlider.png";
import img2 from "./img/imgSlider1.png";
import img3 from "./img/imgSlider2.png";
import img4 from "./img/imgSlider3.png";
import img5 from "./img/imgSlider4.png";
import img6 from "./img/imgSlider5.png";

import icon1 from "./img/icon/icon1.png"
import icon2 from "./img/icon/icon2.png"
import icon3 from "./img/icon/icon3.png"
import icon4 from "./img/icon/icon4.png"
import icon5 from "./img/icon/icon5.png"
import icon6 from "./img/icon/icon6.png"

function Section4(){
    return (
        <section id="games-section" className="section4">
            <div className="title_btn">
            <h1>WELCOME TO THE TOP</h1>
            <button className="btn-buy"><span>MEWEST GAMES</span></button>
            <button className="btn-play"><span>LATEST GAMES</span></button>
            <button className="btn-play"><span>FIGHT GAMES</span></button>
            <button className="btn-play"><span>SPORT GAMES</span></button>
            </div>
            <div className="games-cards">
                    {/* card 1 */}
                <div className="card">
                <img
                    className="card-image"
                    src={img1} 
                    alt="Robot"
                />
                <div className="card-content">
                    <h2 className="card-title">Core Philosophies</h2>
                    <div className="card-author">
                    <img
                        src={icon1} 
                        alt="Cameron Williamson"
                        className="avatar"
                    />
                    <div>
                        <p className="author-name">Cameron Williamson</p>
                        <p className="author-role">Gillette</p>
                    </div>
                    </div>
                    <button className="btn-buy">LIVE DEMO</button>
                </div>
                </div>
                    {/* card 2 */}
                 <div className="card">
                <img
                    className="card-image"
                    src={img2} 
                    alt="Robot"
                />
                <div className="card-content">
                    <h2 className="card-title">Core Philosophies</h2>
                    <div className="card-author">
                    <img
                        src={icon2} 
                        alt="Cameron Williamson"
                        className="avatar"
                    />
                    <div>
                        <p className="author-name">Dianne Russell</p>
                        <p className="author-role">Louis Vutton</p>
                    </div>
                    </div>
                    <button className="btn-buy">LIVE DEMO</button>
                </div>
                </div>
                    {/* card 3 */}
                 <div className="card">
                <img
                    className="card-image"
                    src={img3} 
                    alt="Robot"
                />
                <div className="card-content">
                    <h2 className="card-title">Core Philosophies</h2>
                    <div className="card-author">
                    <img
                        src={icon3} 
                        alt="Cameron Williamson"
                        className="avatar"
                    />
                    <div>
                        <p className="author-name">Jane Cooper</p>
                        <p className="author-role">MasterCard</p>
                    </div>
                    </div>
                    <button className="btn-buy">LIVE DEMO</button>
                </div>
                </div>
                    {/* card 4 */}
                 <div className="card">
                <img
                    className="card-image"
                    src={img4} 
                    alt="Robot"
                />
                <div className="card-content">
                    <h2 className="card-title">Core Philosophies</h2>
                    <div className="card-author">
                    <img
                        src={icon4} 
                        alt="Cameron Williamson"
                        className="avatar"
                    />
                    <div>
                        <p className="author-name">Cody Fisher</p>
                        <p className="author-role">The Walt Disney Company</p>
                    </div>
                    </div>
                    <button className="btn-buy">LIVE DEMO</button>
                </div>
                </div>
                    {/* card 5 */}
                 <div className="card">
                <img
                    className="card-image"
                    src={img5} 
                    alt="Robot"
                />
                <div className="card-content">
                    <h2 className="card-title">Core Philosophies</h2>
                    <div className="card-author">
                    <img
                        src={icon5} 
                        alt="Cameron Williamson"
                        className="avatar"
                    />
                    <div>
                        <p className="author-name">Wade Warren</p>
                        <p className="author-role">Gillette</p>
                    </div>
                    </div>
                    <button className="btn-buy">LIVE DEMO</button>
                </div>
                </div>
                    {/* card 6 */}
                 <div className="card">
                <img
                    className="card-image"
                    src={img6} 
                    alt="Robot"
                />
                <div className="card-content">
                    <h2 className="card-title">Core Philosophies</h2>
                    <div className="card-author">
                    <img
                        src={icon6} 
                        alt="Cameron Williamson"
                        className="avatar"
                    />
                    <div>
                        <p className="author-name">Robert Fox</p>
                        <p className="author-role">L'Oréal</p>
                    </div>
                    </div>
                    <button className="btn-buy">LIVE DEMO</button>
                </div>
                </div>
            </div>

              <div className="marquee-wrapper-section3">
    <div className="marquee-section3">
      <span className="glow">GAMING SPANING ✦ ACTION - PACKED ✦ MIND - BENDING ✦ COLLECTION OG GAMES ✦</span>
      <span className="glow">GAMING SPANING ✦ ACTION - PACKED ✦ MIND - BENDING ✦ COLLECTION OG GAMES ✦</span>
       <span className="glow">GAMING SPANING ✦ ACTION - PACKED ✦ MIND - BENDING ✦ COLLECTION OG GAMES ✦</span>
    </div>
  </div>
        </section>
    )
}

export default Section4


