import React, { Fragment, useMemo, useState } from 'react';
import { Button, Card, Checkbox, List, Space } from 'antd';
// import Item from 'antd/lib/list/Item';
// import { ConfigConsumer } from 'antd/lib/config-provider';

export default function Favorite(props) {

    let [iscontent, setIscontent] = useState(false);
    let [showitems, setShowitems] = useState(null);
    let [manageitem, setManageitem] = useState(false);
    let [checkall, setCheckall] = useState(false);


    // todo 根据用户id等，返回用户收藏 data,这里分了文件夹，收藏时默认存到文件夹1
    let data = (() => {
        let res = [];
        for (let i = 0; i < 4; i++) {
            res.push({
                title: "文件夹" + i,
                descript: '描述',
                check: false,
                content: ['书籍1', '书籍2', '书籍3']
            })
        }
        return res;
    })();
    let [datasour, setDatasour] = useState(data);


    useMemo(() =>{
        setCheckall(datasour.every(e => e.check == true));
        // console.log(datasour.map(e => { return e.check }));
        // console.log(this);
        // ? 删除数组改变依赖会报错
    }, datasour.map(e => { return e.check }));


    let onContent = (item) => {
        setShowitems(item.content);
        setIscontent(true);
    }

    return iscontent ?
        <Fragment>
            <Button onClick={() => { setIscontent(false) }}>返回</Button>
            <List
                itemLayout="horizontal"
                size="large"
                pagination={{ pageSize: 6 }}
                dataSource={showitems}
                renderItem={(item, i) => {
                    return <List.Item key={i}
                        actions={[<a onClick={() => {
                            setShowitems(showitems.filter((el, j) => j != i))
                        }}>删除</a>]}
                    >
                        <List.Item.Meta
                            title={item}
                        />
                    </List.Item>
                }}
            />
        </Fragment>
        :
        <Fragment>
            {
                manageitem ?
                    <Space size="large" style={{ marginBottom: "10px" }}>
                        <Checkbox checked={checkall}  onChange={() => {
                            setCheckall(checkall ? false : true);
                            setDatasour(datasour.map(el => {
                                // check值在下次组件更新的时候才真正改变，组件未更新时为旧值
                                el.check = !checkall
                                return el;
                            }))
                        }} >全选</Checkbox>
                        <Button onClick={() => setDatasour(datasour.filter(e => e.check == false))}>删除</Button>
                        <Button onClick={() => setManageitem(false)}>完成</Button>
                    </Space>
                    :
                    <Button style={{ marginBottom: "10px" }} onClick={() => setManageitem(true)}>管理</Button>
            }
            <List
                grid={{ column: 2 }}
                size="large"
                pagination={{ pageSize: 6 }}
                dataSource={datasour}
                renderItem={(item, i) => {
                    // console.log(datasour);
                    return <List.Item key={i}>
                        <Card
                            title={item.title}
                            onClick={manageitem ?
                                () => setDatasour(datasour.map((e, j) => {
                                    if (i === j) {
                                        e.check = e.check ? false : true;
                                    }
                                    return e;
                                }))
                                :
                                () => onContent(item)}
                            extra={manageitem ?
                                <Checkbox
                                    checked={item.check}
                                    value={item.check}
                                />
                                :
                                ''}
                        >
                            {item.descript}</Card>
                    </List.Item>
                }}
            />

        </Fragment>

}

