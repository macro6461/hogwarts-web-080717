import React, { Component } from 'react';
import Hog from './Hog'
import HogFilter from './HogFilter'
import HogSort from './HogSort'

class HogsContainer extends Component{
  //no reference to 'this' outside a function in class
  state = {
    hogs: this.props.hogs
  }

  filterHogs = (event) => {

    let filteredHogs = this.props.hogs.filter((hog) => {
      if (event.target.value === "Greased"){
        return hog.greased === true
      } else if (event.target.value === "Not Greased"){
        return hog.greased === false
      } else {
        return hog
      }
    })
    this.setState({
      hogs: filteredHogs
    })
  }

  sortHogs = (event) => {
    let sortOption = event.target.value

    let sortedHogs = this.state.hogs.sort((hogA, hogB)=>{
      if (hogA[sortOption] < hogB[sortOption]) {
        return -1;
      }
      if (hogA[sortOption] > hogB[sortOption]) {
        return 1;
      }
     // names must be equal
      return 0;
    })
    this.setState({
      hogs: sortedHogs
    })
  }

  render() {
    return (
      <div>
        <div className="ui grid container">
          <HogSort sortFunction={this.sortHogs} />
          <HogFilter filterFunction={this.filterHogs} />

        </div>
        <div className="ui grid container">
          {this.state.hogs.map((hog, index) => {
              return <Hog key={index} hog={hog}/>
            }
          )}
        </div>
    </div>
    )
  }
}

export default HogsContainer;
