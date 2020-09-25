import React from "react";
import Footer from "./Footer";
import HomeNavbar from "./HomeNavbar";

function Home() {
  return (
    <div >
    <HomeNavbar />
    <div className="container">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-pause="hover"
        data-interval="1500"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="info-row">
              <img
                className="left-img"
                src="https://www.blockchain-expo.com/wp-content/uploads/2019/11/629795-cryptocurrency-thinkstock-120417.jpg"
                alt="crypto-img"
              />

              <h3>Cryptocurrency</h3>
              <p>
                A cryptocurrency is a digital asset designed to work as a medium
                of exchange wherein individual coin ownership records are stored
                in a ledger existing in a form of computerized database using
                strong cryptography to secure transaction records.
              </p>
            </div>
            <div className="info-row">
              <img
                className="right-img"
                src="https://png.pngitem.com/pimgs/s/346-3460443_machine-learning-course-near-me-machine-learning-logo.png"
                alt="ml-img"
              />

              <h3>Machine Learning</h3>
              <p>
                Machine learning is an application of artificial intelligence
                (AI) that provides systems the ability to automatically learn
                and improve from experience without being explicitly programmed.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="info-row">
              <img
                className="left-img"
                src="https://devops.com/wp-content/uploads/2020/04/Blockchain-Debate-1280x720.jpg"
                alt="blockChain-img"
              />

              <h3>Blockchain</h3>
              <p>
                A blockchain is a growing list of records, called blocks, that
                are linked using cryptography. Each block contains a
                cryptographic hash of the previous block, a timestamp, and
                transaction data.
              </p>
            </div>
            <div className="info-row">
              <img
                className="right-img"
                src="https://ifr.org/downloads/press2018/automatica-education-training_1600x900.jpg"
                alt="robotics-img"
              />

              <h3>Robotics</h3>
              <p>
                Robotics is the intersection of science, engineering and
                technology that produces machines, called robots, that
                substitute for (or replicate) human actions.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="info-row">
              <img
                className="left-img"
                src="https://riberasolutions.com/wp-content/uploads/2018/03/smart-city-iot-and-ai.png"
                alt="ioT-img"
              />

              <h3>Internet Of Things</h3>
              <p>
                The Internet of Things (IoT) describes the network of physical
                objects “things” that are embedded with sensors, software, and
                other technologies for the purpose of connecting and exchanging
                data with other devices and systems over the internet.
              </p>
            </div>
            <div className="info-row">
              <img
                className="right-img"
                src="https://www.umega.co.uk/wp-content/uploads/get-started.jpg"
                alt="robotics-img"
              />

              <h3>Want to read more or write your own blog?</h3>
              <h5>Then Sign-up and get started.</h5>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </div>
  );
}

export default Home;


