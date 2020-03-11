import { useState, useEffect } from 'react';
import styles from './styles.less';
import { Timeline } from 'antd';
import React from 'react';
import { connect } from 'dva';
export default connect(state => state)((props) => {
  console.log(props)
  const [topIc, setTopIc] = useState([])
  const [id, setId] = useState(1)
  useEffect(() => {

  })
  return (
    <div className={styles.topic}>
      <Timeline mode='left'>
        <Timeline.Item label="2015-09-01">Create a services</Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">Solve initial network problems</Timeline.Item>
        <Timeline.Item>Technical testing</Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
      </Timeline>
    </div>
  );
})