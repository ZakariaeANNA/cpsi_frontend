import login from "../services/LoginService";

const user = {};

const userActions = (state = user,action)=>{
    switch (action.type){
        case 'LOGIN':
            return login(action.payload);
        default: return state;
    }
}

export default userActions;
