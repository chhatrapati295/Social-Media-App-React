import './login.css'

export default function Login() {
  return (
    <div>
      <div className="login">
        <div className="leftLogin">
            <h2 className="loginLogo">Facebook</h2>
            <p className="loginText">Connect with friends and the world around on Facebook.</p>
        </div>
        <div className="rightLogin">
            <input type="email" placeholder='Email' className='inputLogin' />
            <input placeholder="Password" className='passwordLogin' />
            <button className="btnLogin">Log In</button>
            <span className="forgotPass">Forgot Password ?</span>
            <button className="btnSignUp">Create a New Account</button>
        </div>
      </div>
    </div>
  )
}
