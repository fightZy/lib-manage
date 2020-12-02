import React from 'react';


function useID() {
    return (id) => {
        let len = id.length;
        if (len > 10 || len < 10) {
            return "*请输入正确的学号";
        }
        return true;
    }
}

function useName() {
    return (name) => {
        let len = name.length;
        if (len < 2 || len > 8) {
            return "*请输入正确的姓名";
        }
        return true;
    }

}

function usePassword() {
    return (password) => {
        let len = password.length;
        if (len < 6 || len > 10) {
            return "密码长度应为6到10";
        }
        let reg1 = /\d/g;
        let reg2 = /([a-zA-Z])/;
        if (!reg1.test(password)) {
            return "密码中应包含数字";
        }
        if (!reg2.test(password)) {
            return "密码中应包含字母"
        }
        return true;
    }

}

function useSame() {
    return (word, nword) => {
        if(word === '') {
            // console.log(111);
            return "请先输入密码";
        }
        if (word !== nword) {
            return "两次密码不一致";
        }
        return true;
    }

}




export {
    useID,
    useName,
    usePassword,
    useSame,
}