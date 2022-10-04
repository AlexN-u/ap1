import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router";
import AuthContext from "../context/context";

const Login = () => {

    const { state, dispatch } = useContext(AuthContext);

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onBlur'
    });

    const onSubmit = (data) => {
        if (data.username === localStorage.getItem('username') && data.password === localStorage.getItem('password')) {
            dispatch({ type: 'setIsAuth' });
        } else {
            alert('no')
        }
        reset()
    }

    return (

        <div>
            {!state.isAuth ?
                <><h1> LOGIN </h1><form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input
                            {...register('username',
                                {
                                    required: 'Обязательное поле',
                                    minLength: {
                                        value: 5,
                                        message: 'Минимальное количество символов 5'
                                    }
                                })}
                            placeholder='username' />
                    </div>
                    <div> {errors?.username && <p>{errors?.username?.message || 'ERROR'}</p>} </div>
                    <div>
                        <input
                            {...register('password',
                                {
                                    required: 'Обязательно поле',
                                })}
                            placeholder='password'
                            type='password' />
                    </div>
                    <div> {errors?.password && <p>{errors?.password?.message || 'ERROR'}</p>} </div>
                    <div>
                        <input type='submit' disabled={!isValid} />
                    </div>
                </form></>
                :
                <Navigate to={'/profile/1'} />}
        </div>
    )
}

export default Login;

