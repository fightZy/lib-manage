import { Space, Table, Modal, Select } from 'antd';
import React from 'react';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';


function Listsearch(props) {

    // dayjs.extend(advancedFormat);
    let change = function (pagination) {
        // console.log('params', pagination);
    }

    let { user } = useSelector(state => state);
    let iflog = user.log;

    let j = 0;
    const columns = [
        {
            title: '序号',
            key: 'id',
            dataIndex: 'id'
        },
        {
            title: '书名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '作者',
            dataIndex: 'author',
            key: 'author',
        },
        {
            title: '出版社',
            dataIndex: 'publishing',
            key: 'publishing',
        },
        {
            title: '出版年',
            key: 'publishyear',
            dataIndex: 'publishyear',
            defaultSortOrder: 'descend',
            sorter: (a, b) => dayjs(a.publishyear).valueOf() - dayjs(b.publishyear).valueOf(),
            // sortDirections: ['descend', 'ascend'],
        },
        {
            title: '索书号',
            key: 'callnum',
            dataIndex: 'callnum'
        },
        {
            title: '操作',
            key: 'action',
            render: ({ num: { sum, islend } }, record) => (
                <Space size="middle">
                    <a onClick={iflog ? ()=>{collection(record.id)} : info1}>收藏</a>
                    <a onClick={iflog ? sum - islend ?()=>{lend(record.id)} : info2 : info1}>借阅</a>
                </Space>
            )
        },
    ];
    function info1() {
        Modal.info({
            title: "请先登录!",
            content: <p>需要登录才能进行操作</p>,
            onOk: () => { props.history.push('./log') }
        })
    }
    function info2() {
        Modal.info({
            title: '该书目前暂不可借'
        })
    }
    function lend(id) {
        Modal.confirm({
            title: '该数目前可借出，确定预约借书吗?',
            content: <p>预约成功后需要在三个工作日内到图书馆领取，逾期记失约一次</p>,
            onOk: () => {
                // todo 发送预约信息 res
                let res = {
                    username:user.username,
                    book:id
                }

                console.log(res);
                let res1 = true;
                if (res1) return succend('预约成功!请按时领取!');
            }
        })
    }

    function collection(id) {
        Modal.confirm({
            title: '确定收藏该书吗？',
            onOk: () => {
                // todo 发送收藏信息 res
                let res = {
                    username:user.username,
                    book:id,
                    folder:'1'//默认存到文件夹1
                }
                
                console.log(res);
                let res1 = true;
                if (res1) return succend("收藏成功");
            }
        })
    }

    function succend(str) {
        Modal.success({
            title: str
        })
    }
    let data1 = (num) => {
        let data = [];
        for (let i = 0; i < num; i++) {
            data.push({
                key: i,
                name: 'John Brown',
                author: i,
                publishing: 'New York No. 1 Lake Park',
                publishyear: dayjs.unix(new Date() / 1000 - Math.random() * 60 * 60 * 24 * 9999).format('YYYY-MM-DD'),
                callnum: `i${i}.${i}`,
                id: ++j,
                num: {
                    sum: 10,
                    islend: 7
                }
            })
        }
        return data;
    }



    return <Table columns={columns} dataSource={data1(20)}
        onChange={change}
        style={{ margin: '0 50px' }}
        pagination={{
            showSizeChanger: true,
            defaultPageSize: 5,
            pageSizeOptions: [5, 10, 20],
        }}
    />
}

export default Listsearch;