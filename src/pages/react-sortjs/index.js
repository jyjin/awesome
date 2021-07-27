import { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import st from './index.less';

export default () => {
  var data = [
    {
      id: 1,
      name: '人最宝贵的生命',
      chosen: false,
    },
    {
      id: 2,
      name: '人的生命只有一次',
      selected: false,
    },
    {
      id: 3,
      name: '人的一生应当这样度过',
    },
  ];

  const [state, setState] = useState(data);

  return (
    <>
      <h1>React-sortablejs拖拽演示</h1>
      <h4>
        亮点：可以定制拖拽的虚线样式,{' '}
        <a
          href="https://hub.fastgit.org/SortableJS/Sortable#options"
          target="_blank"
        >
          戳我API
        </a>
      </h4>
      <ReactSortable
        // group="groupName"
        animation={200}
        // delayOnTouc
        list={state}
        setList={setState}
        ghostClass={st['sortable-ghost']} // Class name for the drop placeholder
        chosenClass={st['sortable-chosen']} // Class name for the chosen item
        dragClass={st['sortable-drag']} // Class name for the dragging item
      >
        {state.map((item) => (
          <div
            key={item.id}
            style={{ padding: 10, marginBottom: 14, background: '#fff' }}
          >
            {item.name}
          </div>
        ))}
      </ReactSortable>
    </>
  );
};
