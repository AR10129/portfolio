import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p></p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
              <div key={index} className="icon">
                <a key={index}
                  href={socialImg.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon"
                >
                <img src={socialImg.imgPath} alt="social icon" />
                </a>
              </div>
          ))}
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;