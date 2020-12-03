import React, { Fragment, useEffect, useState } from "react";
import { Button, Carousel, Image, Upload, Modal, Input } from 'antd';
import { FormOutlined, FileImageOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import Container from "../../component/container";
import { toGetindex } from "../../store/http";
export default function IndexAdmin(props) {


    // 挂载获取数据
    // useEffect(async ()=>{
    //     let res = await toGetindex();
    //     console.log(res);
    // })
    // todo 后台返回图片数据，imglist和plist
    let imglist = [
        {
            uid: '1',
            name: 'img1',
            url: '/imgs/img1.jpg'
        },
        {
            uid: '2',
            name: "img2",
            url: '/imgs/img2.jpg'
        },
        {
            uid: '3',
            name: "img3",
            url: '/imgs/img3.jpg'
        },
        {
            uid: '4',
            name: "img4",
            url: '/imgs/img4.jpg'
        }
    ]
    let plist = [
        {
            title: 'p1',
            content: `这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。 所谓图书馆，关键是图书馆需要如何写。 
            这样看来， 而这些并不是完全重要，更加重要的问题是， 从这个角度来看， 图书馆，发生了会如何，不发生又会如何。 
            那么， 德谟克利特曾经说过，节制使快乐增加并使享受加强。这似乎解答了我的疑惑。 所谓图书馆，关键是图书馆需要如何写。 
            而这些并不是完全重要，更加重要的问题是， 一般来讲，我们都必须务必慎重的考虑考虑。 这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。`
        },
        {
            title: 'p2',
            content: `就我个人来说，图书馆对我的意义，不能不说非常重大。 所谓图书馆，关键是图书馆需要如何写。 带着这些问题，我们来审视一下图书馆。 
            每个人都不得不面对这些问题。 在面对这种问题时， 图书馆的发生，到底需要如何做到，不图书馆的发生，又会如何产生。 
            从这个角度来看， 图书馆的发生，到底需要如何做到，不图书馆的发生，又会如何产生。 韩非曾经提到过，内外相应，言行相称。
            这句话语虽然很短，但令我浮想联翩。 我认为， 问题的关键究竟为何？ 而这些并不是完全重要，更加重要的问题是， 裴斯泰洛齐在不经意间这样说过，今天应做的事没有做，明天再早也是耽误了。
            这句话语虽然很短，但令我浮想联翩。 在这种困难的抉择下，本人思来想去，寝食难安。 带着这些问题，我们来审视一下图书馆。 既然如何， 吉格·金克拉曾经说过，如果你能做梦，你就能实现它。
            我希望诸位也能好好地体会这句话。 史美尔斯曾经说过，书籍把我们引入最美好的社会，使我们认识各个时代的伟大智者。这不禁令我深思。 本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 
            对我个人而言，图书馆不仅仅是一个重大的事件，还可能会改变我的人生。 这样看来， 带着这些问题，我们来审视一下图书馆。 总结的来说， 所谓图书馆，关键是图书馆需要如何写。`
        },
        {
            title: 'p3',
            content: `我们不得不面对一个非常尴尬的事实，那就是， 既然如此， 迈克尔·F·斯特利曾经说过，最具挑战性的挑战莫过于提升自我。我希望诸位也能好好地体会这句话。 
            图书馆，到底应该如何实现。 这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。 我认为， 生活中，若图书馆出现了，我们就不得不考虑它出现了的事实。`
        }
    ]
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    let [edit, setEdit] = useState(false);
    let [fileList, setFileList] = useState(imglist);
    let [ps, setPs] = useState(plist)


    return <Fragment>
        {
            edit ?
                <Fragment>
                    <Container style={{ height: "600px", width: "100%", border: "1px dashed #d9d9d9", display: "flex" }}>
                        <Container style={{ width: "80%", padding: "100px 50px", borderLeft: "1px solid #8c8c8c", borderRight: "1px solid #8c8c8c", alignItems: "center", margin: "auto", backgroundColor: "#f5f5f5" }}>
                            <Upload
                                style={{ borderColor: "#141414", }}
                                listType="picture-card"
                                beforeUpload={() => false}
                                fileList={fileList}
                                onChange={async ({ file, fileList }) => {
                                    // console.log(file);
                                    if (file.status === 'removed') {
                                        setFileList(fileList);
                                    }
                                    else {
                                        // 
                                        if (!file.url) file.url = await getBase64(file);
                                        fileList = fileList.filter(e => e.uid !== file.uid);
                                        setFileList([...fileList, file]);
                                    }
                                }}
                                onPreview={uppreview}
                                accept=".png,.jpg"
                            >
                                {fileList.length >= 8 ? null : uploadButton}
                            </Upload>
                        </Container>
                    </Container>
                    {
                        ps.map((item, i) => <Container key={i} className="indexpagediv" style={{ textAlign: "right" }} >
                            <Button size="large" style={{ marginBottom: "10px", width: "50px", height: "50px" }}
                                onClick={(e) => {
                                    let data = { title: '', content: '' };
                                    ps.splice(i+1, 0, data);
                                    // setPs(ps);
                                    setPs(Object.assign(ps,ps))
                                    // 刷新
                                    props.history.push('/indexadmin')
                                    console.log(ps);
                                    
                                }}  
                            ><PlusOutlined /></Button>
                            <Button size="large" style={{ marginBottom: "10px", width: "50px", height: "50px" }}
                                onClick={() => {
                                    ps.splice(i, 1);
                                    setPs(ps);
                                    // 刷新
                                    props.history.push('/indexadmin')
                                }}
                            ><MinusOutlined /></Button>
                            <Input value={item.title}
                                onChange={({ target: { value } }) => {
                                    setPs(ps.map((el, j) => {
                                        if (i === j) {
                                            el.title = value
                                        }
                                        return el;
                                    }))
                                }}
                            />
                            <Input.TextArea value={item.content} autoSize={{ minRows: 3, maxRows: 6 }} showCount={true}
                                onChange={({ target: { value } }) => {
                                    console.log(value);
                                    setPs(ps.map((el, j) => {
                                        if (i === j) {
                                            el.content = value
                                        }
                                        return el;
                                    }))
                                }}
                            />

                        </Container>)
                    }
                </Fragment>
                :
                <Fragment>
                    <Carousel
                        autoplay
                        style={{ textAlign: "center", backgroundColor: "#022d55", height: "600px" }}>
                        {
                            fileList.map(item => <Image key={item.uid} alt={item.name} src={item.url} height="600px" />)
                        }
                    </Carousel>
                    {
                        ps.map((item, i) => <Container key={i} className="indexpagediv">
                            <h1>{item.title}</h1>
                            <p style={{ padding: "10px", fontSize: 18, lineHeight: 3,whiteSpace:"pre-line" }}>{item.content}</p>
                        </Container>)
                    }
                </Fragment>


        }
        <Button type="primary" size="large" style={{ position: "fixed", top: '64px', right: "105px" }} onClick={() => { setEdit(!edit) }}><FormOutlined />{edit ? '完成' : '编辑'}</Button>
    </Fragment>
}

// 预览图片
async function uppreview({ name, url }) {
    // console.log(file);
    // let res = await getBase64(originFileObj);
    // console.log(res);
    Modal.confirm({
        title: name,
        content: <Image alt={name} style={{ width: "100%" }} src={url} />,
        maskClosable: true,
        icon: <FileImageOutlined style={{ color: "#434343" }} />
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