const SignupForms = () => {
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal1"
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
                  style={{ color: "#8e78fc" }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Log In
                </a>
                <a
                  className="form_top_a"
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #dee2e6",
                    borderBottom: "none",
                  }}
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
            <div>
              <div className="ls_form_cont">
                <form action="#" method="post" encType="multipart/form-data">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputname1"
                      className="form-label"
                      style={{ fontSize: "medium" }}
                    >
                      Full Name
                    </label>
                    <span className="icon_align">
                      <input
                        type="text"
                        className="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Enter your FullName"
                        id="exampleInputname1"
                        name="username"
                      />
                      <img
                        style={{ height: "1.5rem" }}
                        className="user_icon"
                        src="src/assets/svg/user.svg"
                        alt="User Icon"
                      />
                    </span>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label"
                      style={{ fontSize: "medium" }}
                    >
                      Email
                    </label>
                    <span className="icon_align">
                      <input
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Enter your Email"
                        id="exampleInputEmail1"
                        name="email"
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
                      htmlFor="egcity"
                      className="form-label"
                      style={{ fontSize: "medium" }}
                    >
                      City
                    </label>
                    <select
                      className="form-select form-select-lg"
                      style={{ fontSize: "1rem" }}
                      id="egcity"
                      name="city"
                    >
                      <option value="">Select a city</option>
                      <option value="Kathmandu">Kathmandu</option>
                      {/* Add more city options here */}
                    </select>
                  </div>
                  <div
                    className="mb-3"
                    style={{ display: "flex", gap: "1rem" }}
                  >
                    <span>
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                        style={{ fontSize: "medium" }}
                      >
                        Password
                      </label>
                      <span className="icon_align">
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Enter Password:"
                          name="password"
                        />
                        <img
                          className="user_icon"
                          style={{ height: "1.5rem" }}
                          src="src/assets/svg/pass.svg"
                          alt="Password Icon"
                        />
                      </span>
                    </span>
                    <span>
                      <label
                        htmlFor="examplecPassword1"
                        className="form-label"
                        style={{ fontSize: "medium" }}
                      >
                        Confirm Password
                      </label>
                      <span className="icon_align">
                        <input
                          type="password"
                          className="form-control"
                          id="examplecPassword1"
                          placeholder="Enter Password:"
                          name="cpassword"
                        />
                        <img
                          className="user_icon"
                          style={{ height: "1.5rem" }}
                          src="src/assets/svg/pass.svg"
                          alt="Password Icon"
                        />
                      </span>
                    </span>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="examplephn"
                      className="form-label"
                      style={{ fontSize: "medium" }}
                    >
                      Phone Number
                    </label>
                    <span className="icon_align">
                      <input
                        type="number"
                        className="form-control"
                        id="examplephn"
                        aria-describedby="emailHelp"
                        placeholder="Enter your Phone No."
                        name="phoneno"
                      />
                      {/* <img style={{ height: '1.5rem' }} className="user_icon" src="svg/email.svg" /> */}
                    </span>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="examplefile"
                      className="form-label"
                      style={{ fontSize: "medium" }}
                    >
                      Add Profile
                    </label>
                    <span className="icon_align">
                      <input
                        type="file"
                        className="form-control"
                        id="examplefile"
                        name="imglink"
                      />
                      {/* <img style={{ height: '1.5rem' }} className="user_icon" src="svg/email.svg" /> */}
                    </span>
                  </div>
                  <div className="text-center excpt">
                    Already have an account?
                    <a
                      className=""
                      href=""
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Click here to Log In.
                    </a>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer" style={{ justifyContent: "center" }}>
              <button
                type="button"
                className="btn-grey"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn-purple">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForms;
