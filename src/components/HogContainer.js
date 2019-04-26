import React, { Component } from 'react'
import hogs from '../porkers_data';
import HogTile from './hogTile'
import Sort from './Sort'
import DropDown from './dropdown'

  const wei = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"

class HogContainer extends Component {



  state = {
    currHogs: hogs
  }

  sortByName = () => {
    let sortedByName = [...hogs]
    sortedByName.sort(function(a, b){
      if(a.name < b.name) {return -1}
      if(a.name > b.name) {return 1}
      return 0
    })

    this.setState({
      currHogs: sortedByName
    })
  }

  sortByWeight = () => {
    let sortedByWeight = [...hogs]
    sortedByWeight = sortedByWeight.sort(function(a, b){
      if(a[wei] < b[wei]) {return -1}
      if(a[wei] > b[wei]) {return 1}
      return 0
    })

    this.setState({
      currHogs: sortedByWeight
    })
  }

  originalArr = () => {
    this.setState({
      currHogs: hogs
    })
  }

  filterByGrease = (e) => {
    let val = e.target.value
    let newVal = val === "true" ? true : false
    if (val === 'all') {
      this.setState({
        currHogs: hogs
      })
    } else {
      let filteredHogs = hogs.filter(hog => {
        return hog.greased === newVal
      })
      this.setState({
        currHogs: filteredHogs
      })
    }
  }

  render() {
    return (
      <div>
        <Sort sortByName={this.sortByName} sortByWeight={this.sortByWeight} originalArr={this.originalArr}/>
        <DropDown filterByGrease={this.filterByGrease}/>
        {this.state.currHogs.map(hog => <HogTile hog={hog} />)}
      </div>
    )
  }

}

export default HogContainer
