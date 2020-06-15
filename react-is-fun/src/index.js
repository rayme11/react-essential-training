import React from 'react';
import ReactDOM from 'react-dom';

let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
}



class SkiDayCounter extends React.Component {
  getPercent = decimal => {
    return decimal * 100 + '%'
  }

  calcGoalProgress = (total, goal) => {
    return this.getPercent(total / goal)
  }

  render() {
    const { total, powder, backcountry, goal } = this.props
    return (
      <section>Ski Days
        <div><p>Total Days: {total}</p></div>
        <div><p>Powder: {powder}</p></div>
        <div><p>Backcountry: {backcountry}</p></div>
        <div><p>Goal: {this.calcGoalProgress(total, goal)}</p></div>
      </section>
    )
  }
}

class Message extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1 style={{ color: this.props.color }}
        >{this.props.msg}</h1>
        <p>I will check back in {this.props.minutes} minutes</p>
      </div>
    )
  }
}


ReactDOM.render(
  <SkiDayCounter
    total={skiData.total}
    powder={skiData.powder}
    backcountry={skiData.backcountry}
    goal={skiData.goal} />,
  document.getElementById('root')
)
