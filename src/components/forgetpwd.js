import React, {useContext, useState} from 'react'
import {MyContext} from '../contexts/MyContext'
import {Helmet} from 'react-helmet'

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
                ...state.userInfo,
                [e.target.name]:e.target.value
            }
        });
    }

    // On Submit Login From
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
	<Helmet>
	<title>Transport99 | Forgot Password</title>
	<meta charset="utf-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
	<meta name="description" content="codedthemes"/>
	<meta name="keywords"
		  content=", Responsive, Landing, Bootstrap, App, Template, Mobile, iOS, Android, apple, creative app"/>
	<meta name="author" content="codedthemes"/>
	<link rel="shortcut icon" href="assets/images/favicon.png" type="image/x-icon"/>
	<link rel="icon" href="assets/images/favicon.ico" type="image/x-icon"/>
   <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,500,700" rel="stylesheet"/>
	<link rel="stylesheet" type="text/css" href="assets/icon/icofont/css/icofont.css"/>
    <link rel="stylesheet" type="text/css" href="assets/plugins/bootstrap/css/bootstrap.min.css"/>
	<link rel="stylesheet" type="text/css" href="assets/plugins/Waves/waves.min.css"/>
	<link rel="stylesheet" type="text/css" href="assets/css/main.css"/>
	<link rel="stylesheet" type="text/css" href="assets/css/responsive.css"/>
	<link rel="stylesheet" type="text/css" href="assets/css/color/color-1.min.css" id="color"/>
	<script src="assets/plugins/jquery/dist/jquery.min.js"></script>
	<script src="assets/plugins/jquery-ui/jquery-ui.min.js"></script>
	<script src="assets/plugins/tether/dist/js/tether.min.js"></script>
	<script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
	<script src="assets/plugins/Waves/waves.min.js"></script>
	<script type="text/javascript" src="assets/pages/elements.js"></script>
</Helmet>
	<div class="login p-fixed d-flex text-center bg-primary common-img-bg">
		<div class="container-fluid">
			<div class="row">
				   <div class="col-xs-12">
						<div class="login-card card-block">
							<form class="md-float-material">
								<div class="text-center">
									<img src="assets/images/logo-black.png" alt="logo">
								</div>
								<h3 class="text-primary text-center m-b-25">Recover your password</h3>
								<div class="md-group">
									<div class="md-input-wrapper">
										<input type="text" class="md-form-control" />
										<label>Email or Mobile Number</label>
									</div>
								</div>
						<div class="btn-forgot">
							<button type="reset" class="btn btn-primary btn-md waves-effect waves-light text-center">SEND RESET LINK
							</button>
						</div>
								<div class="row">
									<div class="col-xs-12 text-center m-t-25">

										<a href="login1.html" class="f-w-600 p-l-5"> Sign In Here</a>

									</div>
								</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
    );
}

export default Login;