// Write your code here
import {Component} from 'react'

class MatchCard extends Component {
  render() {
    const {matchData} = this.props

    const {competingTeamLogo, result, competingTeam, matchStatus} = matchData

    return (
      <li>
        <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
        <h1>{competingTeam}</h1>
        <p>{result}</p>
        <p>{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
