import logo from "./logo.svg";
import "./App.css";
import Logo from "./images/logo.png";
import home1 from "./images/home1.png";
import home2 from "./images/home2.png";
import home3 from "./images/home3.png";
import home4 from "./images/home4.png";
import home5 from "./images/home5.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import user1 from "./images/user1.png";
import user2 from "./images/user2.png";
import user3 from "./images/user3.png";
import { ImQuotesLeft } from "react-icons/im";
import footerLogo from "./images/Group 278.png";
import social from "./images/Group 173.png";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header>
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img src={Logo} alt="" />
            <ul className="d-lg-flex list-unstyled d-sm-none">
              <li>
                <a href="#" className="me-3 active">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="me-3">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="me-3">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="me-3">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <button className="btn btn-primary d-lg-none">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          <button className="btn btn-primary d-none d-lg-block">
            Book Now
          </button>
        </div>
      </header>

      <section id="serenity" className="d-flex align-items-center">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-8 col-lg-6 col-xl-4">
              <p className="uptitle py-0 m-0">Serenity</p>

              <h1 className="title1 py-0 m-0">
                Stay with us feel like
                <span className="text-primary"> home </span>.
              </h1>
              <p className="secondary-p py-3">
                Pet-friendly hotels are becoming increasingly popular; appealing
                to travellers who can’t bear to be parted.
              </p>
              <button className="btn btn-primary">Read more</button>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-xl-8">
            <div className="row m-0 p-4 findBox ps-5">
              <div className="col-4 col-sm-3">
                <p className="fw-bold .title5">Check in</p>
                <p className="secondary-p">10 Feb 2021</p>
              </div>
              <div className="col-4 col-sm-3">
                <p className="fw-bold .title5">Cheek out</p>
                <p className="secondary-p">13 Feb 2021</p>
              </div>
              <div className="col-4 col-sm-3">
                <p className="fw-bold .title5">Person</p>
                <p className="secondary-p">2 Adults 1 kid</p>
              </div>
              <div className="col-4 col-sm-3">
                <div className="btn btn-primary">Find room</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          marginLeft: "170px",
          marginRight: "170px",
        }}
        className="container py-5"
      >
        <div className="row align-items-center">
          <div className="col-lg-6 position-relative toleft order-2 order-lg-1">
            <img
              src="./images/videoback.png"
              alt=""
              className="backImg shadow-lg"
            />
            <iframe
              width="100%"
              height="320"
              src="https://www.youtube.com/embed/40CtgdqLEFs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-lg-5 offset-lg-1 mb-5 mb-lg-0 order-1 order-lg-2">
            <p className="uptitle">dream holidays</p>
            <h1 className="my-y title2">
              Enjoy unforgettable experiences in dream hotels.
            </h1>
            <button className="btn btn-primary">View More</button>
          </div>
        </div>
      </div>

      <div className="container py-5 my-5 text-center">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 col md-10">
            <h1 className="title2">Why you choose us?</h1>
            <p className="secondary-p">
              Naturally, it’s becoming even more important for hotel and
              hospitality brands to stand out from the crowd. Content marketing
              remains a key way for hotels to do this.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-xl-3 mb-4">
            <div className="border shadow-lg rounded p-3 h-100">
              <img src={icon1} alt="" />
              <h4 className="my-4 title4">Easy booking</h4>
              <p className="secondary-p">
                The booking process should include minimal steps.
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3 mb-4">
            <div className="border shadow-lg rounded p-3 h-100">
              <img src={icon2} alt="" />
              <h4 className="my-4 title4">Friendly interface</h4>
              <p className="secondary-p">
                A hotel booking engine with a good user-friendly.
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3 mb-4">
            <div className="border shadow-lg rounded p-3 h-100">
              <img src={icon3} alt="" />
              <h4 className="my-4 title4">Responsibility</h4>
              <p className="secondary-p">
                You should be able to add rooms to your system.
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3 mb-4">
            <div className="border shadow-lg rounded p-3 h-100">
              <img src={icon4} alt="" />
              <h4 className="my-4 title4">Quick order supply</h4>
              <p className="secondary-p">
                The booking process should include minimal steps.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section id="homes">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6 mb-4 d-flex align-items-center">
              <div>
                <h2 className="title2">About hotel gallery</h2>
                <p className="secondary-p my-4">
                  While some of these examples are real – actually offering
                  guests a stay in the locations advertised – it’s mainly just a
                  way.
                </p>
                <button className="btn btn-primary">View more</button>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="box">
                <img src={home1} alt="" />
                <div className="info">
                  <div className="d-flex justify-content-between">
                    <p className="me-4 fw-bold">Lux: Room</p>
                    <p className="secondary-p">$60 night</p>
                  </div>
                  <div className="btn btn-primary py-2 px-4">Book now</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="box">
                <img src={home2} alt="" />
                <div className="info">
                  <div className="d-flex justify-content-between">
                    <p className="me-4 fw-bold">Mini room</p>
                    <p className="secondary-p">$70 night</p>
                  </div>
                  <div className="btn btn-primary py-2 px-4">Book now</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="box">
                <img src={home3} alt="" />
                <div className="info">
                  <div className="d-flex justify-content-between">
                    <p className="me-4 fw-bold">Stande Room</p>
                    <p className="secondary-p">$65 night</p>
                  </div>
                  <div className="btn btn-primary py-2 px-4">Book now</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="box">
                <img src={home4} alt="" />
                <div className="info">
                  <div className="d-flex justify-content-between">
                    <p className="me-4 fw-bold">Single Room</p>
                    <p className="secondary-p">$55 night</p>
                  </div>
                  <div className="btn btn-primary py-2 px-4">Book now</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="box">
                <img src={home5} alt="" />
                <div className="info">
                  <div className="d-flex justify-content-between">
                    <p className="me-4 fw-bold">Elite Room</p>
                    <p className="secondary-p">$65 night</p>
                  </div>
                  <div className="btn btn-primary py-2 px-4">Book now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        style={{
          marginLeft: "110px",
          marginRight: "110px",
        }}
        className="d-flex  justify-content-between "
      >
        <h3>What our client say</h3>
        <button className="btn btn-primary">View All</button>
      </div>
      <section id="client">
        <div className="container py-5">
          <div className="row">
            <div className=" col-lg-4 col-sm-12">
              <div className="client p-5 mt-4 gap-1 flex-column d-flex justify-content-center align-items-center">
                <img className="user" src={user1} alt="" />
                <ImQuotesLeft
                  style={{
                    color: "#7F7F7F",
                    fontSize: "30px",
                    alignSelf: "start",
                    marginTop: "15px",
                  }}
                  className="align-start"
                />
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "160%",
                    textAlign: "center",
                    color: "#081F32",
                    opacity: 0.6,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  Ultrices.
                </p>
                <p
                  style={{
                    fontFamily: "Gelasio",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "28px",
                    lineHeight: "150%",
                    textAlign: "center",
                    color: "#081F32",
                    opacity: 0.7,
                  }}
                >
                  David lee
                </p>
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "160%",
                    textAlign: "center",
                    color: "#081F32",
                    opacity: 0.7,
                  }}
                >
                  davidlee@
                </p>
              </div>
            </div>
            <div className=" col-lg-4 col-sm-12">
              <div className="client mt-4 p-5 gap-1  d-flex flex-column justify-content-center align-items-center">
                <img className="user" src={user2} alt="" />
                <ImQuotesLeft
                  style={{
                    color: "#1B75BB",
                    fontSize: "30px",
                    alignSelf: "start",
                    marginTop: "15px",
                  }}
                  className="align-start"
                />
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "160%",
                    textAlign: "center",
                    color: "#081F32",
                    opacity: 0.6,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  Ultrices.
                </p>
                <p
                  style={{
                    fontFamily: "Gelasio",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "28px",
                    lineHeight: "150%",
                    textAlign: "center",
                    color: "#081F32",
                    opacity: 0.9,
                  }}
                >
                  Ravi shankor
                </p>
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "160%",
                    textAlign: "center",
                    color: "#081F32",
                    opacity: 0.7,
                  }}
                >
                  ravishankor@
                </p>
              </div>
            </div>
            <div className=" col-lg-4 col-sm-12">
              <div className="client mt-4 p-5 gap-1  d-flex flex-column justify-content-center flex-column align-items-center">
                <img className="user" src={user3} alt="" />
                <ImQuotesLeft
                  style={{
                    color: "#7F7F7F",
                    fontSize: "30px",
                    alignSelf: "start",
                    marginTop: "15px",
                  }}
                  className="align-start"
                />
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "160%",
                    textAlign: "center",
                    color: "#081F32",
                    opacity: 0.6,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  Ultrices.
                </p>
                <p
                  style={{
                    fontFamily: "Gelasio",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "28px",
                    lineHeight: "150%",
                    textAlign: "center",
                    color: "#081F32",
                    opacity: 0.7,
                  }}
                >
                  David lee
                </p>
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "160%",
                    textAlign: "center",
                    color: "#081F32",
                    opacity: 0.7,
                  }}
                >
                  davidlee@
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="intouch">
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12">
              <div className=" p-5 mt-4 gap-4 flex-column d-flex justify-content-center align-items-center">
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "150%",
                    /* identical to box height, or 30px */

                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#081F32",
                    opacity: 0.8,
                  }}
                >
                  STAY IN TOUCH
                </p>
                <p
                  style={{
                    fontFamily: "Gelasio",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "32px",
                    lineHeight: "140%",
                    /* identical to box height, or 30px */

                    letterSpacing: "0.1em",

                    color: "#081F32",
                    opacity: 0.8,
                  }}
                >
                  Join our email. First to know about specials,events and more!
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: 2,
                  }}
                >
                  <input
                    style={{
                      borderRight: "none",
                      borderRadius: "5px",
                      borderColor: "#F7F7F7",
                      minWidth: "300px",
                      paddingX: "30px",
                    }}
                    type="email"
                    placeholder="Enter your email address"
                  />
                  <button
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "15px 40px",
                      width: "120px",
                      height: "54px",
                      background: "#1B75BB",
                      borderRadius: "5px",
                      color: "#FFFFFF",
                      border: "none",
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                style={{ marginTop: "70px" }}
                className="d-flex align-items-start flex-column justify-content-center"
              >
                <img
                  style={{ width: "120px", height: "80px" }}
                  src={footerLogo}
                  alt=""
                />
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "150%",
                    color: "#081F32",
                    textAlign: "start",
                    opacity: 0.7,
                  }}
                >
                  Travel deals on hotels, flights, vacation packages.
                </p>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "160%",
                    letterSpacing: "0.06rem",
                    color: "#081F32",
                    textAlign: "start",
                    opacity: 0.7,
                  }}
                >
                  @shovasatkhira88.com
                </p>
                <img src={social} alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                style={{ marginTop: "100px" }}
                className="d-flex  align-items-start flex-column justify-content-center"
              >
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "150%",
                    color: "#081F32",
                  }}
                >
                  Home
                </p>
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "150%",
                    color: "#081F32",
                    textAlign: "start",
                    opacity: 0.7,
                  }}
                >
                  Accessibility
                </p>
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "150%",
                    color: "#081F32",
                    textAlign: "start",
                    opacity: 0.7,
                  }}
                >
                  Lertifiotion
                </p>
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "150%",
                    color: "#081F32",
                    textAlign: "start",
                    opacity: 0.7,
                  }}
                >
                  Knowledge
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                style={{ marginTop: "100px" }}
                className="d-flex  align-items-start flex-column justify-content-center"
              >
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "150%",
                    color: "#081F32",
                  }}
                >
                  Pages
                </p>
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "150%",
                    color: "#081F32",
                    textAlign: "start",
                    opacity: 0.7,
                  }}
                >
                  Blogs
                </p>
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "150%",
                    color: "#081F32",
                    textAlign: "start",
                    opacity: 0.7,
                  }}
                >
                  Careers
                </p>
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "150%",
                    color: "#081F32",
                    textAlign: "start",
                    opacity: 0.7,
                  }}
                >
                  Communing
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                style={{ marginTop: "100px" }}
                className="d-flex  align-items-start flex-column justify-content-center"
              >
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "150%",
                    color: "#081F32",
                  }}
                >
                  SUBSCRIBE
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: 2,
                  }}
                >
                  <input
                    style={{
                      borderRight: "none",
                      borderRadius: "5px",
                      borderColor: "#F7F7F7",
                      minWidth: "250px",
                      paddingX: "30px",
                    }}
                    type="email"
                    placeholder="Enter your email address"
                  />
                  <button
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "15px 40px",
                      width: "120px",
                      height: "54px",
                      background: "#1B75BB",
                      borderRadius: "5px",
                      color: "#FFFFFF",
                      border: "none",
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
