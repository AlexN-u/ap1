import { StarOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Row } from "antd";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import AuthContext from "../../context/context";


function Friends() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const { state } = useContext(AuthContext);

    useEffect(() => {
        setLoading(true);
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        axios.get(apiUrl).then((res) => {
            setLoading(false);
            setUsers(res.data);
        });
    }, []);
    
    if (state.isAuth === false) return <Navigate to={'/login'} />

    return (
        <div>
            {loading &&
                <div>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>}
            {!loading && (
                <Container >
                    {users.map(u =>
                        <Row key={u.id}>
                            <Col className="my-3" span={3}>
                                <div>
                                    <Avatar
                                        size={{ xl: 80 }}
                                        style={{
                                            backgroundColor: '#87d068',
                                        }}
                                        icon={<UserOutlined />} /> </div>
                                <div className='d-flex justify-content-center'>
                                    <Button shape="circle" icon={<StarOutlined />} size="large" />
                                </div>
                            </Col>
                            <Col className="my-2" span={21}>
                                    <Link to={'/profile/' + u.id}>
                                        <div>NAME: {u.name}</div>
                                    </Link>
                                    <div>USERNAME: {u.username}</div>
                                    <div>COMPANY: {u.company.name}</div>
                                    <div>CITY: {u.address.city}</div>
                            </Col>
                        </Row>)
                    }
                </Container>)}
        </div>
    )
}
export default Friends;