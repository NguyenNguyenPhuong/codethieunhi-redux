import React, { useState } from 'react';
import { Form, Input, Select, Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

const FormAdd = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    setIsModalVisible(false);
  };
  const showModal = () => {
    setIsModalVisible(true); 
    form.resetFields();
  };
  return (
    <div>
      <Button className="btn-add-mew" type="primary" onClick={showModal}>
        <PlusOutlined /> Add
      </Button>
      <Modal title="Add new user" visible={isModalVisible} footer={null}>
        <Form form={form} name="register" onFinish={onFinish} scrollToFirstError>
          <Form.Item
            name="name"
            label="Name"
            tooltip="What do you want others to call you?"
            rules={[{ required: true, message: 'Please input your name!', whitespace: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="age"
            label="Age"
            rules={[{ required: true, message: 'Please input your name!', whitespace: true }]}
          >
            <Input type="number" min={1} max={140} />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender"
            hasFeedback
            rules={[{ required: true, message: 'Please select your gender!' }]}
          >
            <Select placeholder="Please select gender">
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
              <Option value="Other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="address"
            label="Address"
            rules={[
              {
                required: true,
                message: 'Please input your address!',
              },
            ]}
          >
            <Input.TextArea showCount maxLength={100} />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input style={{ width: '100%' }} type="number" />
          </Form.Item>

          <Form.Item
            name="birthday"
            label="Birthday"
            rules={[{ required: true, message: 'Please input your birthday!' }]}
          >
            <Input style={{ width: '100%' }} type="date" />
          </Form.Item>

          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>

          <Button type="primary" htmlType="submit">
            Register
          </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default FormAdd;
