import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Image } from 'react-bootstrap';
import AuthContext from "../context/context";
import { Link } from 'react-router-dom';
import { Avatar, Button, Col, Layout, Row } from 'antd';
import { UserOutlined } from "@ant-design/icons";
const { Header } = Layout;


export default function Header1 () {
    const { state, dispatch } = useContext(AuthContext);
    return (
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
                  <NavLink to={'/login'}>Login</NavLink>
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
                    <NavLink to={'/'}>Logout</NavLink>
                  </Button>
                </Col>
              </>}
          </>
        </Row>
      </Header>
    );
}

