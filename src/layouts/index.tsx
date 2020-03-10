import MyHeader from '@/component/header';
import MyFooter from '@/component/Footer';
import React from 'react';

export default function(props: any) {
  return (
    <div>
      <MyHeader />
      {props.children}
      <MyFooter />
    </div>
  );
}
