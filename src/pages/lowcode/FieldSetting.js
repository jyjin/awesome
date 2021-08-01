import { inject, observer } from 'mobx-react';
import { Form, Input, Card } from 'antd';
import st from './index';

const FieldSetting = (props) => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const field = props.lcStore.getField();
  if (!field) {
    return null;
  }

  return (
    <>
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
            label="标签"
            name={field.code}
            rules={[{ required: true, message: '字段名' }]}
          >
            <Input value={field.name} />
          </Form.Item>
          <Form.Item
            label="编码"
            name={field.code}
            rules={[{ required: true, message: '字段名' }]}
          >
            <Input value={field.cols} />
          </Form.Item>
          <Form.Item
            label="描述"
            name={field.code}
            rules={[{ required: true, message: '字段名' }]}
          >
            <Input value={field.cols} />
          </Form.Item>
          <Form.Item
            label="必填"
            name={field.code}
            rules={[{ required: true, message: '字段名' }]}
          >
            <Input value={field.cols} />
          </Form.Item>
          <Form.Item
            label="可见"
            name={field.code}
            rules={[{ required: true, message: '字段名' }]}
          >
            <Input value={field.cols} />
          </Form.Item>
          <Form.Item
            label="可编辑"
            name={field.code}
            rules={[{ required: true, message: '字段名' }]}
          >
            <Input value={field.cols} />
          </Form.Item>
          <Form.Item
            label="占位符"
            name={field.code}
            rules={[{ required: true, message: '字段名' }]}
          >
            <Input value={field.cols} />
          </Form.Item>
          <Form.Item
            label="帮助文本"
            name={field.code}
            rules={[{ required: true, message: '字段名' }]}
          >
            <Input value={field.cols} />
          </Form.Item>
        </Form>
      </Card>
      <Card title="属性信息" bordered={false} style={{ width: '100%' }}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="默认值"
            name={field.code}
            rules={[{ required: true, message: '字段名' }]}
          >
            <Input value={field.name} />
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default inject('lcStore')(observer(FieldSetting));
