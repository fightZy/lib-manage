import { Button, Form, Input, Modal,List } from 'antd';
import React , {  useState } from 'react';

export default function Message() {

    // todo 获取所有留言信息
    const data = [
        {
            key: '1',
            username: 'a',
            id: '2313213213',
            content: "weqewqeeeeeewqweqweqe"
        },
        {
            key: "2",
            username: 'a',
            id: '1231231',
            content: "weqewqeeeeeewqweqweqe"
        }
    ]
    let [sendvis, setSendvis] = useState(false)
    return <List
        style={{ margin: "30px 50px" }}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, i) => {
            return <List.Item key={i}
                actions={[<a >已阅</a>,
                <a onClick={() => { Modal.info({title:item.username,content:item.content}) }}>查看详情</a>,
                <a onClick={()=>{ setSendvis(true)}}>回复</a>]} >
                    <Modal
                        title="填写信息"
                        visible={sendvis}
                        onOk={(e) => { setSendvis(false); console.log(e.target); }}
                        onCancel={() => { setSendvis(false) }}
                        footer={true}
                    >
                        <Form 
                        name="senddata"
                        onFinish={(e) => {
                            // todo 根据item.id发送 e 到后端发送给对应用户
                            console.log(e,item.id);


                            sendsuccend('发送成功');
                            setSendvis(false)
                        }}>
                            <Form.Item label="标题" name="title"><Input /></Form.Item>
                            <Form.Item label="内容" name="content"><Input.TextArea autoSize={{ minRows: 3 }} /></Form.Item>
                            <Form.Item ><Button htmlType="submit" type="primary" >发送</Button></Form.Item>
                        </Form>
                    </Modal>
                <List.Item.Meta
                    title={item.username}
                    description={item.content}
                />
                {item.id}
            </List.Item>
        }}
    />
}


function sendsuccend(mes) {
    Modal.success({
        title: mes
    })
}