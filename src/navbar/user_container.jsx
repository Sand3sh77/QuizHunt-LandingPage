import { useState } from "react";

const UserContainer = () => {
    // const [form,setForm]=useState('false');

    // const handleClick=()=>{
    //   setForm(true);
    // }
  return (
    <div className="user_container">
      <button
        type="button"
        className="btn-full-purple mx-3"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        // onClick={handleClick}
      >
        Log In
      </button>
    </div>
  );
};
export default UserContainer;
