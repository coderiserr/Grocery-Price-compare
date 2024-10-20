import { Link } from "react-router-dom";
const Sign_In = ()=>{

    return(
        <div className="form-cart">
    <div className="wrapper">
        <div className="form-wrapper sign-in">
        <form>
          <h2>Login</h2>
          <div className="input-group">
            <input type="text" required />
            <label>Username</label>
          </div>
          <div className="input-group">
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="forgot-pass">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btn">Login</button>
          <div className="sign-link">
            <Link to="/signup"><p>Don't have an account?  Sign Up</p></Link>
          </div>
        </form>
      </div>
      </div>
    
  </div>
    )
}
export default Sign_In;