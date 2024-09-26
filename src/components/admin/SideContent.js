import React from 'react'
import { Flex } from 'antd';
import { ContentSidebar } from './ContentSidebar';

export const SideContent = () => {
  return (
    <Flex Vertical gap='2.3rem' style={{width: 350}}>
        <ContentSidebar/>
    </Flex>
  )
}
