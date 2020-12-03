import { Modal, Radio, Table,Tag } from 'antd';
import React from 'react';
import dayjs from 'dayjs';
import {CheckCircleTwoTone,SmileTwoTone,WarningTwoTone} from '@ant-design/icons';
import { useGetLog } from '../../../../hooks/log/logstate';

export default function Reserved(){

    const stausto ={
        "0":"已领取",
        "1":"未领取",
        "2":"已逾期"
    }

    const colors = {
        "0": ["green", <CheckCircleTwoTone twoToneColor="#75ec00" />],
        "1": ["blue", <SmileTwoTone twoToneColor="blue" />],
        "2": ["red", <WarningTwoTone twoToneColor="red" />]
    }

    let data = [
        {
            key:'1',
            status:"0",
            bookname:'book1',
            borrow:'2020-11-01',
            return:'2020-12-31'
        },
        {
            key:'2',
            status:"1",
            bookname:'book2',
            borrow:'2020-11-28',
            return:'2020-11-12'
        },
        {
            key:'3',
            status:"2",
            bookname:'book3',
            borrow:'2020-10-28',
            return:'2020-11-12'
        }
    ]

    const columns = [
        {
            title:'书名',
            dataIndex:'bookname'
        },
        {
            title:'预约领取时间',
            dataIndex:'borrow',
            sorter:(a,b)=>dayjs(a.borrow).valueOf() - dayjs(b.borrow).valueOf()
        },
        {
            title:'状态',
            key:'status',
            render:({status})=>{
                return <Tag color={colors[status][0]} icon={colors[status][1]}>{stausto[status]}</Tag>
            }
        },
        {
            title:'操作',
            key:'action',
            render:(text)=>{
                switch (text.status) {
                    case '1':
                        return <a  onClick={()=>{case1(text,username)}}>预约延期</a>
                    case '2':
                        return <a  onClick={()=>{case2(text,username)}}>重新预约</a>
                    default:
                        return '-'
                }
                
            }
            
            
        }
    ]

    let {username} = useGetLog();

    return <Table 
        columns={columns}
        dataSource={data}
        
    />
}

function case1(text,username){
    let resvalue = null;
    Modal.confirm({
        title:"请选择延期时长",
        content:<Radio.Group onChange={({target:{value}})=>resvalue=value}>
            <Radio value={5}>5天</Radio>
            <Radio value={10}>10天</Radio>
            <Radio value={15}>15天</Radio>
        </Radio.Group>,
        onOk:()=>{
            // todo 发送预约延时请求
            let data = {
                username,
                text,
                resvalue,
            }
            console.log(data);
            succend();
        }
        
    })
}

function case2(text,username){
    Modal.confirm({
        title:'是否确定重新预约?',
        content:"请在三个工作日内前往图书馆领取",
        onOk:()=>{
            // todo 发送重新预约请求
            let data = {
                username,
                text,
            }
            console.log(data);
            succend();
        }
    })
}

function succend() {
    Modal.success({
        title: '申请成功!'
    })
}