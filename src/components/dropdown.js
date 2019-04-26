import React from 'react'

const DropDown = (props) => {
  return (
    <div>
    <select onChange={props.filterByGrease}>
      <option value="all">All</option>
      <option value='true'>Greased</option>
      <option value='false'>Not Greased</option>
    </select>
    </div>
  )
}

export default DropDown
