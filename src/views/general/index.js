import React, { Fragment } from "react";
import { Carousel, Empty,Image } from 'antd';
import Container from "../../component/container";

export default function IndexPage(props) {
    // console.log(props);
    // todo 后端返回首页数据 data
    let data = {
        imglist: [{
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
        },],
        plist: [{
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
        },]
    }
    let {imglist,plist} = data;
    return <Fragment>
        <Carousel
            autoplay
            style={{ textAlign: "center", backgroundColor: "#022d55", height: "600px" }}>
            {
                !imglist.length?<Empty />:
                imglist.map(item => <Image key={item.uid} alt={item.name} src={item.url} height="600px" />)
            }
        </Carousel>
        {
            !plist.length?<Empty/>:
            plist.map((item, i) => <Container key={i} className="indexpagediv">
                <h1>{item.title}</h1>
                <p style={{ padding: "10px", fontSize: 18, lineHeight: 3, whiteSpace: "pre-line" }}>{item.content}</p>
            </Container>)
        }
    </Fragment>


}
