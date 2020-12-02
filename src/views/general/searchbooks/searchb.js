import React from 'react';
import Container from '../../../component/container';
import { Divider } from 'antd';
import Search from 'antd/lib/input/Search';

function Searchb(){

    return <Container style={{width:'100%',padding:"50px"}}>

        <Search size="large" placeholder='输入书籍关键词搜索'
            onSearch={(value)=>{
                // todo 关键词，搜索书籍数据 value
                
                console.log(value);
            }}
        />
    <Divider />
    </Container>
}

export default Searchb;