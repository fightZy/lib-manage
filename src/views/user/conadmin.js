import { Col, Input, Row, Upload, Modal, Divider, Button, Image } from 'antd';
import { PlusOutlined, WhatsAppOutlined,FileImageOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

export default function Conadmin() {
    let [fileList, setFileList] = useState([]);
    let [textvalue,setTextvalue] = useState('');
    // console.log(fileList);
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    return <Row gutter={24} style={{ margin: "20px" }}>
        <Col span={18} push={3} style={{ height: "100%", padding: "20px" }}>
            <WhatsAppOutlined style={{ fontSize: 60, padding: "10px", color: "#595959", marginBottom: '10px' }} />
            <h1 style={{ fontSize: 24, color: "#595959" }}>给管理员留言或发送图片</h1>
            <Divider />
            <div style={{ border: "1px solid #bfbfbf", borderRadius: '5px', height: "100%", margin: "20px 0", padding: "20px 20px" }}>
                <Upload
                    listType="picture-card"
                    beforeUpload={()=>false}
                    fileList={fileList}
                    onChange={(e) => { setFileList(e.fileList) }}
                    onPreview={uppreview}
                    accept=".png,.jpg"
                >
                    {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                <h4 style={{ color: "#bfbfbf" }}>只支持jpg或png格式</h4>
                <Divider />
                <Input.TextArea style={{ margin: "20px 0" }} autoSize={{ minRows: 9, maxRows: 9 }} value={textvalue} onChange={({target:{value}})=>{setTextvalue(value)}} />
                <Button type="primary" size="large" onClick={()=>send(fileList,textvalue)}>发送</Button>
            </div>

        </Col>
    </Row>


}

// 预览图片
 async function uppreview({originFileObj}) {
    console.log(originFileObj);
    let res = await getBase64(originFileObj);
    console.log(res);
    Modal.confirm({
        title:originFileObj.name,
        content:<Image alt={originFileObj.name} style={{width:"100%"}} src={res} />,
        maskClosable:true,
        icon:<FileImageOutlined style={{color:"#434343"}} />
    })

}

// 解析源文件成base64
function getBase64(file) {
    // FileReader解析文件是异步操作
    return new Promise((resolve, reject) => {
        // 创建reader
        const reader = new FileReader();
        // 读取文件 读取完成readState为DONE，触发loadend事件，获得result
        // result包含一个data:URL格式的字符串（base64编码）以表示所读取文件的内容
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

// 发送数据
function send(fileList,textvalue){
    // todo 向后端发送数据 fileList,textvalue
    console.log(fileList,textvalue);
    

    succend();

}

// 成功回调
function succend(){
    Modal.success({
        title:"留言成功!"
    })
}