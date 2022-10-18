import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";


function EconomyNews() {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
        axios.get(apiUrl).then((res) => {
            setLoading(false);
            setNewsData(res.data);
        });
    }, []);

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
                    {newsData.map(n => <Row key={n.id}>

                        <Col className="my-2">
                            <span>
                                <div>TITLE: {n.title}</div>
                            </span>
                        </Col>
                    </Row>)
                    }
                </Container>)}
        </div>
    )
}

export default EconomyNews;
