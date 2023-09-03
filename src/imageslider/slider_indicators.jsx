const Indicators = () => {
  return (
    <>
      <ol className="carousel-indicators">
        <li
          data-bs-target="#carouselId"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="First slide"
        ></li>
        <li
          data-bs-target="#carouselId"
          data-bs-slide-to="1"
          aria-label="Second slide"
        ></li>
        <li
          data-bs-target="#carouselId"
          data-bs-slide-to="2"
          aria-label="Third slide"
        ></li>
      </ol>
    </>
  );
};
export default Indicators;
