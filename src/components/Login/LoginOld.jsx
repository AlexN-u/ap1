import AuthContext from "../context/context";
import React, { useContext } from "react";
import { Button, Input } from "antd";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router";
import { LockOutlined, UsbFilled, UserAddOutlined, UserDeleteOutlined, UserOutlined } from "@ant-design/icons";

const Login = () => {

    const { state, dispatch } = useContext(AuthContext);

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onChange"
    });

    const onSubmit = (data) => {
        if (data.username === localStorage.getItem('username') && data.password === localStorage.getItem('password')) {
            dispatch({ type: 'setIsAuth' });
        } else {
            <h1> {<p>'ERROR'</p>}</h1>
        }
        reset()
    }

    return (

        <div>
            {!state.isAuth ?
                <>
                    <h1 style={{ textAlign: 'center' }}> Please login </h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="d-flex justify-content-center bg-primary">
                            <input style={{ width: 250 }}
                                {...register('username',
                                    {
                                        required: 'Please input your username!',
                                        minLength: {
                                            value: 5,
                                            message: 'Min lenghts 5 symbols'
                                        }
                                    })}
                                placeholder='username'
                            />
                        </div>
                        <div className="d-flex justify-content-center bg-danger">
                            {errors?.username && <p>{errors?.username?.message || 'ERROR'}</p>}
                        </div>
                        <div className="d-flex justify-content-center ">
                            <input style={{ width: 250 }}
                                {...register('password',
                                    {
                                        required: 'Please input your password!',
                                    })}
                                placeholder='password'
                                type='password'
                            />
                        </div>
                        <div className="d-flex justify-content-center">
                            {errors?.password && <p>{errors?.password?.message || 'ERROR'}</p>}
                        </div>
                        <div className="d-flex justify-content-center">
                            <button 
                            type="submit" 
                            disabled={!isValid}
                            style={{width:250}}>
                                Log in
                            </button>
                        </div>
                    </form>
                </>
                :
                <Navigate to={'/profile/1'} />}
        </div>
    )
}

export default Login;
