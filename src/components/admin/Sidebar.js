import { Flex, Menu } from 'antd';
import React from 'react';
import { UserOutlined, ProfileOutlined, LogoutOutlined, OrderedListOutlined, CarryOutOutlined, SettingOutlined } from '@ant-design/icons'

export const Sidebar = () => {
  return (
    <>
        <Flex align='center' justify='center'>
            <div className='logo'>
                <img src="/img/logo-removebg-preview.png" style={{height: '50px'}}/>
            </div>
        </Flex>

        <Menu 
            mode='inline' 
            defaultSelectedKeys={['1']} 
            className='menu-bar'
            items={[
                {
                    key: '1',
                    icon: <UserOutlined />,
                    label: 'Dashboard',
                },
                {
                    key: '2',
                    icon: <CarryOutOutlined />,
                    label: 'My pglists',
                },
                {
                    key: '3',
                    icon: <OrderedListOutlined />,
                    label: 'ToDO',
                },
                {
                    key: '4',
                    icon: <ProfileOutlined />,
                    label: 'Profile',
                },
                {
                    key: '5',
                    icon: <SettingOutlined />,
                    label: 'Setting',
                },
                {
                    key: '6',
                    icon: <LogoutOutlined />,
                    label: 'Logout',
                }
            ]}

        />
    </>
  )
}
