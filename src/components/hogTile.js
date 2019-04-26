import React, { Component } from 'react'

class HogTile extends Component {
  state = {
    id: ''
  }


  render() {
    return (
      <div>
        <h3>{this.props.hog.name}</h3>
        <img onClick={this.storeID} id={this.props.hog.name} src={require(`../hog-imgs/${this.convertName(this.props.hog.name)}`)} />
        <div style={this.state.id === this.props.hog.name ? {display: 'block'} : {display: 'none'}}>
          Specialty: {this.props.hog.specialty}<br/>
          {this.props.hog.greased ? "Greased" : "Not greased"}<br/>
          WARHLFDRTIW: {this.props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}<br/>
          Highest medal: {this.props.hog['highest medal achieved']}<br/>
        </div>
      </div>
    )
  }

  storeID = e => {
    this.setState({
      id: e.target.id
    })
  }

  convertName = name => {
    return name.split(" ").join('_').toLowerCase() + '.jpg';
  }
}

export default HogTile
