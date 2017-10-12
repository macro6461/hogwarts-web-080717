import React from 'react'
import HogsContainer from './HogsContainer'


const HogFilter = (props) => {
  console.log(props)
  return(
    <form>
      <select onChange={props.filterFunction}>
        <option>All Hogs</option>
        <option>Greased</option>
        <option>Not Greased</option>
      </select>
    </form>
  )
}

export default HogFilter;
