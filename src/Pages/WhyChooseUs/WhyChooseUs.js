import React from "react";
import { Container } from "react-bootstrap";
import "./WhyCooseUs.css";

const WhyChooseUs = () => {
  return (
    <Container className="container-fluid my-5 rounded ">
      <div class="why-bg d-flex flex-column justify-content-center" id="why_us">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 col-md-offset-2 text-center mb-4">
              <h3 class="text-white">Why Choose TravelBizz</h3>
              <p class="text-white">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <div class="single-travel">
                <div class="media">
                  <div class="media-left media-middle travel-number">
                    <span>01.</span>
                  </div>
                  <div class="media-body travel-content">
                    <h4>Travel Arrangements</h4>
                    <p>
                      Here we offer various travelling packages around the
                      world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="single-travel">
                <div class="media">
                  <div class="media-left media-middle travel-number">
                    <span>02.</span>
                  </div>
                  <div class="media-body travel-content">
                    <h4>Cheap Flights</h4>
                    <p>
                      We offer travel friendly price of flights to enjoy your
                      travel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="single-travel">
                <div class="media">
                  <div class="media-left media-middle travel-number">
                    <span>03.</span>
                  </div>
                  <div class="media-body travel-content">
                    <h4>Hand-picked tours</h4>
                    <p>
                      We offer the best packages to ensure you enjoy to the
                      fullest.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="single-travel">
                <div class="media">
                  <div class="media-left media-middle travel-number">
                    <span>04.</span>
                  </div>
                  <div class="media-body travel-content">
                    <h4>Private Guide</h4>
                    <p>
                      You will get access to a skilled guide to show you around.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="single-travel">
                <div class="media">
                  <div class="media-left media-middle travel-number">
                    <span>05.</span>
                  </div>
                  <div class="media-body travel-content">
                    <h4>Special Activities</h4>
                    <p>
                      We offer some special activities to make your travel
                      exciting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="single-travel">
                <div class="media">
                  <div class="media-left media-middle travel-number">
                    <span>06.</span>
                  </div>
                  <div class="media-body travel-content">
                    <h4>Best Price Guarantee</h4>
                    <p>
                      Our package offers the best pricing without any
                      compromise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhyChooseUs;
