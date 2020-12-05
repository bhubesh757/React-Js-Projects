import React from 'react'
import './SearchResult.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StartIcon from '@material-ui/icons/Star'
function SearchResult({
    img,
    location,
    price,
    star,
    total,
    title,
    description
}) {
    return (
        <div className = 'searchResult'>  
            <img src="" alt="" className="house"/>
            <FavoriteBorderIcon className="searchResult-heart"></FavoriteBorderIcon>
            <div className="searchResult-info">
            <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>
                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='searchResults__price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
            </div>
        </div>
    </div>
    )
}

export default SearchResult
