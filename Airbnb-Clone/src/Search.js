import React,{useState} from 'react'
import './Search.css'
import {DateRangePicker} from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import {Button} from  "@material-ui/core"
import PeopleIcon from  "@material-ui/icons/People"


// Its an Date picker component
function Search() {
    const [startDate, setstartDate] = useState(new Date())
    const [endDate, setendDate] = useState(new Date())

    const selectionRange = {
        startDate : startDate,
        endDate : endDate,
        key : "selection"
    };
    // function handleSelect (ranges) {
    //     setstartDate (ranges.selection.startDate)
    //     setendDate (ranges.selection.endDate)
    // }

    const handleSelect = (ranges) => {
        setstartDate (ranges.selection.startDate)
        setendDate (ranges.selection.endDate)
    }
   

    return (
        <div className = 'search'> 
             <DateRangePicker ranges = {[selectionRange]} onChange = {handleSelect}></DateRangePicker>
             <h2>
                 Number of Guests!
                 <PeopleIcon></PeopleIcon>
             </h2>
            
             <input min = {0} defaultValue = {4}
             type = 'number'>
                 
             </input>
             
             <Button variant = 'outlined'>
                 Search Airbnb
             </Button>
             
        </div>
    )
    // console.log(ranges.selection.startDate);
}

export default Search
