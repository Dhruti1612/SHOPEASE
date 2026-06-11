import "./Login.css";
import { FaFutbol } from "react-icons/fa";
import {FiArrowLeft} from "react-icons/fi";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="login-page">
      <Link to="/" className="back-btn">
        <FiArrowLeft />
      </Link>
      <div className="overlay-login">

        {/* Left Side */}
        <div className="left-section">
          <div className="brand" onClick={()=> navigate("/")}>
            <FaFutbol className="brand-icon" />
            <h1>TURFMASTER</h1>
          </div>

          <h2>
            Level up your <span>facility</span>
            <br />
            game.
          </h2>

          <p>
            The ultimate arena for athletic facility management.
            Book, manage, and scale your sports empire with precision.
          </p>

          <div className="stats">
            <div className="stat-card">
              <h3>1,200+</h3>
              <span>LIVE FACILITIES</span>
            </div>

            <div className="stat-card">
              <h3>45k</h3>
              <span>DAILY GAMES</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="login-card">

          <h1>Welcome Back</h1>
           <p>Login to your account</p>

          <form className="login-form">

            <div className="input-group">
      <label>Email Address</label>
      <input
        type="email"
        placeholder="Enter your email"
      />
    </div>

    <div className="input-group">
      <label>Password</label>
      <input
        type="password"
        placeholder="Enter your password"
      />
    </div>

    <div className="forgot-password">
      <a href="#">Forgot Password?</a>
    </div>

    <button type="submit" className="login-btn-submit">
      Login
    </button>

    <p className="signup-text">
      Don't have an account? <span onClick={() => navigate("/register")}>Register</span>
    </p>
          </form>
          </div>

        </div>

      </div>
  );
}

export default Login;