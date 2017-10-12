import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Hogs from '../porkers_data'
import HogsContainer from './HogsContainer'

class App extends Component {


  renderPigs = (pigs) => {
    let pigUrls = pigs.data.map((pig) => {
      return (pig.images.downsized_large.url.slice(0, 13) + pig.images.downsized_large.url.slice(14))
    })
    Hogs.forEach((hog, index) => {
      hog.url = pigUrls[index]
    })
    this.forceUpdate()
    // pigs.data[0].images.downsized_large.url.replace("3", "")
  }

  componentWillMount(){
    fetch('http://api.giphy.com/v1/gifs/search?q=pigs&api_key=4W9awpXV3vAB9ffCNg3LKkMSUDvTSOqz&limit=13')
    .then(response => response.json())
    .then(pigs =>this.renderPigs(pigs))
  }


  render() {
    return (
      <div className="App">
          <Nav />
          <HogsContainer hogs={Hogs} />

      </div>
    )
  }
}

export default App;
