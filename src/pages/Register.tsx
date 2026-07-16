import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">

      <div className="register__overlay">

        <div className="register__card">

          <img
            src="/logo.png"
            alt="KARATECH ELV"
            className="register__logo"
          />

          <h1>KARATECH ELV</h1>

          <h2>Engineering Operating System</h2>

          <p className="register__description">
            Create your account
          </p>

          <input
            type="text"
            placeholder="First Name"
          />

          <input
            type="text"
            placeholder="Last Name"
          />

          <input
            type="text"
            placeholder="Username"
          />

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <input
            type="password"
            placeholder="Confirm Password"
          />

          <button>
            CREATE ACCOUNT
          </button>

          <div className="register__footer">

            <p>
              Already have an account?
            </p>

            <Link to="/">
              SIGN IN
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;
