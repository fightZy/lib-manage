import { Button, Descriptions, Form, Input, Table, Modal } from 'antd';
import { CheckCircleTwoTone, ExclamationCircleTwoTone, MinusCircleTwoTone, ClockCircleTwoTone, SmileTwoTone, FrownTwoTone } from '@ant-design/icons'
import React, { Fragment, useState } from 'react';
const { Item } = Descriptions;

const bookstatus = {
    "0": "借阅中",
    "1": "已归还",
    "2": "已预约",
    "3": "逾期未还"
}
const userstatus = {
    "0": '正常',
    "1": "违约"
}
const icons = {
    '0': <CheckCircleTwoTone style={{ fontSize: 20 }} twoToneColor="#87d932" />,
    '1': <MinusCircleTwoTone style={{ fontSize: 20 }} twoToneColor="#bfbfbf" />,
    '2': <ClockCircleTwoTone style={{ fontSize: 20 }} twoToneColor="#4a90e2" />,
    '3': <ExclamationCircleTwoTone style={{ fontSize: 20 }} twoToneColor="#f60a27" />
}
export default function Allusers() {


    let [sendvis, setSendvis] = useState(false)
    // todo 获取所有用户信息 data
    let data = [
        {
            key: '1',
            id: '1111111',
            username: 'a',
            phone: '2131111111',
            borbooks: [
                { bookname: 'book1', status: '0' },
                { bookname: 'book2', status: '1' },
                { bookname: 'book2', status: '2' },
            ]
        },
        {
            key: '2',
            id: '11111113123',
            username: 'a',
            phone: '2131231111',
            borbooks: [
                { bookname: 'book1', status: '0' },
                { bookname: 'book2', status: '3' },
            ]
        }
    ]

    const colums = [
        {
            title: '用户名',
            dataIndex: 'username'
        },
        {
            title: '电话',
            dataIndex: 'phone'
        },
        {
            title: '状态',
            dataIndex: 'status',
            render: (t, record) => {
                // console.log(record);
                if (record.borbooks.every(e => e.status !== '3')) {
                    return <SmileTwoTone style={{ fontSize: 24 }} twoToneColor="#87d932" />
                } else {
                    return <FrownTwoTone style={{ fontSize: 24 }} twoToneColor="#f1df07" />
                }
            }
        },
        {
            title: '通知',
            dataIndex: "notice",
            render: (text,record) => {

                return <Fragment>
                    <Button onClick={() => { setSendvis(true) }}>发送通知</Button>

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
                            // todo 根据record.id发送 e 到后端发送给对应用户
                            console.log(e,record.id);


                            sendsuccend('发送成功');
                            setSendvis(false)
                        }}>
                            <Form.Item label="标题" name="title"><Input /></Form.Item>
                            <Form.Item label="内容" name="content"><Input.TextArea autoSize={{ minRows: 3 }} /></Form.Item>
                            <Form.Item ><Button htmlType="submit" type="primary" >发送</Button></Form.Item>
                        </Form>
                    </Modal>

                </Fragment>
            }
        }
    ]
    return <Table
        style={{ margin: '20px 30px' }}
        columns={colums}
        dataSource={data}
        expandable={{
            expandedRowRender: (a) => {
                return <Desctipt {...a} />
            }
        }}
    />
}

function Desctipt(props) {
    // console.log(props);
    let [data, setData] = useState({ ...props });
    let { username, id, phone, borbooks } = data;
    let [edit, setEdit] = useState(false);

    function setitem(item) {
        setData(Object.assign({ ...data }, item));
    }

    return <Descriptions
        bordered={true}
        size="default"
        extra={<Button type="primary" onClick={() => setEdit(!edit)}>{edit ? '完成' : '修改'}</Button>}

    >
        {
            edit ?
                <Fragment>
                    <Item label="用户名" span={2}><Input value={username} onChange={({ target: { value } }) => { setitem({ username: value }) }} /></Item>
                    <Item label="id"><Input value={id} onChange={({ target: { value } }) => { setitem({ id: value }) }} /></Item>
                    <Item label="电话"><Input value={phone} onChange={({ target: { value } }) => { setitem({ phone: value }) }} /></Item>
                    <Item label="借书状态">
                        <Descriptions layout="vertical" bordered={true}>
                            {
                                borbooks.map((item,i)=> {
                                    return <Item key={i} label={item.bookname}>{icons[item.status]}{bookstatus[item.status]} </Item>
                                })
                            }
                        </Descriptions>
                    </Item>
                </Fragment>
                :
                <Fragment>
                    <Item label="用户名" span={2}>{username}</Item>
                    <Item label="id">{id}</Item>
                    <Item label="电话">{phone}</Item>
                    <Item label="借书状态" span={2}>{
                        <Descriptions layout="vertical" bordered={true}>
                            {
                                borbooks.map((item,i) => {
                                    return <Item key={i} label={item.bookname}>{icons[item.status]}{bookstatus[item.status]} </Item>
                                })
                            }
                        </Descriptions>
                    }</Item>

                </Fragment>
        }



    </Descriptions>
}



function sendsuccend(mes) {
    Modal.success({
        title: mes
    })
}