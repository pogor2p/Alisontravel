@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,500,600,700');
@import url('https://fonts.googleapis.com/css?family=Raleway:300,400,500');
@import "http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css";

*, *::before, *::after {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
body {
    width: 100%;
    position: relative;
    margin: 0;
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
    background-color: #fafafa;
}
button {
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
}
#main-header {
    height: 770px;
    max-width: 1440px;
    background: #fefefe;
    color: gray;
    /* position: absolute; */
    position: relative;
    right: 0;
    top: 0;
    left: 0;
    z-index: 1050;
    padding: 10px 0;
    font-size: 13px;
    -webkit-transition: all .2s;
    transition: all .2s;
    -webkit-box-shadow: 1px 1px 2px 0px rgba(50, 50, 50, 0.11);
    -moz-box-shadow: 1px 1px 2px 0px rgba(50, 50, 50, 0.11);
    box-shadow: 1px 1px 2px 0px rgba(50, 50, 50, 0.11);
    background-color: #fefefe;
    background-image: url(../image/bitmap-bitmap-mask.jpg);
    background-position: center;
    background-size: cover;
    /* background-size: 100% auto; */
    background-repeat: no-repeat;
}
#main-header::after {
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 42%;
    left: 17%; 
    background-image: url(../image/find-places-to-stay.svg);
/* background-position: 30% 30%; */
    background-size: 45% auto;
    background-repeat: no-repeat;
}    
.top-nav ul {
    list-style: none;
    position: relative;
    float: right;
    display: inline-table;
    padding: 0;
    margin: 0;
}
.top-nav ul li {
    float: left;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
}
.top-nav ul li:hover > a {
    color: #e9457f;
}
.top-nav ul li:hover > ul {
    display: block;
}
.top-nav ul li {
    float: left;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
}
.top-nav ul li a {
    display: block;
    padding: 20px 25px;
    color: #fefefe; /*d8d8d8;*/
    font-size: .95em;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;
}
.top-nav ul ul {
    display: none;
    background: #fff;
    position: absolute;
    top: 100%;
    box-shadow: -3px 3px 10px -2px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding-left: 0;
    z-index: 125000;
    min-width: 150px;
}
.top-nav ul ul li {
    float: none;
    position: relative;
}
.top-nav ul ul li a {
    padding: 10px 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    display: block;
}
.top-nav ul ul ul {
    position: absolute;
    left: 100%;
    top: 0;
}
.mn-dropdown {
    text-align: left;
    position: relative;
    font-size: 12px;
    display: inline-block;
}
.mn-dropdown .arrow-down {
    font-size: 14px;
    position: absolute;
    right: 3px;
    top: 3px;
}
.mn-d-selected {
    background-color: #f7f7f7;
    padding: 3px 13px 3px 10px;
    border-radius: 3px;
    cursor: pointer;
}
.mn-dropdown .arrow-down {
    font-size: 14px;
    position: absolute;
    right: 3px;
    top: 3px;
}
.mn-d-content {
    z-index: 2000;
    position: absolute;
    top: 23px;
    left: 0;
    right: 0;
    background-color: #f7f7f7;
    display: none;
}
.md-c-i {
    padding: 5px 9px;
    cursor: pointer;
    text-transform: uppercase;
    color: #555;
    text-align: left;
    display: block;
    font-size: 13px;
    border-top: 1px solid #eee;
}
.md-c-i:hover {
    text-decoration: none;
    color: #333;
}
.row.p-sm > div:not(:first-child) {
    padding-left: 5px;
}
.row.p-sm > div:not(:last-child) {
    padding-right: 5px;
}
.img-logo {
    height: 100px;
    width: 100px;
    /* position: absolute; */
    /* left: 10px; */
    /* top: 30px; */
    background: transparent url(../image/logo-transparents2x.png)  no-repeat;
    background-size: contain;
}

   

