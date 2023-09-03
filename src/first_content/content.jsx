import "./content.css";
const FirstContent = () => {
  return (
    <div className="main_container">
      <div className="container first_container">
        <div className="content_text">
        <h1>Download QuizHunt App</h1>
        <h3 style={{color:'black'}}>We are also available for any phone.Simply search QuizHunt in Store.</h3>
        <button className="content_button ">
          Download Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 svg arrow"
          >
            <path
              fill-ule="evenodd"
              d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        </div>
        <div className="content_img_container">
        <img src="src/assets/images/logo.png" className="logo_img"/>
        <img src="src/assets/images/phone.png" className="phone_img"/>
        </div>
      </div>
    </div>
  );
};
export default FirstContent;