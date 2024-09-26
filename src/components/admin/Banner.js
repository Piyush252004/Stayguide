import { Flex,Card, Typography, Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Banner = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleAddMoreClick = () => {
        navigate('/admin-pannel'); // Redirect to the desired route
    };
  return (
    <Card style={{height: 260, padding: '20px'}}>
        <Flex vertical gap='30px'>
            <Flex vertical align='flex-start'>
                <Typography.Title level={2} strong>
                    Enlist your pgs
                </Typography.Title>
                <Typography.Text type='secondary' strong>
                    Enlist your pgs in our platform and get a great response from the users.
                </Typography.Text>
            </Flex>
            <Flex gap='large'>
                <Button type='primary' size='large' onClick={handleAddMoreClick}>Add More</Button>
                <Button size='large'>Top Sellers</Button>
            </Flex>
        </Flex>
    </Card>
  )
}
