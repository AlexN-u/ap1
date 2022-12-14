import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from "../context/context";



export default function Login() {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const { state, dispatch } = useContext(AuthContext);

  useEffect(() => {
    forceUpdate({});
  }, []);
  const onFinish = (values) => {
    if (values.username === localStorage.getItem('username') && values.password === localStorage.getItem('password')) {
      dispatch({ type: 'setIsAuth' });
    } else {
        message.error('Username or password entered incorrectly');
        form.resetFields();
    }
  }

  return (
    <div>
      {!state.isAuth ?
        <>
          <h1 style={{ textAlign: 'center' }}> Please login </h1>
          <Form form={form} name="horizontal_login" layout="horizontal" onFinish={onFinish} autoComplete="off">
            <div className='d-flex justify-content-center'>
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                  {min: 5,
                  message:'Min lenghts username 5 symbols'}
                ]}
              >
                <Input style={{ width: 200 }} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
              </Form.Item></div>
            <div className='d-flex justify-content-center'>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                  style={{ width: 200 }}
                />
              </Form.Item></div>
            <Form.Item shouldUpdate className='d-flex justify-content-center'>
              {() => (
                <div className='d-flex justify-content-center'>
                  <Button
                    style={{ width: 200 }}
                    type="primary"
                    htmlType="submit"
                    disabled={
                      !form.isFieldsTouched(true) ||
                      !!form.getFieldsError().filter(({ errors }) => errors.length).length
                    }
                  >
                    Log in
                  </Button></div>
              )}
            </Form.Item>
          </Form>
        </>
        :
        <Navigate to={'/profile/1'} />}
    </div>
  );
};