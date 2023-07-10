import { Text, Link, Button } from '@nextui-org/react'
import React, {useState, useEffect} from 'react'
import logo from "../assets/images/logoTransparent.png";
import footerBackground from "../assets/images/gradient/footer.svg";
import { instagramLink, youtubeLink } from '../api/links';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { empoweredGradient } from '../routes/HomePage';


export default function Footer() {

  return (
    <footer>
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
              <div className="d-flex flex-row align-items-center justify-content-center w-100 gap-2 py-4">
                <Button
                  light
                  auto
                  icon={<YouTubeIcon fontSize='large' />}
                  onClick={() => window.open(youtubeLink, "_blank")}
                />
                <Button
                  light
                  auto
                  icon={<InstagramIcon fontSize='large' />}
                  onClick={() => window.open(instagramLink, "_blank")}
                />
              </div>
              <Link block color="primary" href="https://sites.google.com/view/youcandoitgardening/contact-me-by-phone" target='blank'>
                Contact Me
              </Link>
              <Text>
                <Text css={empoweredGradient} b className="d-inline">Empowering</Text> gardeners at all levels to get their hands dirty. <br /> Serving Great Boston in person and virtual consultations anywhere
              </Text>
            </div>
            <div className="col-lg-12 col-xl-3 d-flex flex-column align-items-center">
              <Text>
                <Link block color="primary" href="/home">
                  Home
                </Link>
              </Text>
              <Text>
                <Link block color="primary" href="/services">
                  Services & Fees
                </Link>
              </Text>
              <Text>
                <Link block color="primary" href="/about">
                  About
                </Link>
              </Text>
              <Text>
                <Link block color="primary" href="/basics">
                  Basic Principles
                </Link>
              </Text>
              <Text>
                <Link block color="primary" href="/teaching">
                  Teaching
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
