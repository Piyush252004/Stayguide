import { Flex, Typography,Button,Card, Avatar, Tooltip, Divider } from 'antd'
import React from 'react'

export const OtherPgs = () => {
  return (
    <Flex align='center' justify='space-between' gap='large'>
        <Flex vertical='row' gap='small' className='top-pgs'>
            <Flex align='center' justify='space-between'>
                <Typography.Title level={5} strong className='primary--color'>
                    Top pgs
                </Typography.Title>
                <Button type='link' className='gray--color'>
                    View All
                </Button>
            </Flex>
            <Card>
                <Flex align='center' justify='space-evenly'>
                    <Avatar.Group maxCount={5} maxPopoverTrigger='click' size='large' maxStyle={{
                        color: '#f56a00',
                        backgroundColor: '#fde3cf',
                        cursor: 'progress',
                    }}>
                        <Tooltip title='PG 1' placement='top'>
                            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>
                        </Tooltip>
                        <Tooltip title='PG 2' placement='top'>
                            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>
                        </Tooltip>
                        <Tooltip title='PG 3' placement='top'>
                            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>
                        </Tooltip>
                        <Tooltip title='PG 4' placement='top'>
                            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>
                        </Tooltip>
                        <Tooltip title='PG 5' placement='top'>
                            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>
                        </Tooltip>
                        <Tooltip title='PG 6' placement='top'>
                            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>
                        </Tooltip>
                        <Tooltip title='PG 7' placement='top'>
                            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>
                        </Tooltip>
                    </Avatar.Group>

                    <Divider type='vertical' className='divider'/>
                    <Flex vertical='row'>
                        <Typography.Text type='secondary' strong>
                            50 Pgs enlisted
                        </Typography.Text>
                        <Typography.Text type='secondary' strong>
                            10 Pg owners
                        </Typography.Text>
                    </Flex>
                </Flex>
            </Card>
        </Flex>

        <Flex vertical='row' gap='small' className='featured-pgs'>
            <Flex align='center' justify='space-between'>
                <Typography.Title level={5} strong className='primary--color'>
                    Featured pgs
                </Typography.Title>
                <Button type='link' className='gray--color'>
                    View All
                </Button>
            </Flex>
            <Card>
                <Flex align='center' justify='space-evenly'>
                    <Avatar.Group maxCount={5} maxPopoverTrigger='click' size='large' maxStyle={{
                        color: '#f56a00',
                        backgroundColor: '#fde3cf',
                        cursor: 'progress',
                    }}>
                        <Tooltip title='PG 1' placement='top'>
                            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>
                        </Tooltip>
                        <Tooltip title='PG 2' placement='top'>
                            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>
                        </Tooltip>
                        <Tooltip title='PG 3' placement='top'>
                            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>
                        </Tooltip>
                        <Tooltip title='PG 4' placement='top'>
                            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>
                        </Tooltip>
                        <Tooltip title='PG 5' placement='top'>
                            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>
                        </Tooltip>
                        <Tooltip title='PG 6' placement='top'>
                            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>
                        </Tooltip>
                        <Tooltip title='PG 7' placement='top'>
                            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>
                        </Tooltip>
                    </Avatar.Group>

                    <Divider type='vertical' className='divider'/>
                    <Flex vertical='row'>
                        <Typography.Text type='secondary' strong>
                            25 Pgs enlisted
                        </Typography.Text>
                        <Typography.Text type='secondary' strong>
                            7 Pg owners
                        </Typography.Text>
                    </Flex>
                </Flex>
            </Card>
        </Flex>
    </Flex>
  )
}
