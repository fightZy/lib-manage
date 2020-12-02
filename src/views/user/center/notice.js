import { List } from 'antd';
import React, { useState } from 'react';

export default function Notice() {

    // todo ，返回用户接受到的消息
    let data = (() => {
        let res = [];
        for (let i = 0; i < 20; i++) {
            res.push({
                sender: "a",
                content: '11111111111111' + i,
                time: '2020-10-10'
            })
        }
        return res;
    })();

    let [datasour,setDatasour] = useState(data);
    return <List
        itemLayout="horizontal"
        size="large"
        pagination={{ position: 'bottom', pageSize: 6 }}
        dataSource={datasour}
        renderItem={(item, i) => {
            return <List.Item
                key={i}
                actions={[
                    // todo 需要添加onclick
                    <a key='1'>已阅</a>,
                    <a key='2' onClick={() => {
                        setDatasour(datasour.filter((el,j)=>j!=i))
                    }}>删除</a>
                ]}
            >
                <List.Item.Meta
                    title={item.sender}
                    description={item.content}
                />
            </List.Item>
        }}
    />
}