import React, { useState } from 'react';
import SortItem from './SortItem';

function SortList(props) {
  const [items, setItems] = useState(props.items);

  function onSortItem(items) {
    console.log('items === ', items);
    setItems([...items]);
  }
  console.log('items render === ', items);

  return (
    <ul className="sortable-list">
      {items.map((item, i) => {
        return (
          <SortItem key={i} onSortItems={onSortItem} items={items} sortId={i}>
            {item}
          </SortItem>
        );
      })}
    </ul>
  );
}

export default () => {
  var items = [
    '人最宝贵的生命',
    '人的生命只有一次',
    '人的一生应当这样度过',
    '不因碌碌无为而羞愧',
    '不因虚度年华而悔恨',
    '这样在我们寿终正寝的时候',
    '就可以对自己说',
    '我的整个生命和全部精力',
    '都奉献给了',
    '人类最伟大最壮丽的事业',
    '——为共产主义而奋斗',
  ];

  return (
    <>
      <h1>React-sortable拖拽演示</h1>
      <SortList items={items} />
    </>
  );
};
