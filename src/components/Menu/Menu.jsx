import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink, Route, Routes } from "react-router-dom";
import Friends from "./Friends/Friends";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import News from './News/News'
import Login from "../Login/Login";



const Menu = () => {
    return (
        <Container>
            <Row>
                <Col md={2} className='bg-info'>
                    <div>
                        <NavLink to='/'>Home</NavLink>
                    </div>
                    <div>
                        <NavLink to='/profile'>Profile</NavLink>
                    </div>
                    <div>
                        <NavLink to='/friends'>Friends</NavLink>
                    </div>
                    <div>
                        <NavLink to='/news'>News</NavLink>
                    </div>
                </Col>
                <Col md={10} className='bg-light'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/profile/:id' element={<Profile />} />
                        <Route path='/friends' element={<Friends />} />
                        <Route path='/news' element={<News />} />
                        <Route path='/login' element={<Login />} />
                    </Routes>
                </Col>
            </Row>
        </Container>

    )
}

export default Menu;