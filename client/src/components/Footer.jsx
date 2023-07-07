import { Text, Link, Button } from '@nextui-org/react'
import React, {useState, useEffect} from 'react'
import logo from "../assets/images/logoTransparent.png";
import footerBackground from "../assets/images/footerBackground.jpg";

export default function Footer() {

  return (
    <footer>
      <img src={footerBackground} className="footer-background" alt="footer-background" />
      <div className="footer-content w-100" >
        <div className="container-fluid mt-3 mb-3 d-flex flex-column align-items-center">
          <div className="row d-flex flex-row w-100 align-items-center gap-5 justify-content-center">
            <div className="col-lg-12 col-xl-3 d-flex flex-column align-items-center">
              <img src={logo} alt="logo-transparent" className="m-2" style={{maxHeight: 150, width: "auto"}}/>
              <Text>
                (781) 799-6374
              </Text>
            </div>
            <div className="col-lg-12 col-xl-4 d-flex flex-column align-items-center">
              <Text h2>
                Hours
              </Text>
              <Text>
                Monday - Friday 8am to 6pm
              </Text>
              <Text>
                Other hours available by appointment
              </Text>
            </div>
            <div className="col-lg-12 col-xl-3 d-flex flex-column align-items-center">
              <Text>
                <Link block color="primary" href="/home">
                  Home
                </Link>
              </Text>
              <Text>
                <Link block color="primary" href="/about">
                  Who We Are
                </Link>
              </Text>
              <Text>
                <Link block color="primary" href="/services">
                  Services
                </Link>
              </Text>
              <Text>
                <Link block color="primary" href="contact">
                  Contact Us
                </Link>
              </Text>
            </div>
          </div>
        </div>
        <div className="fill-line mb-3" />
        <div className="d-flex flex-column gap-2 m-2 align-items-center">
          <Text size="$sm">
            Copyright © 2023 You Can Do It Gardening
          </Text>
        </div>
      </div>
    </footer>
  )
}
