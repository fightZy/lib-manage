import Searchb from './searchb'
import React, { Fragment } from 'react';
import Listsearch from './listsearch';

function Searchbooks(props){

    return <Fragment>
       <Searchb />
       <Listsearch {...props}/>
    </Fragment>
};

export default Searchbooks;