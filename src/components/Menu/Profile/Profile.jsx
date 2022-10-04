import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useParams } from "react-router-dom";
import AuthContext from "../../context/context";

const Profile = (props) => {
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
                                <h1>{user.name}</h1>
                            </>
                        )}
                    </div>
                )}
            </div>
        </>
    )
}

export default Profile;