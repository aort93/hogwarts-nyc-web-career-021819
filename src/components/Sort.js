import React from 'react'

const Sort = props => {
  return (
    <div>
      <button onClick={props.sortByName}>Sort by name</button>
      <button onClick={props.sortByWeight}>Sort by weight</button>
      <button onClick={props.originalArr}>No Sort</button>
    </div>
  )
}

export default Sort
