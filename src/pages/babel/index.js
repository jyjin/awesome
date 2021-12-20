import React, { useEffect, useState } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { Row, Col } from 'antd';
import { JsonViewer } from '@/components';
import { useRequest } from 'umi';
import { runBabel } from '../lowcode/service';
import { Loading } from '@/components';


const BabelEditor = () => {

  const [escode, setEscode] = useState('')

  const babelResult = useRequest(runBabel, {
    manual: true
  });

  function handleChange(e) {
    babelResult.run(e.target.value);
  }

  useEffect(() => {
    if(babelResult.data?.res > 0 && babelResult.data?.data){
      setEscode(babelResult.data.data);
    }
  }, [babelResult.data])

  return (
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <CodeEditor
          value={''}
          language="js"
          placeholder="Please enter JS code."
          onChange={handleChange}
          padding={15}
          style={{
            fontSize: 12,
            borderRadius: 8,
            backgroundColor: "#fff",
            height: 'calc(100vh - 160px)',
            overflow: 'auto',
            fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
          }}
        /></Col>

      <Col span={12}>
        {!babelResult.loading ?
          <JsonViewer text={escode} />
          : <Loading />
        }
      </Col>
    </Row>
  )
}

export default BabelEditor;
