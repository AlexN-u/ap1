import React, { useContext } from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/context";

const Header = () => {
    const { state, dispatch } = useContext(AuthContext);
    return (
        <Container fluid className="my-1">
            <Row>
                <Col sm={2} className='bg-secondary'>
                    <Image src='https://static7.depositphotos.com/1297553/795/i/600/depositphotos_7951909-stock-photo-team-of-lifting-it-information.jpg' roundedCircle height='50px' className="my-1" />
                </Col>
                <Col className="bg-secondary d-flex justify-content-end">
                    <>
                        {!state.isAuth ?
                            <Button className="my-1" variant="dark">
                                <NavLink to={'/login'}>Вход</NavLink>
                            </Button>
                            :
                            <Button className="my-1" variant="dark" onClick={() => dispatch({ type: 'delIsAuth' })}>
                                <NavLink to={'/'}>Выход</NavLink>
                            </Button>}
                    </>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;