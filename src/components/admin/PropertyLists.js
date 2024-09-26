import { Button, Flex, Typography, Card, Image } from 'antd'

import React from 'react'
import PropertyData from '../../PropertyData'

const {Meta} = Card;
export const PropertyLists = () => {
  return (
    <div>
        <Flex align='center' justify='space-between'>
            <Typography.Title level={3} strong className='primary--color'>
                My Listing
            </Typography.Title>
            <Button type='link' className='gray--color'>
                View All
            </Button>
        </Flex>

        <Flex align='center' gap='large'>
            {PropertyData.map((Property)=> (
                <Card key={Property.id} hoverable className='property-card'>
                    <Image src={Property.picture} style={{width: '220px', height: '170px'}}/>
                    <Meta title={Property.name} style={{marginTop: '1rem'}} />
                </Card>
            ))}
        </Flex>
    </div>
  )
}
