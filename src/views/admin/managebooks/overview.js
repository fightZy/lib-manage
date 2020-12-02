import { Button, Collapse, Descriptions, Input, Table } from 'antd';
import { CheckOutlined, CloseCircleOutlined } from '@ant-design/icons'
import React, { Fragment, useState } from 'react';
import Search from 'antd/lib/input/Search';
const { Panel } = Collapse;
const { Item } = Descriptions;
export default function Overview() {

    // todo 获取所有书籍的信息data
    let data = [
        {
            key: "1",
            bookname: 'book1',
            author: 'a',
            callnumber: 'callnumber-1',
            details: {
                isbn: "isbn-1",
                descript: 'book1简介',
                publishtime: '2020-06',
                sumn: 10,
                lendn: 3,
                colletion: 'xxx-a',
                bookstatus: '1'
            }
        },
        {
            key: "2",
            bookname: 'book2',
            author: 'a2',
            callnumber: 'callnumber-2',
            details: {
                isbn: "isbn-2",
                descript: 'book2简介',
                publishtime: '2020-04',
                sumn: 4,
                lendn: 2,
                colletion: 'xxx-a',
                bookstatus: '0'
            }
        }
    ]




    let [datalist, setDatalist] = useState(data);

    const colums = [
        {
            title: "书名",
            dataIndex: "bookname",
        },
        {
            title: "作者",
            dataIndex: 'author'
        },
        {
            title: "索书号",
            dataIndex: "callnumber"
        },
        {
            title: "操作",
            dataIndex: "action",
            render: (text, record) => {
                console.log(record);
                return <Fragment>
                    <Button onClick={() => {
                        setDatalist(datalist.filter(e => e.key !== record.key))
                    }}>删除</Button>
                </Fragment>
            }
        }
    ]

    return <Fragment>
        {/**
         * 
         *  // todo
        */}
        <Search size="large"  placeholder="输入关键词" enterButton='搜索' onSearch={(e)=>{console.log(e);}}/>
        <Table
            style={{ margin: "20px" }}
            // bordered
            columns={colums}
            dataSource={datalist}
            expandable={{
                expandedRowRender: (a) => {
                    return <Desctipt {...a} />
                }
            }}
        />
    </Fragment>
}

function Desctipt(props) {
    let [data, setData] = useState({ ...props });
    let { author, bookname, callnumber, details: { colletion, descript, isbn, lendn, sumn, bookstatus } } = data;
    let [edit, setEdit] = useState(false);

    function setitem(item) {
        if (Object.keys(item)[0] in data) {
            setData(Object.assign({ ...data }, item));
        } else {
            setData(Object.assign({ ...data }, { details: { ...data.details, ...item } }));
        }
    }

    return <Descriptions
        bordered={true}
        title='详情'
        size="default"
        extra={<Button type="primary" onClick={() => setEdit(!edit)}>{edit ? '完成' : '修改'}</Button>}

    >
        {
            edit ?
                <Fragment>
                    <Item key="bookname" label="书名" span={2}><Input value={bookname} onChange={({ target: { value } }) => { setitem({ bookname: value }) }} /></Item>
                    <Item label="作者"><Input value={author} onChange={({ target: { value } }) => { setitem({ author: value }) }} /></Item>
                    <Item label="索书号"><Input value={callnumber} onChange={({ target: { value } }) => { setitem({ callnumber: value }) }} /></Item>
                    <Item label="馆藏"><Input value={colletion} onChange={({ target: { value } }) => { setitem({ colletion: value }) }} /></Item>
                    <Item label="isbn"><Input value={isbn} onChange={({ target: { value } }) => { setitem({ isbn: value }) }} /></Item>
                    <Item label="简介" span={3}><Input value={descript} onChange={({ target: { value } }) => { setitem({ descript: value }) }} /></Item>
                    <Item label="拥有数量"><Input value={sumn} onChange={({ target: { value } }) => { setitem({ sumn: value }) }} /></Item>
                    <Item label="已借出">{`${lendn}本`}</Item>
                    <Item label="可借状态">{bookstatus == '1' ? <CheckOutlined style={{ color: "#7ed321" }} /> : <CloseCircleOutlined style={{ color: "red" }} />}</Item>
                </Fragment>
                :
                <Fragment>
                    <Item label="书名" span={2}>{bookname}</Item>
                    <Item label="作者">{author}</Item>
                    <Item label="索书号">{callnumber}</Item>
                    <Item label="馆藏">{colletion}</Item>
                    <Item label="isbn">{isbn}</Item>
                    <Item label="简介" span={3}>{descript}</Item>
                    <Item label="拥有数量">{`${sumn}本`}</Item>
                    <Item label="已借出">{`${lendn}本`}</Item>
                    <Item label="可借状态">{bookstatus == '1' ? <CheckOutlined style={{ color: "#7ed321" }} /> : <CloseCircleOutlined style={{ color: "red" }} />}</Item>
                </Fragment>
        }



    </Descriptions>
}

