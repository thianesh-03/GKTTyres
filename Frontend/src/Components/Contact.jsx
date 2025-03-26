import logo from "../Components/assets/Logo/logo.png";
import x from "./assets/Logo/Social-Links/x.png";
import facebook from "./assets/Logo/Social-Links/facebook.png";
import gmail from "./assets/Logo/Social-Links/gmail.png";
import instagram from "./assets/Logo/Social-Links/instagram.png";
import { Button } from "react-bootstrap";

export default function Contact() {
  return (
    <section
      id="contactus"
      className="bg-primary w-100"
      style={{ height: "421px" }}
    >
      <div className="container-fluid position-relative h-100">
        <div
          className="position-absolute bg-white p-2"
          style={{
            top: "20px",
            left: "20px",
          }}
        >
          <img
            src={logo}
            alt="GKT Tyres Logo"
            className="img-fluid mb-2"
            width="100"
          />
        </div>

        <div className="row h-100 text-white">
          <div className="col-md-4 d-flex flex-column justify-content-center px-4 mt-5">
            <h5 className="font-integral mt-5">ABOUT US</h5>
            <p className="mb-2 custom-font ">
              Best service and thoughtful consultations given by the management
              about my car alignment and wheel balancing. I recommend this place
              for all tyre services.
            </p>
            <Button
              className="btn d-flex justify-content-center align-items-center"
              style={{
                height: "24px",
                width: "101px",
                fontSize: "16px",
                borderRadius: "12px",
                border: "1px solid white",
                background: "transparent",
                color: "white",
              }}
            >
              Explore
            </Button>
            <p className="mt-3 custom-font">
              <strong>Address:</strong>
              <br />
              GKT Tyres, Thindal Medu, Perundurai Road, Erode - 638012.
              <br />
              <strong>Phone:</strong> 9698340000, 8903024212
            </p>
          </div>

          {/* Middle Section - Navigation & Social Icons (Side by Side) */}
          <div className="col-md-4 d-flex flex-column align-items-center justify-content-center">
            {/* Flexbox for Horizontal Layout */}
            <div className="d-flex align-items-center">
              {/* Navigation Links */}
              <nav className="d-flex flex-column text-center me-4 custom-font fs-5 me-5">
                <a href="#" className="text-white text-decoration-none my-1">
                  Home
                </a>
                <a
                  href="#aboutus"
                  className="text-white text-decoration-none my-1"
                >
                  About us
                </a>
                <a
                  href="#services"
                  className="text-white text-decoration-none my-1"
                >
                  Services
                </a>
                <a
                  href="#products"
                  className="text-white text-decoration-none my-1"
                >
                  Products
                </a>
                <a
                  href="#testimonials"
                  className="text-white text-decoration-none my-1"
                >
                  Testimonials
                </a>
                <a
                  href="#contactus"
                  className="text-white text-decoration-none my-1"
                >
                  Contact us
                </a>
              </nav>

              {/* Social Media Icons (Now Aligned to the Right of Nav Links) */}
              <div className="d-flex flex-column align-items-center  ms-5">
                <a href="mailto:gkttyres@gmail.com" className="mb-2">
                  <img src={gmail} alt="Gmail" width="50" />
                </a>
                <a
                  href="https://x.com/GTyres94011?t=2ymGy9zJ3lqXZ-tkFqjtYw&s=09"
                  className="mb-2"
                >
                  <img src={x} alt="Twitter/X" width="50" />
                </a>
                <a
                  href="https://www.instagram.com/gkttyres?igsh=MWR6Z3FpM3dwOGE4eg=="
                  className="mb-2"
                >
                  <img src={instagram} alt="Instagram" width="50" />
                </a>
                <a
                  href="https://www.facebook.com/share/p/18gkgTtS45/"
                  className="mb-2"
                >
                  <img src={facebook} alt="Facebook" width="50" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Google Map */}
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.2468215895165!2d77.6705363!3d11.3166615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96e8ea8918187%3A0x1c82ba0edbdfaf40!2sGKT%20Tyres!5e0!3m2!1sen!2sin!4v1743008219888!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
