import React from 'react'
import { Block } from '../style'
import image from '../../images/profile.jpeg'
import { FlexWrapper, Name, Image } from './style'

export default () => {
  return (
    <Block>
      <FlexWrapper>
        <div style={{ marginRight: '2rem', width: '80px', height: '80px' }}>
          <Image src={image} alt="" />
        </div>

        <div>
          <Name>Massimo Palmieri</Name>
          <div>Lead front-end engineer at Lloyds Bank</div>
        </div>
      </FlexWrapper>
    </Block>
  )
}
