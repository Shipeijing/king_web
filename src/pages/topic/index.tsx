import { useState, useEffect } from 'react';
import { useRequest } from '@umijs/hooks';
import styles from './styles.less';
import { Timeline, message } from 'antd';
import React from 'react';
import { connect } from 'dva';

function mapStateToProps(state) {
  const { dataList } = state.topIc;
  return {
    dataList
  }
}
function topIc({ dispatch, dataList }) {
  const [id, setId] = useState(1)
  const { data } = useRequest({
    url: 'http://localhost:8000/king',
    method: 'get'
  }, {
    onSuccess: (result, params) => {
      message.success(`The username was changed to`);
    }, onError: (result, params) => {
      console.log(result, params)
      message.success(`The use t`);
    }
  })
  useEffect(() => {

    // dispatch({ type: 'topIc/changedataList' })
  })
  return (
    <div className={styles.topic}>
      <Timeline mode='left'>
        {
          dataList.map((item, index) => {
            return <Timeline.Item key={index} label={item.type}>{item.text}</Timeline.Item>
          })
        }
      </Timeline>
    </div>
  );
}
export default connect(mapStateToProps)(topIc)