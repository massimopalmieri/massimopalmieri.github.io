import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 50px auto 0;
  width: 960px;
`

export const Block = styled.div`
  //background-color: #ffffff;
  border-bottom: 1px solid #e6e6e6;
  color: #323141;
  padding: 2rem;
  margin-bottom: 2px;
  position: relative;
`

export const BlockTitle = styled.h3`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 3rem;
`

export const AboutMe = styled.div`
  display: flex;
  padding-bottom: 2rem;
  
  &:last-of-type {
    padding-bottom: 0;
  }
`

export const AboutMeTitle = styled.div`
  font-weight: 500;
  margin-bottom: .5rem;
`

export const AboutMeInfo = styled.div`
  padding-left: 15px;
`

export const Skill = styled.span`
  margin-right: 5px;
  margin-bottom: 5px;
  background-color: #E3E4E6;
  font-weight: 500;
  color: #323141;
  border-radius: 2px;
  display: inline-block;
  line-height: 2rem;
  padding: 0 1rem;
  text-transform: capitalize;
`
