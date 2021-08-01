import { inject, observer } from 'mobx-react';
import { Form, Input, Card } from 'antd';
import st from './index';

const SectionSetting = (props) => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const field = props.lcStore.getField();
  const section = props.lcStore.getSection();
  if (!section) {
    return null;
  }

  return (
    <Card title="基本信息" bordered={false} style={{ width: '100%' }}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="标题"
          name={section.code}
          rules={[{ required: true, message: '字段名' }]}
        >
          <Input value={section.name} />
        </Form.Item>
        <Form.Item
          label="列"
          name={section.code}
          rules={[{ required: true, message: '字段名' }]}
        >
          <Input value={section.cols} />
        </Form.Item>
        <Form.Item
          label="可见"
          name={section.code}
          rules={[{ required: true, message: '字段名' }]}
        >
          <Input value={section.cols} />
        </Form.Item>
      </Form>
    </Card>
  );
};

export default inject('lcStore')(observer(SectionSetting));
