


const Sign_up= () => {
 

  return (
    <div className="form-cart">
    <div className="wrapper">
      <div className="form-wrapper sign-up">
        <form>
          <h2>Sign Up</h2>
          <div className="input-group">
            <input type="text" required />
            <label>Username</label>
          </div>
          <div className="input-group">
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-group">
            <input type="password" required />
            <label>Password</label>
          </div>
          <button type="submit" className="btn">Sign Up</button>
          <div className="sign-link">
           
          </div>
        </form>
      </div>
    </div>
    
  </div>
  );
};

export default Sign_up;
