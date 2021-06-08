import React, { Component } from "react";
import { a } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div className="container-fluid px-0 ">
      
        <div className=" footerRow">
          <div className="conatiner pb-5">
          <hr className="bg-light"></hr>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-12 ">
            <div className="footerCol">
              <img
                className="footerLogo"
                src="/images/site_logo.png"
                alt="image"
              ></img>
              <h3 className="footerTitle">Registered Office</h3>
              <p className="footerText">
                Chairman Foam <br />
                64 Block M, Gulberg III, Lahore, <br></br>Punjab, Pakistan، Block P Gulberg III,<br></br> Lahore, Punjab
              </p>
              
            </div>
          </div>
          {/* {"\u00BB"} */}
          <div className="col-md-4 col-sm-12 footerCol">
            <h3 className=" footerLinkTitle">QUICK Links</h3>
            <a href="/faqs ">
            <p className="footerLinkText pt-3"> FAQ's</p>

            </a>
            <a href="/TermsAndconditions">
            <p className="footerLinkText"> Terms and Condition</p>

            </a>

            <a href="/PrivacyPolicy">
            <p className="footerLinkText"> Privacy Policy</p>

            </a>
            <a href="/distributor">
            <p className="footerLinkText"> Distributors</p>
            </a>

          </div>

          <div className="col-md-4 col-sm-12 footerCol">
            <h3 className=" footerLinkTitle">Social Media</h3>
           

            <div className="footerSocialBox">
                <div className="footerSocialCircle">
                  <a href="https://www.facebook.com/chairmanfoam/">
                  <img
                    src="/images/socialIcon1.png"
                    alt="social"
                    className="footerSocialImage"
                  ></img>
                  </a>
                </div>
                <div className="footerSocialCircle text-center">
                <a href="https://www.instagram.com/chairmanfoam/?igshid=7pcd3d8n7uuw">
                  {/* <img
                    src="/images/socialIcon2.png"
                    alt="social"
                    className="footerSocialImage"
                  ></img> */}
                  <i className="fab fa-instagram text-light  pt-2"></i>
                  </a>
                </div>
                {/* <div className="footerSocialCircle">
                    <a href="https://www.facebook.com/chairmanfoam/">
                  <img
                    src="/images/socialIcon3.png"
                    alt="social"
                    className="footerSocialImage"
                  ></img>
                  </a>
                </div> */}
              </div>
          
            {/* <p className="footerLinkText"> Contact Us</p> */}
          </div>
          </div>
        </div>
        <div className="row footerRightsRow">
          <h5 className="footerRightsText">
            Copyright 2021 {"\u00A9"} Chairman Foam All Right Reserved
          </h5>
        </div>
       
      </div>
    );
  }
}
