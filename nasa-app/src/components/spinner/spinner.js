import React from 'react'
import spinner from './loadingSpinner.gif';

const Spinner = () => {
  return (
    <div style={spin}>
      <img src={spinner} alt=""/>
    </div>
  )
}

export default Spinner

const spin = {
  display: 'flex',
  justifyContent: 'center'
}
