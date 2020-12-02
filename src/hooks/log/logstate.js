import React from 'react';
import { useSelector } from 'react-redux';

function useGetLog(){
    let userstate = useSelector(state => state.user);
    return userstate;
}

export {
    useGetLog
}