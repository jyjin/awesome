import { useState, useCallback } from 'react';
import { Card } from './Card';
import update from 'immutability-helper';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Button } from 'antd';

const data = [
  {
    id: 1,
    text: 'Write a cool JS library',
  },
  {
    id: 2,
    text: 'Make it generic enough',
  },
  {
    id: 3,
    text: 'Write README',
  },
  {
    id: 4,
    text: 'Create some examples',
  },
  {
    id: 5,
    text: '这里的小块块，随便拖拽',
  },
  {
    id: 6,
    text: '???',
  },
  {
    id: 7,
    text: 'PROFIT',
  },
];

const Container = () => {
  const style = {
    width: '100%',
  };
  const row = {
    display: 'flex',
    flexWrap: 'wrap',
  };
  const [layout, setLayout] = useState('list');
  const [cards, setCards] = useState(data);

  const changeLayout = () => {
    if (layout === 'list') {
      setLayout('row');
    } else {
      setLayout('list');
    }
  };

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = cards[dragIndex];

      cards.splice(dragIndex, 1);
      cards.splice(hoverIndex, 0, dragCard);

      // setCards(update(cards, {
      //     $splice: [
      //         [dragIndex, 1],
      //         [hoverIndex, 0, dragCard],
      //     ],
      // }));

      setCards([...cards]);
    },
    [cards],
  );
  const renderCard = (card, index) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        text={card.text}
        moveCard={moveCard}
      />
    );
  };

  let st = layout === 'row' ? { ...style, ...row } : style;
  return (
    <>
      <Button type="primary" onClick={changeLayout}>
        测试布局对拖拽的影响
      </Button>

      <div style={st}>{cards.map((card, i) => renderCard(card, i))}</div>
    </>
  );
};

const DndSort = () => {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <h1>React-Dnd拖拽排序演示</h1>
        <Container />
      </DndProvider>
    </div>
  );
};

export default DndSort;
