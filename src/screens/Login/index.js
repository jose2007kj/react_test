import React from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from './actions'
import { Button, Checkbox, Form, Input } from 'antd'; 
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
    const dispatch = useDispatch()
    const onFinish = (values) => { dispatch(loginUser(values)) 
	    console.log('Success:', values);
    }
  const onFinishFailed = (errorInfo) => {
	    console.log('Failed:', errorInfo);
	  };
	
	const navigate = useNavigate();
  	const auth = useSelector((store) => store.user);
	React.useEffect(()=>{
		var t = localStorage.getItem('tranzmeo_token')
		if(t)   navigate('/')
	},[auth])
	return (
		<>
    	<Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form></>
	)
}
export default Login


