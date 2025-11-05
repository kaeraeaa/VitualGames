import React from "react";
import "../App.css";
import userImg7 from "./img/icon/icon7.png";
import userImg8 from "./img/icon/icon8.png";
import { FaStar } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

function Section5() {
  return (
    <>

    <div className="comments">

    {/* comment 1 */}
    <div className="comment-card">
      <div className="decor">
        <div className="shape purple"></div>
        <div className="shape blue"></div>
      </div>

      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} color="#fff" />
        ))}
      </div>

      <p className="review-text">
        One of the standout features of this gaming website is its extensive
        library of game guides and tutorials. It has helped me level up my
        skills, conquer challenging quests, and discover hidden secrets within
        games. The guides are comprehensive, easy to follow, and have
        undoubtedly elevated my gaming performance.
      </p>

      <div className="fade-line"></div>


      <div className="author">
        <img src={userImg7} alt="user" className="avatar" />
        <div>
          <div className="name">Arlene McCoy</div>
          <div className="company">McDonald's</div>
        </div>
        <div className="verified">
          <FaCheckCircle color="#A855F7" /> Verified
        </div>
      </div>
    </div>

        {/* coments 2 */}
        <div className="comment-card">
      <div className="decor">
        <div className="shape purple"></div>
        <div className="shape blue"></div>
      </div>

      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} color="#fff" />
        ))}
      </div>

      <p className="review-text">
       Another aspect that sets this website apart is its vibrant
       and passionate community. The forum section provides a platform 
       for gamers from all walks of life to connect, share their experiences, 
       and discuss their favorite titles. I've made valuable friendships and 
       found like-minded individuals who share my enthusiasm for gaming.
      </p>

      <div className="fade-line"></div>


      <div className="author">
        <img src={userImg8} alt="user" className="avatar" />
        <div>
          <div className="name">Kathryn Murphy</div>
          <div className="company">General Electric</div>
        </div>
        <div className="verified">
          <FaCheckCircle color="#A855F7" /> Verified
        </div>
      </div>
    </div>
    </div>
    <div className="marquee-wrapper-footer">
    <div className="marquee">
      <span className="glow">GAMING SPANING ✦ ACTION - PACKED ✦ MIND - BENDING ✦ COLLECTION OG GAMES ✦</span>
      <span className="glow">GAMING SPANING ✦ ACTION - PACKED ✦ MIND - BENDING ✦ COLLECTION OG GAMES ✦</span>
       <span className="glow">GAMING SPANING ✦ ACTION - PACKED ✦ MIND - BENDING ✦ COLLECTION OG GAMES ✦</span>
    </div>
  </div>
    </>
  );
}

export default Section5;