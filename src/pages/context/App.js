import React from 'react';
import { JsonViewer } from '@/components';
import Store from './Store';

export default (props) => {
  const storeProps = React.useContext(Store);
  console.log('context == ', props, storeProps);
  return (
    <div>
      I am a app;
      <JsonViewer json={storeProps} />
    </div>
  );
};
