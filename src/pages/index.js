import React from 'react'
import { setConfig } from 'react-hot-loader'
import Layout from '../components/layout'
import Image from '../components/image'
import Jobs from '../components/Jobs'
import { Wrapper, Block, BlockTitle, AboutMe, AboutMeInfo, AboutMeTitle, Skill } from '../components/style'
import { Search, Status, Location } from '../components/Icons'
import data from '../data/jobs'


setConfig({ pureSFC: true })

const IndexPage = () => (
  <Layout>
    <Wrapper>
      <Block>
        <div style={{ maxWidth: '100px' }}>
          <Image />
        </div>
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
            I want to work in new technologies.
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
