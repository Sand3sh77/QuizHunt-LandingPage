import { useState } from "react";
import "./form.css"
const Forms =()=>{
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    return (
        <div className="form_main_container">
        <div className="container form-container">
            <h3>For any queries simply fill the form.</h3>
            <form method="POST" className="form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input className="form-input" type="text" placeholder="Enter Your Name" id="name"/>
                <label htmlFor="age">Age</label>
                <input className="form-input" type="number" placeholder="Enter Your Age" id="age"/>
                <label htmlFor="textarea">Enter your Message</label>
                <textarea className="textarea form-input"rows={5} id="textarea"/>
                <button type="submit" class="btn-full-purple my-3" >Submit</button>
            </form>
        </div>
        </div>
    );
}
export default Forms;