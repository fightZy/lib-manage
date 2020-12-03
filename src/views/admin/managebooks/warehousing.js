import { AutoComplete, Button, Col, DatePicker, Empty, Form, Input, List, Modal, Row } from 'antd';
import { PlusOutlined, SwapOutlined } from '@ant-design/icons';
import React, { Fragment, useState } from 'react';
let bookclasses = require('../../../static/json/bookclass.json');

export default function Warehousing() {

    let [datalist, setDatalist] = useState([
        {
            key: '1',
            bookname: 'book1',
            descript: 'book1descript...',
            author: "a",
            pulished: "2018-10",
            isbn: "isbn-1",
            callnumber: 'callnumber-1'
        }
    ])
    let [add, setAdd] = useState(true);

    return <Fragment>
        <Row justify="center" style={{ height: "70vh", margin: "0 10px" }} >
            <Col span={8} style={{ border: "1px solid #d9d9d9", padding: '10px 20px', }}>
                <h3 style={{ color: '#8c8c8c', borderBottom: '1px solid #f0f0f0' }}>将入库</h3>
                <List
                    itemLayout="horizontal"
                    dataSource={datalist}
                    renderItem={item => (
                        <List.Item
                            // key={item.key}
                            actions={[<Button size="small" onClick={() => { setDatalist(datalist.filter(i => i !== item)) }} >移除</Button>]}
                        >
                            <List.Item.Meta
                                title={item.bookname}
                                description={item.descript}
                            />
                        </List.Item>
                    )
                    }
                />

            </Col>
            <Col span={1} style={{ margin: "auto", textAlign: "center" }}><SwapOutlined style={{ fontSize: 20, color: '#bfbfbf' }} /></Col>

            <Col span={15} style={{ border: "1px solid #d9d9d9", padding: '10px 20px', display: "flex", flexDirection: "column" }}>
                {
                    add ?
                        <Newdata set={setAdd} setDatalist={setDatalist} datalist={datalist} />
                        :
                        <Fragment>
                            <Button style={{ width: "100px", height: "100px", margin: 'auto' }} onClick={() => { setAdd(true) }}><PlusOutlined /></Button>
                            <Empty style={{ margin: 'auto' }} />
                        </Fragment>
                }

            </Col>
        </Row>
        <Row justify="end" style={{ margin: "10px 20px" }}><Button size="large" type="primary" onClick={() => {
            if (datalist.length === 0) {
                Modal.warn({
                    title: "入库内容为空!"
                })
            } else {
                // todo 发送入库列表给后端 datalist

            }
        }}>入库</Button></Row>
    </Fragment>

}


/**
 * 索书号由两部分组成:分类号和著作号。
 * 目前这里只能设置分类号
 * 
*/
// 入库详情
function Newdata(props) {
    let { set, setDatalist, datalist } = props;
    let [options, setOptions] = useState([]);
    function search(value) {
        // console.log(value);
        let res = [];
        Object.keys(bookclasses).map(item => {
            if (item.includes(value) || bookclasses[item].includes(value)) {
                res.push({ value: `${item}-${bookclasses[item]}` })
            }
        })
        setOptions(res);
    }
    return <Fragment >
        <h3 style={{ color: '#8c8c8c', borderBottom: '1px solid #f0f0f0' }}>详情</h3>
        <Form
            labelCol={{ span: 5 }}
            style={{ margin: '0 auto', width: "50%", marginTop: "30px" }}
            // name="newbook"
            onFinish={(e) => {
                datalist.push({ key: (datalist.length + 1).toString(), ...e });
                // console.log(datalist);
                setDatalist(datalist);
                set(false);
            }
            }
        // onFinishFailed={(e)=>{console.log(e);}}
        >
            <Form.Item label="书名" name="bookname" rules={[{ required: true, message: "不能为空" }]}><Input style={{ width: '70%' }} /></Form.Item>
            <Form.Item label="作者" name="auhor" rules={[{ required: true, message: "不能为空" }]}><Input style={{ width: '70%' }} /></Form.Item>
            <Form.Item label="出版日期" name="pulished" rules={[{ required: true, message: "不能为空" }]}><DatePicker style={{ width: '70%' }} /></Form.Item>
            <Form.Item label="分类号" name="callnumber" rules={[{ required: true, message: "不能为空" }]}>
                <AutoComplete onSearch={search} options={options} onSelect={(e) => { console.log(e); }} >
                    <Input style={{ width: '70%' }} /></AutoComplete>
            </Form.Item>
            <Form.Item label="简介" name="descript" rules={[{ required: true, message: "不能为空" }]}><Input.TextArea style={{ width: '70%' }} autoSize={{ minRows: 3 }} /></Form.Item>
            <Form.Item >
                <Row justify="center">
                    <Button style={{ width: "100px" }} type="primary" htmlType="submit" >完成</Button>
                    <Col span={1}></Col>
                    <Button onClick={() => set(false)} >取消</Button>
                </Row>
            </Form.Item>
        </Form>
    </Fragment>
}
