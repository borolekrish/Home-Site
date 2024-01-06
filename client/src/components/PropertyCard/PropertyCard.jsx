import React from 'react'
import './PropertyCard.css'
import { AiFillHeart } from 'react-icons/ai'
import { truncate } from 'lodash'

const PropertyCard = ({ card }) => {
    return (
        <div className="flexColStart r-card">
            <AiFillHeart size={25} color='white' />
            <img src={card.image} alt="home" />
            <span className="secondaryText r-price">
                <span style={{ color: "orange" }}>$</span>
                <span>{card.price}</span>
            </span>
            <span className="primaryText">{truncate(card.tittle, { length: 15 })}</span>
            <span className="secondaryText">{truncate(card.description, { length: 30 })}</span>
        </div>
    )
}

export default PropertyCard