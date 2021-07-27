import React from 'react';
import ReactDOM from 'react-dom';
import { sortable } from 'react-sortable';
import st from './index.less';

function Item(props) {
  return <li {...props}>{props.children}</li>;
}

const SortItem = sortable(Item);

export default SortItem;
