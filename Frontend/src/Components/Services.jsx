import { Button } from "react-bootstrap";

const ServiceCard = ({ imageName, title }) => {
  return (
    <section id="services">
      <div
        className="service-card d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundImage: `url(/images/${imageName})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "372px",
          width: "304px",
          borderRadius: "30px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        ></div>

        <div className="text-center" style={{ zIndex: 2 }}>
          <h2
            className="font-integral"
            style={{ fontSize: "28px", color: "white" }}
          >
            {title}
          </h2>
          <a href="#contactus" style={{ textDecoration: "none" }}>
            <Button
              className="btn d-flex justify-content-center align-items-center"
              style={{
                height: "40px",
                width: "154px",
                fontSize: "25px",
                borderRadius: "12px",
                border: "1px solid white",
                background: "transparent",
                color: "white",
              }}
            >
              Explore
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "Wheel Alignment", image: "1.png" },
    { title: "Wheel Balancing", image: "2.png" },
    { title: "Tyre Rotation", image: "3.png" },
    { title: "Warranty Claims", image: "4.png" },
    { title: "Tyre Puncture", image: "5.png" },
    { title: "Free Checkup", image: "6.png" },
    { title: "N2 Filling", image: "7.png" },
  ];

  return (
    <div className="container">
      <h1
        className="text-center font-integral"
        style={{
          fontSize: "35px",
          marginTop: "40px",
          marginBottom: "40px",
          color: "#0768BD",
        }}
      >
        Services
      </h1>

      <div className="row justify-content-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="col-md-3 col-sm-6 d-flex justify-content-center"
            style={{ marginBottom: "14px" }}
          >
            <ServiceCard imageName={service.image} title={service.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
