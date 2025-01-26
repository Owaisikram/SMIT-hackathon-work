import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img
            src="https://saylaniwelfareusa.com/static/media/logo_saylaniwelfareusa.22bf709605809177256c.png"
            alt="img"
          />
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/privacy-policy"></Link>
            </li>
            <li>
              <Link to="/terms-of-service">Terms of Service</Link>
            </li>
          </ul>
        </div>
        <div className="footer-socials">
          <a
            href="https://www.facebook.com/SaylaniWelfareInternationalTrust"
            className="social-icon"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAABHNCSVQICAgIfAhkiAAAAktJREFUaEPtmL9PU1EUx7+tDwjUVgoFK6aL3RxhMtGNEP8AC0M3BkPSSOKg0bAATVwloAykmwhhYMZoQkIpJgYwDo6EpQ2FVrHWUqKvVW9d+5p3H7n3/fLcsfnmvfv5fu+557x6Yg+zf/AfLA+BuixlStRlgYISpUQd6gAdXYcG13LblKjMRG9E2nB70IdIWMHVXgWhoALlElCrA8dfaihX6nj/6RxvdyrCtmFqou1tHkyMBRlkly7A1m4VL1dPdXW8AtNAG4klJ/sRjbRz7c2xoPdjQQzf8nFBNkTpvSperDgs0XBIwdzTMLwebk6k9xnoa4eBjt4N4N5IgJ+ykagTQacTfbgZ7WgJuvnhDG8yFRwVavilyvkfwJTLaGHqGmsj7DbSWJmPVcwvizuirdw0BXRpZgDdfq/mHmYXi/h88NPQsb6I2BTQ1OwAApe1QSefHf8bEmQvc0CTDNSnDZpI5lH8xkYiyYtARRqcclui1/sVXPE3366PxkPwdWpPC3OvvqJU/t3ka+5EZcN98+8XDUDo0X0Q78GdIf2BnWezom9j24JOzORx+l3cJWVLUJV1m/jjHE/w3Bpbgh5mVTx5fsINwSO0Jeg2G+gXBH65NIywJejaRhnr78o8QXFrhIKKai9HBRWlH+Jai/BEW9nruoGBQN02AlKilChA36PcHZJPKLSPUo1SjVKN8hWeARXVqAGzdKU06zKLqI/qnhNjAlNq1NiW5KgJVI6v1j2VErXOezlvpkTl+GrdUylR67yX82ZKVI6v1j31L/Sti1p5bJxrAAAAAElFTkSuQmCC"
              alt="img"
              className="socialimg"
            />
          </a>
          <a
            href="https://www.youtube.com/c/SaylaniWelfareInternationalTrust"
            className="social-icon"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA6CAYAAAAOeSEWAAAABHNCSVQICAgIfAhkiAAAAnhJREFUaEPtWDFMU1EUvcVCLbXWYL4DwYQFBxycJLiVjq1j/wyMbhCjgwt1cZAYnUycCGGko3UENgYmBhh0aVLCQFONNlBqFX23SZPG/JB/7//vPfm9N/nbe/e+c8799973YrUn7h8YEIsJ2IgqLcpGVFgQZUXZCDAgaRwBET0hiLKibAQYkDSOgIhSoCSNg6Rx/LYD18acIC66e39/rcOvRj2wn34HgZQdSqYgXSjC9Xv3YXhiMtSD9TvrHFXh/PMBNCtluGidsuOwwaKCd168BgRsyhDoyavnbMXZYJ2lFUgoRU1ba38PGh9WWWFZYFHN8TdrrIBhbDp+ushKZxZYVBSVtWX1dy+hrf5hqrHApnMFyBTnqbFCW/9t4z2c7u6Q/bHA3iy4gB/FmtufIDWbVQVtlLLNc+2PyibgRzVjYDH1OrUq3MjlyUT9C8oo2Iy7AOm5PInY/v8M21amuADJBw9JPnqLjYJ1lkuQmJomHdSrqGChw9+B6qv95RDqb0uk+LiYlcZhge2dNvUoqyYxF+I+x8wrDRbTGdMa09uPXUmwOE/fUi2MOokZBRtGgUrnXcD05ZjRAsXps/2tB9tPkAvEfw+2uVVRrWbG9395meJGwdoeF7+X1wHJoxqr9QzURWCgrniYPpzBgpp2Xuu5bYc9QeFG7JEIOIxbjF8SLlpn6lnmmflnGTxg98HtsQsjCjh1vvULENehmj/Vo1vz4ybrhaIXi1WgLjsoEjB8d5KCxXMtXgeDvCR6OQ0dbGCUGh0IWI3kWnUtylqlX2NwUVYjuVZdi7JW6dcYXJTVSK5V16KsVfo1BhdlNZJr1bUoa5V+jcH/AvcscIo5+j/XAAAAAElFTkSuQmCC"
              alt="img"
              className="socialimg"
            />
          </a>
          <a
            href="https://www.linkedin.com/c/SaylaniWelfareInternationalTrust"
            className="social-icon"
          >
            <img
              src="data:image/png;base64,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"
              alt="img"
              className="socialimg1"
            />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Qarz e Hasana. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
