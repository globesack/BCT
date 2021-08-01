import React from 'react';
import {Helmet} from 'react-helmet'
class Header extends React.Component
{
  render()
  {
    return (
    <Helmet>
    

    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="description" content="codedthemes"/>
    <meta name="keywords"
        content=", Responsive, Landing, Bootstrap, App, Template, Mobile, iOS, Android, apple, creative app"/>
    <meta name="author" content="codedthemes"/>

    <link rel="shortcut icon" href="assets/images/favicon2.png" type="image/x-icon"/>
    <link rel="icon" href="assets/images/favicon.ico" type="image/x-icon" />
     <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,500,700" rel="stylesheet"/>
    <link href="assets/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
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
    )
  }
}
export default Header;
