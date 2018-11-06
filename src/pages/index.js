import React from 'react'
import { setConfig } from 'react-hot-loader'
import styled from 'styled-components'
import Layout from '../components/layout'
import Intro from '../components/Intro'
import Jobs from '../components/Jobs'
import { Wrapper, Block, BlockTitle, AboutMe, AboutMeInfo, AboutMeTitle, Skill } from '../components/style'
import { Search, Status, Location } from '../components/Icons'
import data from '../data/jobs'

setConfig({ pureSFC: true })

const ContactLink = styled.a`
  font-weight: 500;
  display: inline-block;
  margin-right: 20px;
  color: #2B87B1;
  text-decoration: none;
`

const IndexPage = () => (
  <Layout>
    <Wrapper>
      <Intro />

      <Block>
        <ContactLink href="#">CV</ContactLink>
        <ContactLink href="https://www.linkedin.com/in/massimopalmieri">LinkedIn</ContactLink>
        <ContactLink href="mailto:massimo.palmieri+portfolio@gmail.com">Email</ContactLink>
        <ContactLink href="tel:00447824174839">0782-417-4839</ContactLink>
      </Block>

      <Block>
        <BlockTitle>about me</BlockTitle>

        <AboutMe>
          <Location />
          <AboutMeInfo>
            <AboutMeTitle>Willing to work in or near the following areas (or remote):</AboutMeTitle>
            London, United Kingdom
          </AboutMeInfo>
        </AboutMe>

        <AboutMe>
          <Status />
          <AboutMeInfo>
            <AboutMeTitle>Job search status:</AboutMeTitle>
            Open to exploring new opportunities
          </AboutMeInfo>
        </AboutMe>

        <AboutMe>
          <Search />
          <AboutMeInfo>
            <AboutMeTitle>What I am looking for in a new position:</AboutMeTitle>
            Modern tech stack, flexible working.
          </AboutMeInfo>
        </AboutMe>
      </Block>

      <Block>
        <BlockTitle>primary area of expertise</BlockTitle>

        <div>
          {data.skills.map(skill => <Skill key={skill}>{skill}</Skill>)}
        </div>
      </Block>

      <Jobs />

      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Wrapper>
  </Layout>
)

export default IndexPage
