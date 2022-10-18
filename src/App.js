import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Menu/Home/Home';
import Profile from './components/Menu/Profile/Profile';
import FriendsAPI from './components/Menu/Friends/FriendsAPI';
import Friend from './components/Menu/Friends/Friend';
import FavoriteFriends from './components/Menu/Friends/FavoriteFriends';
import News from './components/Menu/News/News';
import Login from './components/Login/Login';
import { Avatar, Button, Col, Layout, Menu, Row } from 'antd';
import React, { useContext } from 'react';
import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import AuthContext from './components/context/context';
import { DollarOutlined, HomeOutlined, ProfileOutlined, ReadOutlined, StarOutlined, TeamOutlined, UserAddOutlined, UserOutlined, WalletOutlined } from '@ant-design/icons';
import EconomyNews from './components/Menu/News/Economy news';
const { Header, Content, Footer, Sider } = Layout;


function App() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(AuthContext);

  localStorage.setItem('username', 'admin');
  localStorage.setItem('password', '12345');
  return (
    <Layout>
      <Header className="header">
        <Row>
          <Col span={20} >
            <Link to='/'> <Image src='https://static7.depositphotos.com/1297553/795/i/600/depositphotos_7951909-stock-photo-team-of-lifting-it-information.jpg' roundedCircle height='55px' className="my-1" />
            </Link>
          </Col>
          <>
            {!state.isAuth ?
              <Col span={3} className='d-flex justify-content-end'>
                <Button className="my-3">
                  <NavLink to={'/login'}>Вход</NavLink>
                </Button>
              </Col>
              :
              <>
                <Col span={1} className='d-flex justify-content-end'>
                  <Link to='/profile/1'> <Avatar
                    style={{
                      backgroundColor: '#87d068',
                    }}
                    icon={<UserOutlined />}
                    className="my-3" /> </Link>
                </Col>
                <Col span={3} className='d-flex justify-content-center' >
                  <Button className="my-3" onClick={() => dispatch({ type: 'delIsAuth' })}>
                    <NavLink to={'/'}>Выход</NavLink>
                  </Button>
                </Col>
              </>}
          </>
        </Row>
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Layout
          className="site-layout-background"
          style={{
            padding: '24px 0',
          }}
        >
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              style={{
                height: '100%',
              }}
              onClick={({ key }) => {
                navigate(key)
              }}
              defaultSelectedKeys={window.location.pathname}
              items={[
                {
                  label: 'Home',
                  key: '/',
                  icon: <HomeOutlined />
                },
                {
                  label: 'Profile',
                  key: '/profile',
                  icon: <ProfileOutlined />,
                },
                {
                  label: 'Friends',
                  key: '/friends',
                  icon: <TeamOutlined />,
                  children: [
                    { label: 'My friends API', key: 'friends', icon: <UserOutlined /> },
                    { label: 'My friend', key: 'friend', icon: <UserAddOutlined /> },
                    { label: 'Favorite friends', key: 'favorite', icon: <StarOutlined /> },
                  ]
                },
                {
                  label: 'News',
                  icon: <ReadOutlined />,
                  children: [
                    { label: 'Finance', key: 'newsfin', icon: <DollarOutlined /> },
                    { label: 'Economy', key: 'newsecon', icon: <WalletOutlined /> }
                  ]
                },
              ]}
            />
          </Sider>
          <Content
            style={{
              padding: '0 24px',
              minHeight: 280,
            }}
          >
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/profile/:id' element={<Profile />} />
              <Route path='/friends' element={<FriendsAPI />} />
              <Route path='/newsfin' element={<News />} />
              <Route path='/newsecon' element={<EconomyNews />} />
              <Route path='/login' element={<Login />} />
              <Route path='/friend' element={<Friend />} />
              <Route path='/favorite' element={<FavoriteFriends />} />
            </Routes>
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;