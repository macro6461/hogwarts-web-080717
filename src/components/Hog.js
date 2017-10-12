import React, { Component } from 'react'
class Hog extends Component {
  state =  {
    showDetails: false,
    display: true
  }

  toggleDetailsFunction = () => {
    this.setState({
        showDetails: !this.state.showDetails
    })

  }

  hideHog = (event) => {
    this.setState({
      display: !this.state.display
    })
  }

  render(){
    console.log(this.props.hog)
    return(
      <div style={{ width: '250px' }} >
        <button onClick={this.hideHog}>{this.state.display ? "Hide" : "Display"} {this.props.hog.name}</button>
        {this.state.display ?
          <div onClick={this.toggleDetailsFunction} style= {{display: `${ this.state.display }%` }} >
            <img style={{width: '100%', height: '200px'  }} src={this.props.hog.url} alt="piggy"/>
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
          :
          null}
    </div>
    )
  }
}

export default Hog
