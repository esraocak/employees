import React from 'react'

const Header = ({count}) => {
  return (
    <div className="head">
        <h1>Employee List</h1>
        <p>(Employees {count} to {count + 4})</p>
    </div>
  )
}

export default Header