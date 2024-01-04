import React from "react";
import "./Topbar.css";
import {
  Youtube,
  Linkdin,
  Facebook,
  instagram,
  Twitter,
  EmailIcon,
  location,
  Phone,
} from "../../assets";

function Topbar() {
  return (
    <>
      <div
        className="TopBar"
        style={{ width: 1920, height: 90, position: "relative" }}
      >
        <div
          className="Rectangle2"
          style={{
            width: 1920,
            height: 90,
            left: 0,
            top: 0,
            position: "absolute",
            background: "#010F58",
          }}
        />
        <div
          className="Text"
          style={{
            width: 1320.03,
            height: 50,
            left: 300,
            top: 20,
            position: "absolute",
          }}
        >
          <div
            className="SocialMedia"
            style={{
              width: 330,
              height: 50,
              left: 990.03,
              top: 0,
              position: "absolute",
            }}
          >
            <div
              className="Facebook"
              style={{
                width: 50,
                height: 50,
                left: 0,
                top: 0,
                position: "absolute",
              }}
            >
              <a href="#">
                <img src={Facebook} alt="" />
              </a>
            </div>
            <div
              className="Instagram"
              style={{
                width: 50,
                height: 50,
                left: 70,
                top: 0,
                position: "absolute",
              }}
            >
              <a href="#">
                <img src={instagram} alt="" />
              </a>
            </div>
            <div
              className="Twitter"
              style={{
                width: 50,
                height: 50,
                left: 140,
                top: 0,
                position: "absolute",
              }}
            >
              <a href="#">
                <img src={Twitter} alt="" />
              </a>
            </div>
            <div
              className="Linkdin"
              style={{
                width: 50,
                height: 50,
                left: 210,
                top: 0,
                position: "absolute",
              }}
            >
              <a href="#">
                <img src={Linkdin} alt="" />
              </a>
            </div>
            <div
              className="Youtube"
              style={{
                width: 50,
                height: 50,
                left: 280,
                top: 0,
                position: "absolute",
              }}
            >
              <a href="#">
                <img src={Youtube} alt="" />
              </a>
            </div>
          </div>
          <div
            className="Location"
            style={{
              width: 307,
              height: 50,
              left: 0,
              top: 0,
              position: "absolute",
            }}
          >
            <div
              className="LandmarkTowerNewYork"
              style={{
                left: 65,
                top: 14,
                position: "absolute",
                color: "#F8FAFA",
                fontSize: 16,
                fontFamily: "Manrope",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              7124 Landmark Tower,New York
            </div>
            <div
              className="Location"
              style={{
                width: 50,
                height: 50,
                left: 0,
                top: 0,
                position: "absolute",
              }}
            >
              <a href="#">
                <img src={location} alt="" />
              </a>
            </div>
          </div>
          <div
            className="Email"
            style={{
              width: 274,
              height: 50,
              left: 327,
              top: 0,
              position: "absolute",
            }}
          >
            <div
              className="EmailIcon"
              style={{
                width: 50,
                height: 50,
                left: 0,
                top: 0,
                position: "absolute",
              }}
            >
              <a href="#">
                <img src={EmailIcon} alt="" />
              </a>
            </div>
            <div
              className="SupportYourdomainCom"
              style={{
                left: 65,
                top: 14,
                position: "absolute",
                color: "#F8FAFA",
                fontSize: 16,
                fontFamily: "Manrope",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              support@yourdomain.com
            </div>
          </div>
          <div
            className="Phone"
            style={{
              width: 176,
              height: 50,
              left: 621,
              top: 0,
              position: "absolute",
            }}
          >
            <div
              className="61383766284"
              style={{
                left: 65,
                top: 14,
                position: "absolute",
                color: "#F8FAFA",
                fontSize: 16,
                fontFamily: "Manrope",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              +61383766284
            </div>
            <div
              className="Phone"
              style={{
                width: 50,
                height: 50,
                left: 0,
                top: 0,
                position: "absolute",
              }}
            >
              <a href="#">
                <img src={Phone} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topbar;
