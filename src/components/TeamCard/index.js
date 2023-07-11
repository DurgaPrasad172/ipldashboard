// Write your code here
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <Link to={`/team-matches/${id}`}>
      <li>
        <div>
          <img src={teamImageUrl} alt={name} />
          <p>{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
