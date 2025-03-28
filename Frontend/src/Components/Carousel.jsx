import CarouselImg from "./assets/Images/Carousel.png";

export default function Carousel() {
  return (
    <div
      className="position-relative w-100"
      style={{ height: "461px", overflow: "hidden" }}
    >
      <img
        src={CarouselImg}
        className="w-100 h-100 object-fit-cover"
        alt="Carousel"
      />
      <div className="position-absolute top-50 start-0 translate-middle-y font-carousel text-start ms-5">
        <h1>“ Right Tyres, Perfect Alignment</h1>
        <h1>Drive Like New ”</h1>
      </div>
    </div>
  );
}
