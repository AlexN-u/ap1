import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
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
                <Container>
                    {users.map(u => <Row key={u.id}>

                        <Col className="my-2">
                            <span>
                                <Link to={'/profile/' + u.id}>
                                    <div>NAME: {u.name}</div>
                                </Link>
                                <div>USERNAME: {u.username}</div>
                                <div>COMPANY: {u.company.name}</div>
                                <div>CITY: {u.address.city}</div>
                            </span>
                        </Col>
                    </Row>)
                    }
                </Container>)}
        </div>
    )
}

export default Friends;