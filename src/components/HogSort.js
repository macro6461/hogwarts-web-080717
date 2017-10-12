import React from 'react'
import HogsContainer from './HogsContainer'


const HogSort = (props) => {
  console.log(props)
  return(
    <form>
      <select onChange={props.sortFunction}>
        <option value="name">Name</option>
        <option value="weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water">Weight</option>
      </select>
    </form>
  )
}

export default HogSort;
