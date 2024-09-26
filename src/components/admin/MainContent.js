import { Flex } from 'antd'
import React from 'react'
import { Banner } from './Banner'
import { PropertyLists } from './PropertyLists'
import { OtherPgs } from './OtherPgs'

export const MainContent = () => {
  return (
    <div style={{flex:1}}>
        <Flex vertical gap='2.3rem'>
            <Banner/>
            <PropertyLists />
            <OtherPgs />
        </Flex>

    </div>
  )
}
