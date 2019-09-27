import React from 'react'
import './Hero.scss'

const Hero = props => {
  const { background, title, content } = props

  return (
    <div className="hero" style={{ backgroundImage: `url(${background})` }}>
      <div className="hero__container">
        <h1>{title}</h1>
        <p className="lead">{content}</p>
      </div>
    </div>
  )
}

export default Hero
