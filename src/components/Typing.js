import React, { Component } from 'react'
import Typist from 'react-typist'

export default class Typing extends Component {
  render() {
    return (
      <Typist>
        <Typist.Delay ms={1500} />
        <span> Hi, my name's Nick</span>
        <Typist.Backspace count={3} delay={600} />
        <span>ik</span>
        <Typist.Backspace count={19} delay={1500} />
        <span> Welcome to my site </span>
        <Typist.Backspace count={19} delay={1500} />
        <span> To find out more about me click below. </span>
      </Typist>
    )
  }
}
