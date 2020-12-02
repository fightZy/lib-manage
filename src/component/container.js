import React from 'react';

function Container(props){
    // console.log(props);
    let {style=null,children,className=null} = props;
    // console.log(classn);
    return <div className={`container ${className}`} style={style}  >
        {children}
    </div>
}

export default Container;