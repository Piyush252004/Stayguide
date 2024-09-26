// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export const Dashboard = () => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/admin-pannel', { replace: true });
//   }

//   return (
//     <>
//       <div>This is dashboard for admin</div>
//       <div>
//         <button onClick={handleClick}
//           style={{
//             width: '100%',
//             padding: 10,
//             fontSize: 16,
//             backgroundColor: '#337ab7',
//             color: '#fff',
//             border: 'none',
//             borderRadius: 5,
//             cursor: 'pointer',
//           }}>click to add details</button>
//       </div>
//     </>
//   )
// }

import React, { useState } from 'react';
import { Flex, Layout,Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Sidebar } from './Sidebar';
import { CustomHeader } from './Header';
import { MainContent } from './MainContent';
import { SideContent } from './SideContent';

const { Sider, Header, Content }= Layout;
export const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider 
        theme='light' 
        trigger={null} 
        collapsible 
        collapsed={collapsed} 
        className='sider'>
        <Sidebar />
        <Button 
          type='text' 
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          className='triger-btn'
        />
      </Sider>
      <Layout>
        <Header className='header'>
          <CustomHeader />
        </Header>
        <Content className='content'>
          <Flex gap='large'>
            <MainContent />
            <SideContent/>
          </Flex>
          
        </Content>
      </Layout>
    </Layout>
  )
}
