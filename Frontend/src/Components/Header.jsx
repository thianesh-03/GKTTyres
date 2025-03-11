import { FaInstagram, FaTwitter, FaEnvelope, FaFacebook } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <div className="bg-primary text-light py-2 px-4 d-flex justify-content-between align-items-center">
        <div>
          <span className="px-3">📞 +91 9698340000</span>
          <span>✉️ gkttyres@gmail.com</span>
        </div>
        <div>
          <span>
            <a
              className="pe-4"
              href="https://www.instagram.com/gkttyres?igsh=MWR6Z3FpM3dwOGE4eg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} color="white" />
            </a>
          </span>
          <span>
            <a
              className="pe-4"
              href="https://x.com/GTyres94011?t=2ymGy9zJ3lqXZ-tkFqjtYw&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={24} color="white" />
            </a>
          </span>
          <span>
            <a
              className="pe-4"
              href="https://www.facebook.com/share/p/18gkgTtS45/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} color="white" />
            </a>
          </span>
          <span>
            <a
              href="mailto:gkttyres@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope size={24} color="white" />
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
