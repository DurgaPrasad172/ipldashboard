// Write your code here
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const {teams} = data
    /// console.log(data)

    const updatedData = teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    ///    console.log(updatedData)
    this.setState({teamsList: updatedData, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        ) : (
          <div className="bg">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1>IPL DASHBOARD</h1>
            </div>

            <ul>
              {teamsList.map(eachTeam => (
                <TeamCard key={eachTeam.id} teamDetails={eachTeam} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
