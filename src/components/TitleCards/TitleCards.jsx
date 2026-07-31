import React from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
const TitleCards = () => {
  return (
    <div className='titleCards'>
      <h2> Popular On Netflix </h2>
      <div className='card-list'>
        {cards_data.map((card, index) => {
          return <div className='card' key={index}>
            <img src={card.image} alt={card.title} className='card-img' />
            <p>{card.name}</p>
          </div>
        })}
      </div>
      
    </div>
  )
}

export default TitleCards
