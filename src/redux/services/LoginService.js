import { useAlert } from 'react-alert'

const login = (user) => {
    if(user.username === "Admin" && user.password === "123456"){
        return { ...user , role : "ADMIN" , loggedIn : true }
    }else if( user.username === "GRESA" && user.password === "12345"){
        return { ...user , role : "USER" ,loggedIn : true }
    }else{
        return { loggedIn : false }
    }
}

export default login;