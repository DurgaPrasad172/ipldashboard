// Write your code here
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {teamMatchDetails: {}, isLoading: true}

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const teamMatchesApiUrl = `https://apis.ccbp.in/ipl/${id}`
    // console.log(id)
    const response = await fetch(teamMatchesApiUrl)
    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.umpires,
        result: data.result,
        manOfTheMatch: data.man_of_the_match,
        id: data.id,
        date: data.date,
        venue: data.venue,
        competingTeam: data.competing_team,
        competingTeamLogo: data.competing_team_logo,
        firstInnings: data.first_innings,
        secondInnings: data.second_innings,
        matchStatus: data.match_status,
      },
      recentMatches: data.recent_matches.map(eachItem => ({
        umpires: eachItem.umpires,
        result: eachItem.result,
        manOfTheMatch: eachItem.man_of_the_match,
        id: eachItem.id,
        date: eachItem.date,
        venue: eachItem.venue,
        competingTeam: eachItem.competing_team,
        competingTeamLogo: eachItem.competing_team_logo,
        firstInnings: eachItem.first_innings,
        secondInnings: eachItem.second_innings,
        matchStatus: eachItem.match_status,
      })),
    }

    this.setState({teamMatchDetails: updatedData, isLoading: true})
  }

  renderMatchesList = () => {
    const {teamMatchDetails} = this.state
    const {recentMatches} = teamMatchDetails
    console.log(recentMatches)
    return (
      <ul>
        {recentMatches.map(eachItem => (
          <MatchCard key={eachItem.id} matchData={eachItem} />
        ))}
      </ul>
    )
  }

  render() {
    const {teamMatchDetails, isLoading} = this.state

    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchDetails
    console.log(recentMatches)

    return (
      <div>
        {isLoading ? (
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        ) : (
          <div>
            <div>
              <img src={teamBannerUrl} alt={teamBannerUrl} />

              <LatestMatch latestMatchData={latestMatchDetails} />
              {this.renderMatchesList()}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
