import "./Styles/Brands.scss";

export default function Brands() {
  const logos = Array.from(
    { length: 13 },
    (_, index) => `/Logos/Logo${index + 1}.svg`
  );
  return (
    <>
      <h1
        className="text-center font-integral"
        style={{
          fontSize: "35px",
          marginTop: "40px",
          marginBottom: "40px",
          color: "#0768BD",
        }}
      >
        Brands we deal with
      </h1>
      <div className="carousel-container">
        <div className="carousel-track">
          {logos.map((src, idx) => (
            <img key={idx} src={src} alt={`Brand ${idx + 1}`} />
          ))}
        </div>
      </div>
    </>
  );
}
