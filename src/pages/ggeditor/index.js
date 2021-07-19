import React from 'react';
import GGEditor, { Mind } from 'gg-editor';
import styles from './index.less';

const data1 = {
  roots: [
    {
      id: '0',
      label: 'jyjin',
      collapsed: false,
      children: [
        {
          id: '1',
          side: 'left',
          label: 'Main Topic 1',
        },
        {
          id: '2',
          side: 'right',
          label: 'Main Topic 2',
        },
        {
          id: '3',
          side: 'right',
          label: 'Main Topic 3',
        },
      ],
    }
  ],
}

class ggEditor extends React.Component{
  render(){
    return (
      <GGEditor>
        <Mind className={styles.graph} data={data1} />
      </GGEditor>
    );
  }
}

export default ggEditor;
