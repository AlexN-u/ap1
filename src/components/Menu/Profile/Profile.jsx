import { UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Row } from "antd";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useParams } from "react-router-dom";
import AuthContext from "../../context/context";

const Profile = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const { state } = useContext(AuthContext);

    useEffect(() => {
        setLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/users/' + id)
            .then((res) => {
                setLoading(false)
                setUser(res.data)
            });
    }, [id]);

    if (state.isAuth === false) return <Navigate to={'/login'} />

    return (
        <>
            <div>
                {loading &&
                    <div>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>}
                {!loading && (
                    <div>
                        {user && (
                            <>
                                <Row>
                                    <Col span={4} >
                                        <Avatar
                                            size={{ xl: 150 }}
                                            style={{
                                                backgroundColor: '#87d068',
                                            }}
                                            icon={<UserOutlined />} />
                                    </Col>
                                    <Col span={20}>
                                        <h1>
                                            <div>{user.name}</div>
                                            <div>{user.email}</div>
                                            <div>{user.address.city}</div>

                                        </h1>
                                    </Col>
                                </Row>
                            </>

                        )}
                    </div>
                )}
            </div>
        </>
    )
}

export default Profile;