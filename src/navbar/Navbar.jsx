import NavLinks from "./NavLinks";
import LoginForm from "./login_form";
import SignupForms from "./signup_form";
import UserContainer from "./user_container";
import "./navbar.css";
import "./nav";
import Progress from "./progressbar";

const Navbar = () => {
  return (
    <>
      <div className="nav_progress_container">
        <div className="nav_container">
          <img src="src/assets/images/logo.png" className="img my-1" />
          <div style={{ display: "flex" }}>
            <NavLinks />
            <div
              style={{
                width: "3px",
                height: "3rem",
                background: "#8e78fc",
                border: "1px solid #8e78fc",
              }}
            ></div>
            <UserContainer />
          </div>
        </div>
        <Progress />
      </div>

      <LoginForm />
      <SignupForms />
    </>
  );
};

export default Navbar;
