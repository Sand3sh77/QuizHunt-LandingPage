import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://192.168.1.64:5000/auth/login", {
      method: "POST",
      body: {
        "email": email,
        "password": password,
      },
    })
      .then((v) => {
        console.log("login successful");
      })
      .catch((e) => {
        console.log(e);
      });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="form_container">
      <form action="#" method="post" onSubmit={handleSubmit}>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content" style={{ padding: "1rem 2rem" }}>
              <div>
                <h5
                  style={{
                    textAlign: "center",
                    borderBottom: "1px solid #dee2e6",
                  }}
                >
                  <a
                    className="form_top_a"
                    style={{
                      backgroundColor: "white",
                      border: "1px solid #dee2e6",
                      borderBottom: "none",
                    }}
                  >
                    Log In
                  </a>
                  <a
                    className="form_top_a"
                    style={{ color: "#8e78fc" }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                  >
                    Sign Up
                  </a>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    style={{
                      float: "right",
                      height: "0.7rem",
                      width: "0.7rem",
                    }}
                  ></button>
                </h5>
              </div>
              <div className="ls_form_cont">
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail"
                    className="form-label"
                    style={{ fontSize: "medium" }}
                  >
                    Email
                  </label>
                  <span className="icon_align">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail"
                      aria-describedby="emailHelp"
                      placeholder="Enter your Email"
                      name="lemail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <img
                      style={{ height: "1.5rem" }}
                      className="user_icon"
                      src="src/assets/svg/email.svg"
                      alt="Email Icon"
                    />
                  </span>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword"
                    className="form-label"
                    style={{ fontSize: "medium" }}
                  >
                    Password
                  </label>
                  <span className="icon_align">
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword"
                      placeholder="Enter your Password"
                      name="lpassword"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <img
                      className="user_icon"
                      style={{ height: "1.5rem" }}
                      src="src/assets/svg/pass.svg"
                      alt="Password Icon"
                    />
                  </span>
                </div>

                <div className="text-center excpt">
                  Don't have an account?
                  <a
                    className=""
                    href=""
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                  >
                    Click here to sign up.
                  </a>
                </div>
              </div>
              <div
                className="modal-footer"
                style={{ justifyContent: "center" }}
              >
                <button
                  type="button"
                  className="btn-grey"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn-purple">
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
