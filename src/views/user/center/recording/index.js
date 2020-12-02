import { Button, Card, Col, Divider, Drawer, Empty, Input, Modal, Popconfirm, Radio, Row, Space, Table, Tag, Tooltip } from 'antd';
import React, { Fragment, useState } from 'react';
import { CheckCircleTwoTone, MinusCircleTwoTone, SmileTwoTone, WarningTwoTone, ExclamationCircleOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { useGetLog } from '../../../../hooks/log/logstate';

export default function Recording(props) {

    // # 后端从数据库获取读者借阅信息（包括书籍信息以及时间信息）
    // # 并根据时间判断书籍借阅状态一齐返还给前端,前端获得书籍状态
    // # 根据借阅书籍的状态呈现不同的样式标题
    const bookstatus = {
        "0": "借阅中",
        "1": "已归还",
        "2": "已预约",
        "3": "逾期未还"
    }

    const colors = {
        "0": ["green", <CheckCircleTwoTone twoToneColor="#75ec00" />],
        "1": ["default", <MinusCircleTwoTone twoToneColor="#8c8c8c" />],
        "2": ["blue", <SmileTwoTone twoToneColor="blue" />],
        "3": ["red", <WarningTwoTone twoToneColor="red" />]
    }

    const titles = {
        "0": ["借入时间", "最晚归还时间"],
        "1": ["借入时间", "归还时间"],
        "2": ["最晚领取时间", "预计最晚归还时间"],
        "3": ["借入时间", "已过最晚归还时间"]
    }





    // todo 获取数据，这里是死数据
    let data = [
        {
            key: "1",
            bookname: "book1",
            status: "0",
            details: {
                book: {
                    name: "1",
                    descript: "1的描述标签(作者等)....",
                },
                borrow: "2020-10-20",
                return: "2020-11-03",

            }
        },
        {
            key: "2",
            bookname: "book2",
            status: "1",
            details: {
                book: {
                    name: "2",
                    descript: "2的描述标签(作者等)....",
                },
                borrow: "2020-10-01",
                return: "2020-10-11",

            }
        },
        {
            key: "3",
            bookname: "book3",
            status: "2",
            details: {
                book: {
                    name: "3",
                    descript: "3的描述标签(作者等)....",
                },
                borrow: "2020-11-03",
                return: "2020-11-23"
            }
        },
        {
            key: "4",
            bookname: "book4",
            status: "3",
            details: {
                book: {
                    name: "4",
                    descript: "4的描述标签(作者等)....",
                },
                borrow: "2020-09-01",
                return: "2020-10-01",

            }
        },
    ]


    const colums = [
        {
            title: "书籍名称",
            dataIndex: "bookname",
            key: "nookname"
        },
        {
            title: "当前状态",
            dataIndex: "status",
            key: "status",
            render: (text, record) => {
                return <Tag color={colors[text][0]} icon={colors[text][1]}>{bookstatus[text]}</Tag>
            }
        },
        {
            title: "详情",
            dataIndex: "details",
            key: "datails",
            render: () => {
                return <Tooltip title="点击详情">
                    <ExclamationCircleOutlined />
                </Tooltip>
            }
        }
    ];

    let [showitem, setShowitem] = useState(null);
    let [drawervis, setDrawervis] = useState(false);
    let { username } = useGetLog();
    // console.log(username);

    return <Fragment>
        <Table className="recordingtable" size="large" columns={colums} dataSource={data}
            onRow={(record, i) => {
                return {
                    onMouseOver: (e) => { e.currentTarget.classList.add("mouseovertable"); e.currentTarget.classList.remove("mousedowntable") },
                    onMouseDown: (e) => { e.currentTarget.classList.replace("mouseovertable", "mousedowntable") },
                    onMouseOut: (e) => { e.currentTarget.classList.remove("mouseovertable", "mousedowntable") },
                    onMouseUp: ({ currentTarget: { classList, parentNode } }) => {
                        classList.replace("mousedowntable", "mouseuptable");

                    },
                    onClick: ({ currentTarget: { classList, parentNode } }) => {
                        // console.log(drawerdom);
                        parentNode.childNodes.forEach((el, j) => {
                            if (i !== j) {
                                el.classList.remove("mouseuptable");
                            } else {
                                setShowitem(record);
                            }
                        });
                    }
                }
            }
            }
        />
        <Divider />
        {
            showitem ?
                <Row gutter={16} style={{ marginTop: "50px" }}>
                    <Col span={8}><Card title={showitem.bookname} style={{ height: "100%" }}>{showitem.details.book.descript}</Card></Col>
                    <Col span={8}><Card title={titles[showitem.status][0]} style={{ height: "100%" }}>{showitem.details.borrow}</Card></Col>
                    <Col span={8}><Card title={titles[showitem.status][1]}
                        // onClickCapture={(e)=>{
                        //     console.log(e.target);
                        //     if(e.target.className=== 'anticon anticon-setting'){
                        //         setDrawervis(true);
                        //     }
                        // }}
                        actions={
                            showitem.status === '0' ?
                                [<Modify setDrawervis={setDrawervis} />, <Feedback item={showitem} />]
                                :
                                [<Feedback item={showitem} />]
                        }

                    >{showitem.details.return}</Card>
                    </Col>

                </Row>
                :
                <Empty description="点击上方显示详情" style={{ marginTop: "50px", color: "#d9d9d9" }} />
        }
        <Drawer title="借阅管理"
            placement="right"
            closable={false}
            getContainer={false}
            style={{ position: 'absolute', zIndex: '0', backgroundColor: "rgba(255, 255, 255, 0)" }}
            destroyOnClose={true}
            onClose={() => setDrawervis(false)}
            visible={drawervis}
        >
            <h4>申请延时</h4><br />
            <Radio1 item={showitem} username={username} />
        </Drawer>
    </Fragment>
}

function Radio1({ item, username }) {
    let [valuer, setValuer] = useState(null)
    return <Space size="large" direction="vertical">
        <Radio.Group onChange={({ target: { value } }) => setValuer(value)} value={valuer}>
            <Radio value={5}>5</Radio>
            <Radio value={10}>10</Radio>
            <Radio value={20}>20</Radio>
        </Radio.Group>
        <Button onClick={() => {
            // todo 发送延时申请
            let data = {
                username,
                item,
                delaytime: valuer,
            }
            console.log(data);
            // 申请发送成功
            succend();
        }}>申请</Button>
    </Space>

}


function Feedback(props) {
    let { item } = props;
    return <Popconfirm placement="bottom" title="该信息有误?"
        cancelText="取消"
        okText="确定，需要反馈"
        onConfirm={() => {
            options(item);
        }}
    >
        <EllipsisOutlined />,
</Popconfirm>
}

function options(item) {
    let val = null;
    Modal.confirm({
        title: "请输入反馈信息",

        onOk: (close) => {
            // todo 发送反馈内容给后端，后端接受成功后，返回resolve关闭窗口
            console.log(val, item);
            // send...
            
                let res = new Promise((resl, rej) => {
                    setTimeout(() => {
                        // resl(1);
                         rej(2);
                    }, 1000)
                })
                // 接受成功

                res.then((res) => {
                    console.log(res);
                    succend();
                    close();
                }).catch(err=>{
                    // 发送失败
                    console.log(err);
                    error(err);
                    close();
                })
                


        },
        content: <Input.TextArea
            onChange={({ target: { value } }) => { val = value }}
            rows={4} maxLength={200} defaultValue={"描述内容不超过200字"} showCount={true} autoSize={true}
        />
    })

}
function succend() {
    Modal.success({
        title: '反馈成功!'
    })
}
function error(err) {
    Modal.error({
        title: '反馈失败，请联系管理员!',
        content: err,
    })
}

function Modify({ setDrawervis }) {

    return <SettingOutlined onClick={() => { setDrawervis(true) }} />
}