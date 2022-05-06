import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Table, Space, Modal, Button } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import FormAdd from './formAdd';
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    gender: 'Male',
    address: 'New York No. 1 Lake Park',
    phone: 1234567890,
    birthday: '10-10-2000',
    email: 'msm@getMaxListeners.com',
  },
];
const UserList = () => {
  const [initData, setInitData] = useState(data);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Birthday',
      dataIndex: 'birthday',
      key: 'birthday',
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <Space size="middle">
          <EditOutlined />
          <DeleteOutlined />
        </Space>
      ),
    },
  ];

  

  return (
    <div>
      <h1 className="h1-title">User Management</h1>

      <FormAdd />

      <Table columns={columns} dataSource={initData} />
    </div>
  );
};

export default UserList;
