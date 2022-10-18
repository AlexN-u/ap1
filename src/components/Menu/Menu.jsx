import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import News from './News/News'
import Login from "../Login/Login";
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FriendsAPI from './Friends/FriendsAPI';
import Friend from './Friends/Friend';
import FavoriteFriends from './Friends/FavoriteFriends';
import { Layout, Menu } from 'antd';
import { DollarOutlined, HomeOutlined, ProfileOutlined, ReadOutlined, StarOutlined, TeamOutlined, UserAddOutlined, UserOutlined, WalletOutlined } from '@ant-design/icons';
import EconomyNews from './News/Economy news';
const { Content, Sider } = Layout;



export default function Menuu() {
    const navigate = useNavigate();

    return (
        <Content
            style={{
                padding: '0 50px',
            }}>
            <Layout
                className="site-layout-background"
                style={{
                    padding: '24px 0',
                }}>
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
                    }}>
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
    )
}

