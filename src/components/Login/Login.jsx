import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from "../context/context";



export default function Login() {
  const [form, reset] = Form.useForm();
  const [, forceUpdate] = useState({});
  const { state, dispatch } = useContext(AuthContext);

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);
  const onFinish = (values) => {
    if (values.username === localStorage.getItem('username') && values.password === localStorage.getItem('password')) {
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
          <center>
            <Form form={form} name="horizontal_login" layout="vertical" onFinish={onFinish} autoComplete="off">
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input style={{ width: 200 }} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
              </Form.Item>
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
              </Form.Item>
              <Form.Item shouldUpdate>
                {() => (
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
                  </Button>
                )}
              </Form.Item>
            </Form>
          </center>
        </>
        :
        <Navigate to={'/profile/1'} />}
    </div>
  );
};