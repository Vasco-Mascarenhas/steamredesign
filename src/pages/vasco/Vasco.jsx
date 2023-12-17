import React from 'react'
import "./vasco.css"
const Vasco = () => {
  return (
    <div id="vasco">
      <video autoPlay muted loop id="profile-video">
  <source src="/assets/constants/vasco.mp4" type="video/mp4" />
</video>

<div className="profile profile-container">
    <div className="profile-header">
      <div className="profile-avatar">
       <div className="avatar">
        <div className="avatar-border">
          <img src="/assets/constants/avatar-border.png" alt="avatar border" />
        </div>
       <img src="/assets/constants/avatar.jpg" alt="vasco" />
       </div>
        <div className="profile-avatar-name">
        <h3>Vasco Mascarenhas</h3>
        <p>Front-End Web Developer</p>
        </div>
      </div>
      <div className="profile-level">
        <div className="level">
          <h2>Level</h2>
          <div className="level-number">
            <span>26</span>
          </div>
        </div>
        <div className="profile-badge">
          <div className="badge">
            <img src="/assets/constants/badge.png" alt="badge" />
          </div>
          <div className="badge-exp">
          <span>Junior</span>
          <span>300 XP</span>
          </div>
        </div>
      </div>
    </div>
</div>
    </div>
  )
}

export default Vasco