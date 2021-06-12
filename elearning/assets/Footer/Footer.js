import React from "react";
import logo from "../../assets/images/light-logo.png";

const Footer = () => {
  return (
    <div>
      <section className="footer-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-8 col-xl-3 col-sm-6">
              <div className="widget footer-about mb-5 mb-lg-0">
                <h5 className="widget-title text-gray">About us</h5>
                <ul className="list-unstyled footer-info">
                  <li>
                    <span>Ph:</span>+(68) 345 5902
                  </li>
                  <li>
                    <span>Email:</span>info@yourdomain.com
                  </li>
                  <li>
                    <span>Location:</span> 123 Fifth Floor East 26th Street, New
                    York, NY 10011
                  </li>
                </ul>
                <ul className="list-inline footer-socials">
                  <li className="list-inline-item">Follow us :</li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    {" "}
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-pinterest" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-7 ml-auto col-lg-7 col-md-12 col-sm-12">
              <div className="row">
                <div className="col-lg-4 col-xl-4 col-sm-4 col-md-4 ">
                  <div className="footer-widget mb-5 mb-lg-0">
                    <h5 className="widget-title text-gray">Explore</h5>
                    <ul className="list-unstyled footer-links">
                      <li>
                        <a href="#">About us</a>
                      </li>
                      <li>
                        <a href="#">Contact us</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">Support</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-xl-4 col-sm-4 col-md-4">
                  <div className="footer-widget mb-5 mb-lg-0">
                    <h5 className="widget-title text-gray">Courses</h5>
                    <ul className="list-unstyled footer-links">
                      <li>
                        <a href="#">SEO Business</a>
                      </li>
                      <li>
                        <a href="#">Digital Marketing</a>
                      </li>
                      <li>
                        <a href="#">Graphic Design</a>
                      </li>
                      <li>
                        <a href="#">Social Marketing</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-xl-4 col-sm-4 col-md-4">
                  <div className="footer-widget mb-5 mb-lg-0">
                    <h5 className="widget-title text-gray">Legal</h5>
                    <ul className="list-unstyled footer-links">
                      <li>
                        <a href="#">Terms &amp; Condition</a>
                      </li>
                      <li>
                        <a href="#">Privacy policy</a>
                      </li>
                      <li>
                        <a href="#">Return policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-btm">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-xl-6 col-lg-4 col-md-12">
                <div className="footer-logo text-lg-left text-center mb-4 mb-lg-0">
                  <img src={logo} alt="EduHash" className="img-fluid" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-8 col-md-12">
                <div className="copyright text-lg-right text-center">
                  <p>
                    © Copyright EduHash Template All rights reserved.Crafted by{" "}
                    <a href="https://themeturn.com">Dreambuzz</a>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="fixed-btm-top">
        <a href="#top-header" className="js-scroll-trigger scroll-to-top">
          <i className="fa fa-angle-up" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
