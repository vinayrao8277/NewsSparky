import React, { Component } from 'react'

export class Spinner extends Component {
  render() {
    return (
      <div>
        <div className='loadingspinner'>
        <div id="square1"></div>
        <div id="square2"></div>
        <div id="square3"></div>
        <div id="square4"></div>
        <div id="square5"></div>
    </div>
      </div>
    )
  }
}

export default Spinner