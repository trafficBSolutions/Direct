import '../css/header.css'
import '../css/footer.css'
import '../css/login.css'
const Login = () => {
    return (
      <div>
        <header className="site-header">
          <div className="container">
            <h1 className="school-logo-text float-left">
              <a href="/"><strong>Direct</strong> Connection</a>
            </h1>
          </div>
        </header>
  <main className="login-page">
        <div className="page-banner">
          <div className="page-banner__bg-image" style={{ backgroundImage: "url('connection.jpg')" }}></div>
          <div className="page-banner__content container t-center c-white">
            <h1 className="login-direct">Login</h1>
          </div>
          </div>
  
          <div className="login-container">
            <div className="email-log-container">
            <label htmlFor="email" className="email-log"><b>Email</b></label>
            <input type="text" className="email-log-input" placeholder="Enter Email" name="email" required />
            </div>
            <div className="psw-log-container">
            <label htmlFor="psw" className="psw-log"><b>Password</b></label>
            <input type="password" className="psw-log-input" placeholder="Enter Password" name="psw" required />
            <a href="#" className="forgot-password">Forgot Password?</a>
            </div>
          </div>
          <div className="login-full-container">
            <button type="submit" className="btn btn--full login-dc">Login</button>
              <input type="checkbox" defaultChecked name="remember" /> Remember me     
            </div>
          </main>
  
        <footer className="site-footer">
          <div className="container-footer">
            <div className="site-footer__col-one">
              <h1 className="school-logo-text school-logo-text--alt-color"><a href="/"><strong>Direct</strong> Connection</a></h1>
              <p><a className="site-footer__link" href="#">706-263-0175</a></p>
            </div>
          </div>
        </footer>
      </div>
      
    );
  };
  
  export default Login;
  