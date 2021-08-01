import React, {useContext, useState} from 'react'
import {MyContext} from '../contexts/MyContext'
import Header from './Header';
const TITLE = 'Transport99 | Register'

function Login(){

    const {toggleNav,loginUser,isLoggedIn} = useContext(MyContext);

    const initialState = {
        userInfo:{
            email:'',
            password:'',
        },
        errorMsg:'',
        successMsg:'',
    }

    const [state,setState] = useState(initialState);

    // On change input value (email & password)
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo:{

            }
        });
    }

    // On Submit Login Form
    const submitForm = async (event) => {
        event.preventDefault();
        const data = await loginUser(state.userInfo);
        if(data.success && data.token){
            setState({
                ...initialState,
            });
            localStorage.setItem('loginToken', data.token);
            await isLoggedIn();
        }
        else{
            setState({
                ...state,
                successMsg:'',
                errorMsg:data.message
            });
        }
    }

    // Show Message on Error or Success
    let successMsg = '';
    let errorMsg = '';
    if(state.errorMsg){
        errorMsg = <div className="error-msg">{state.errorMsg}</div>;
    }
    if(state.successMsg){
        successMsg = <div className="success-msg">{state.successMsg}</div>;
    }



    return(
      <div>
<Header>  </Header><title>{ TITLE }</title>
    <div class="login p-fixed d-flex text-center bg-primary common-img-bg">
      <div class="container-fluid">
        <div class="row">

          <div class="col-sm-12">
            <div class="login-card card-block">
              <form class="md-float-material" onSubmit={submitForm}>
                <div class="text-center">
                  <img src="assets/images/logo-black.png" alt="logo"/>
                </div>
                <h3 class="text-center txt-primary">
                  Sign In to your account
                </h3>
                <div class="row">
                  <div class="col-md-12">
                    <div class="md-input-wrapper">
                      <input type="email" class="md-form-control" required="required" value={state.userInfo.email} onChange={onChangeValue} />
                      <label>Email</label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="md-input-wrapper">
                      <input type="password" class="md-form-control" required="required" value={state.userInfo.password} onChange={onChangeValue}/>
                      <label>Password</label>
                    </div>
                    {errorMsg}
                    {successMsg}
                  </div>
                  <div class="col-sm-6 col-xs-12">
                  <div class="rkmd-checkbox checkbox-rotate checkbox-ripple m-b-25">
                    <label class="input-checkbox checkbox-primary">
                      <input type="checkbox" id="checkbox"/>
                      <span class="checkbox"></span>
                    </label>
                    <div class="captions">Remember Me</div>

                  </div>
                    </div>
                  <div class="col-sm-6 col-xs-12 forgot-phone text-right">
                    <a href="forgot-password.html" class="text-right f-w-600"> Forget Password?</a>
                    </div>
                </div>
                <div class="row">
                  <div class="col-xs-10 offset-xs-1">
                    <button type="submit" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">LOGIN</button>
                  </div>
                </div>

                <div class="col-sm-12 col-xs-12 text-center">
                  <span class="text-muted">Don't have an account?&nbsp;&nbsp;</span>
                  <button type="button" onClick={toggleNav} class="btn btn-primary">Sign Up</button>
                </div>


              </form>

            </div>

          </div>
        </div>

      </div>
      </div></div>

    );
}

export default Login;
