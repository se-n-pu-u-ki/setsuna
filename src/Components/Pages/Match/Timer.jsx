import React from 'react'

export class Timer extends React.Component {
  constructor () {
    super()
    this.state = { minutes: '05', seconds: '00', time: 7500}
  }

  start () {
    this.intervalTimer = setInterval(() => this.update(), 1000)
  }

  stop () {
    clearInterval(this.intervalTimer)
  }

//   reset () {
//     this.setState({
//       minutes: '05',
//       seconds: '00',
//       time: 7500
//     })
//   }

  update () {
    const time = this.state.time - 1
    const minutes = this.toMinutes(time)
    const seconds = this.toSeconds(time)

    this.setState({
      minutes: this.toText(minutes),
      seconds: this.toText(seconds),
      time: time
    })
  }

  toMinutes (time) {
    return parseInt(time / 60 % 60)
  }

  toSeconds (time) {
    return time % 60
  }

  toText (time) {
    return ('00' + time).slice(-2)
  }

  render () {
    return (
      <div>
        <span className='timer-number' role='minute'>{this.state.minutes}</span>
        <span className='timer-semicolon'>:</span>
        <span className='timer-number' role='second'>{this.state.seconds}</span>
      </div>
    )
  }
}