import React from 'react'
import { Wrapper, Info, Employer, Title, Achievements, Date } from './style'
import { Position } from '../Icons'

const Job = props => {
  const { employer, title, date, achievements } = props.job

  return (
    <Wrapper>
      <div>
        <Position />
      </div>
      <Info>
        <Employer>{employer}</Employer>
        <Title>{title}</Title>
        <Date>{date}</Date>

        <Achievements>
          {achievements.map((achievement, index) => <li key={index}>{achievement}</li>)}
        </Achievements>
      </Info>
    </Wrapper>
  )
}

export default Job
