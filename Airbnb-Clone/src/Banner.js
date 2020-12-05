import React  , {useState}from 'react'
import './Banner.css'
import {Button} from '@material-ui/core'
// import { Search } from '@material-ui/icons'
import Search from './Search'

function Banner() {

    const [showSearch, setshowSearch] = useState(false)

    return (
        <div className = 'banner'>
            <div className = 'banner-search'>
                {showSearch &&  <Search></Search>}

            <Button variant = 'outline' className = 'banner-search-button' onClick = {() => {
                setshowSearch(!showSearch)
            }}>
                    {showSearch ? "Hide" : " Search Dates"}
                </Button>
            </div>
            <div className="banner-info">
                <h1>
                    Get out and strech your imagination
                </h1>
                <h5>
                Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>
                <Button variant = 'text'>
                    Explore Nearby Stays
                </Button>
            </div>
        </div>
    )
}

export default Banner
