import React from 'react'

const TeamMemberCard = (props) => {
    return (
        <div>
            <h3>Team Consists</h3>
            <h4>{props.name}</h4>
            <h4>{props.title}</h4>
        </div>
    )
}

export default TeamMemberCard