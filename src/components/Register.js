import React, {useContext,useState} from 'react'
import {MyContext} from '../contexts/MyContext'
import {Helmet} from 'react-helmet'

function Register(){
    const {toggleNav,registerUser} = useContext(MyContext);
    const initialState = {
        userInfo:{
            name:'',
            email:'',
            password:'',
        },
        errorMsg:'',
        successMsg:'',
    }
    const [state,setState] = useState(initialState);

    // On Submit the Registration Form
    const submitForm = async (event) => {
        event.preventDefault();
        const data = await registerUser(state.userInfo);
        if(data.success){
            setState({
                ...initialState,
                successMsg:data.message,
            });
        }
        else{
            setState({
                ...state,
                successMsg:'',
                errorMsg:data.message
            });
        }
    }

    // On change the Input Value (name, email, password)
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo:{
                ...state.userInfo,
                [e.target.name]:e.target.value
            }
        });
    }

    // Show Message on Success or Error
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
      <Helmet>
      <title>Transport99 | Register</title>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="description" content="codedthemes"/>
      <meta name="keywords"
      content=", Responsive, Landing, Bootstrap, App, Template, Mobile, iOS, Android, apple, creative app"/>
      <meta name="author" content="codedthemes"/>
      <link rel="shortcut icon" href="assets/images/favicon.png" type="image/x-icon" />
      <link rel="icon" href="assets/images/favicon.ico" type="image/x-icon" />
       <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,500,700" rel="stylesheet" />
      <link rel="stylesheet" type="text/css" href="assets/icon/icofont/css/icofont.css" />
        <link rel="stylesheet" type="text/css" href="assets/plugins/bootstrap/css/bootstrap.min.css" />
      <link rel="stylesheet" type="text/css" href="assets/css/main.css" />
      <link rel="stylesheet" type="text/css" href="assets/css/responsive.css" />
      <script src="assets/plugins/jquery/dist/jquery.min.js"></script>
      <script src="assets/plugins/jquery-ui/jquery-ui.min.js"></script>
      <script src="assets/plugins/tether/dist/js/tether.min.js"></script>
      <script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
      <script type="text/javascript" src="assets/pages/elements.js"></script>
      </Helmet>
      <div class="login common-img-bg">
        <div class="container-fluid">
          <div class="row">
              <div class="col-sm-12">
                <div class="login-card card-block bg-white">
                  <form class="md-float-material" action="index.html" onSubmit={submitForm} noValidate>
                    <div class="text-center">
                      <img src="assets/images/logo-black.png" alt="logo" />
                    </div>
                    <h3 class="text-center txt-primary">Create an account </h3>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="md-input-wrapper">
                          <input type="text" class="md-form-control" required="" value={state.userInfo.name} onChange={onChangeValue} />
                          <label>First Name</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="md-input-wrapper">
                          <input type="text" class="md-form-control" required="" />
                          <label>Last Name</label>
                        </div>
                      </div>
                    </div>
                    <div class="md-input-wrapper">
                      <input type="email" class="md-form-control" required="required" value={state.userInfo.email} onChange={onChangeValue} />
                      <label>Email Address</label>
                    </div>
                    <div class="md-input-wrapper">
                      <input type="password" class="md-form-control" required="required" value={state.userInfo.password} onChange={onChangeValue} />
                      <label>Password</label>
                    </div>
                    <div class="md-input-wrapper">
                      <input type="password" class="md-form-control" required="required" />
                      <label>Confirm Password</label>
                    </div>
                    {errorMsg}
                    {successMsg}
                    <div class="rkmd-checkbox checkbox-rotate checkbox-ripple b-none m-b-20">
                      <label class="input-checkbox checkbox-primary">
                        <input type="checkbox" id="checkbox" />
                        <span class="checkbox"></span>
                      </label>
                      <div class="captions">Remember Me</div>
                    </div>
                    <div class="col-xs-10 offset-xs-1">
                      <button type="submit" class="btn btn-primary btn-md btn-block waves-effect waves-light m-b-20">Sign up
                      </button>
                    </div>
                    <div class="row">
                      <div class="col-xs-12 text-center">
                        <span class="text-muted">Already have an account?</span>
                        <button onClick={toggleNav} class="f-w-600 p-l-5"> Sign In</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
      </div></div>
    );
}

export default Register
