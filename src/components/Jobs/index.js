import React, { useState } from 'react'
import styled from 'styled-components'
import data from '../../data/jobs'
import Job from '../Job'
import {Block, BlockTitle} from '../style'

const {history} = data

const ExpandButton = styled.button`
  //position: absolute;
  //left: calc(50% - 50px);
  width: 100px;
`

const Expand = styled.div`
  background: rgb(255,255,255);
  background: linear-gradient(0deg, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%);
  display: flex;
  justify-content: center;
  align-content: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`

const Jobs = () => {
  const [jobsCount, setJobsCount] = useState(2)

  function expand () {
    if (jobsCount === history.length) {
      return setJobsCount(2)
    }
    setJobsCount(history.length)
  }

  return (
    <Block>
      <BlockTitle>work history</BlockTitle>
      {history.slice(0, jobsCount).map(job => <Job key={job.employer} job={job} />)}

      <Expand>
        <ExpandButton onClick={expand}>toggle</ExpandButton>
      </Expand>
    </Block>
  )
}

export default Jobs
