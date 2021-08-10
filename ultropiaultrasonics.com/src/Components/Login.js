import React from "react";
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}

function Login() {

  return (
    <div>
      <GoogleLogin
        clientId="449423198771-al0ef4vjt63puobapahaqior5ktmoo87.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default Login;