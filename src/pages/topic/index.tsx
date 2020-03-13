import { useState, useEffect } from 'react';
import { useRequest } from '@umijs/hooks';
import styles from './styles.less';
import { Timeline, Drawer, message, Form, Input, InputNumber, Button } from 'antd';
import React from 'react';
import { connect } from 'dva';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const validateMessages = {
  required: 'This field is required!',
  types: {
    email: 'Not a validate email!',
    number: 'Not a validate number!',
  },
  number: {
    range: 'Must be between ${min} and ${max}',
  },
};
function mapStateToProps(state) {
  const { dataList } = state.topIc;
  return {
    dataList
  }
}
const onFinish = (values: any) => {
  console.log(values);
};
function topIc({ dispatch, dataList }) {
  const [visible, setVisible] = useState(false)
  useRequest({
    url: 'http://localhost:7001/getTopIc?id=1',
    method: 'get'
  }, {
    onSuccess: (result, params) => {
      const res = result.result
      dispatch({ type: 'topIc/changedataList', payload: res })
    }, onError: (result, params) => {
      message.success(`The use t`);
    }
  })
  function addTopIc() {
    return (
      <Drawer
        width="500"
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={() => { setVisible(false) }}
        visible={visible}
      >
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
            <InputNumber />
          </Form.Item>
          <Form.Item name={['user', 'website']} label="Website">
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'introduction']} label="Introduction">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
        </Button>
          </Form.Item>
        </Form>
      </Drawer>
    )
  }



  return (
    <div className={styles.topic}>
      {addTopIc()}
      <Button className={styles.addBut} type="primary" onClick={() => { setVisible(true) }}>
        发布新动态
        </Button>
      <div className={styles.body}>
        <Timeline mode='left'>
          {
            dataList.map((item, index) => {
              return <Timeline.Item key={index} label={item.time}>{item.text}</Timeline.Item>
            })
          }
        </Timeline>
      </div>
    </div>
  );
}
export default connect(mapStateToProps)(topIc)