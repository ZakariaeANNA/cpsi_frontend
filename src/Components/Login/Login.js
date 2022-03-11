import React,{ useState } from 'react';
import './Login.scss';
import { useDispatch , useSelector } from "react-redux";
import { login } from "../../redux/actions/index";
import { useAlert } from 'react-alert'
import { useHistory } from "react-router-dom";

const Login = () => {
    const history = useHistory();
    const alert = useAlert();
    const dispatch = useDispatch();
    const user = useSelector( (state) => state.userActions )
    const [ userName , setuserName ] = useState("");
    const [ password , setPassword ] = useState("");

    const handleLogin = (event) =>{
        event.preventDefault();
        const User = { username : userName , password : password }
        console.log(User);
        dispatch(login(User));
        if(user.loggedIn === true)
            history.replace("/")
        else    
            alert.error("Error Authentification")
    }

    return ( 
        <div class="auth-wrapper">
            <div class="section-login">
                <div class="flex justify-center items-center">
                    <div class="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div>
                            <div class="flex justify-center items-center text-center">
                                <div class="inline">
                                    <div class="logo">
                                        <h3 class="text-2xl lg:text-4xl my-2 font-bold text-primary">Direction Provinciale Tétouan</h3>
                                    </div>
                                    <div class="auth-block-title">
                                        <p class="text-sm lg:text-2xl font-medium">Système de Gestion Établissement Scolaire</p>
                                    </div>
                                </div> 
                            </div>
                            <div class="mt-4">
                                <div class="login p-4">
                                    <form method="POST" onSubmit={handleLogin} >
                                        <div class="flex p-2 items-center">
                                            <i class="text-gray-600 fas fa-key fas-login"></i>
                                            <input id="codeGRESA" type="text" class="w-full login-input" placeholder="Code GRESA" value={userName} onChange={ (e) => setuserName(e.target.value) } required />
                                        </div>
                                        <div class="flex p-2 items-center my-3">
                                            <i class="text-gray-600 fas fa-lock fas-login"></i>
                                            <input id="password" type="password" class="w-full login-input" placeholder="Mot de Passe" value={password} onChange={ (e) => setPassword(e.target.value) } required />
                                        </div>
                                        <button type="submit" class="w-full btn btn-primary p-2">
                                            Se Connecter
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Login;