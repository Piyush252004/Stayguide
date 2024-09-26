import { Card, Flex, Typography } from 'antd'
import React from 'react'

export const ContentSidebar = () => {
  return (
    <div>
        <Card className='card'>
            <Flex vertical gap="large" style={{width: 300}}>
                <Typography.Title level={4} strong>
                    Today <br /> 5 Visited
                </Typography.Title>
                <Typography.Title level={4} strong>
                    This month <br /> 50 Visited
                </Typography.Title>
                <Typography.Title level={4} strong>
                    Your Most Liked Pg <br /> First Pg
                </Typography.Title>
            </Flex>
            {/* // <Image src={}/> */}
        </Card>
    </div>
  )
}
