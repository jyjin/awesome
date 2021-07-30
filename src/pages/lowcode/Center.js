import { useEffect, useState } from 'react';
import { Layout, Button, Card, Space, Tag } from 'antd';
import { history } from 'umi';
import { Icon } from '@/components';
import { DropTarget } from 'react-dnd';
import DragBox from './Section';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import { ReactSortable } from 'react-sortablejs';
import st from './index.less';

const Center = inject('lcStore')(
  observer((props) => {
    // console.log('center update == ', toJS(props.lcStore.sections));

    const moveCard = (sections) => {
      // 修复最后一个往前拖动会有undefined的bug
      const _sections = sections.filter((v) => v !== undefined);
      props.lcStore.sortSection(_sections);
    };

    const SpaceRow = () => <div style={{ width: '100%', height: 24 }}></div>;

    return (
      <Layout className={st['lc-content-center']}>
        <Card
          size="small"
          title="视图操作按钮"
          style={{ borderColor: '#d8d8d8' }}
        >
          <Tag
            style={{
              height: 30,
              lineHeight: '30px',
              display: 'inline-block',
              width: '100%',
              border: '1px dashed #2979ff',
              background: '#f2f7ff',
              color: '#8c8c8c',
              textAlign: 'center',
            }}
          >
            你可以拖动左侧组件完成设置
          </Tag>
        </Card>
        <SpaceRow />
        <ReactSortable
          key={'sections'}
          animation={200}
          list={props.lcStore.sections}
          setList={moveCard}
          chosenClass={st['sortable-chosen']} // Class name for the chosen item
          dragClass={st['sortable-drag']} // Class name for the dragging item
        >
          {props.lcStore.sections.map((section) => {
            return (
              <>
                <DragBox
                  key={'dragbox-' + section.id.toString()}
                  allowedDropEffect="move"
                  name={section.name}
                  id={section.id}
                  section={section}
                />
                <SpaceRow key={'row' + section.id.toString()} />
              </>
            );
          })}
        </ReactSortable>
      </Layout>
    );
  }),
);

export default Center;
