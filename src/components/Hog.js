import React, { Component } from 'react'
class Hog extends Component {
  state =  {
    showDetails: false
  }

  toggleDetailsFunction = () => {
    this.setState({
        showDetails: !this.state.showDetails
    })

  }

  render(){
    console.log(this.state.showDetails)
    return(
      <div onClick={this.toggleDetailsFunction}>
        <img src={require(`../hog-imgs/${this.props.hog.name.toLowerCase().split(" ").join("_")}.jpg`)} alt="piggy"/>
        <p>{this.props.hog.name}</p>
        {this.state.showDetails ?
          <div>
            <p>Specialty: {this.props.hog.specialty}</p>
            <p>Medal: {this.props.hog["highest medal achieved"]}</p>
            <p>Weight: {this.props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}</p>
          </div>
          :
          null}
      </div>
    )
  }
}

export default Hog
