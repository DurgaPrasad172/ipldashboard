// Write your code here

import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      competingTeam,
      umpires,
      result,
      date,
      manOfTheMatch,
      venue,
      competingTeamLogo,
      firstInnings,
      secondInnings,
    } = latestMatch

    return (
      <div>
        <h1>Latest Matches</h1>
        <div>
          <p>{competingTeam}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <div>
          <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
        </div>
        <div>
          <h1>First Innings</h1>
          <p>{firstInnings}</p>
          <h1>Second Innings</h1>
          <p>{secondInnings}</p>
          <h1>Man Of The Match</h1>
          <p>{manOfTheMatch}</p>
          <h1>Umpires</h1>
          <p>{umpires}</p>
        </div>
      </div>
    )
  }
}

export default LatestMatch
