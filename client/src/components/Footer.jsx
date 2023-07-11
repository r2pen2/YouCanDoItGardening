import { Text, Link, Button, Divider } from '@nextui-org/react'
import React, {useState, useEffect} from 'react'
import logo from "../assets/images/logoTransparent.png";
import footerBackground from "../assets/images/gradient/footer.svg";
import { contactMeLink, facebookLink, instagramLink, mailingListLink, tiktokLink, youtubeLink } from '../api/links';
import InstagramIcon from '@mui/icons-material/Instagram';
import { textGradient } from '../routes/HomePage';
import { IconButton } from '@mui/material';
import { FacebookButton, InstagramButton, TikTokButton, YouTubeButton } from '../libraries/Web-Legos/components/Socials';


export default function Footer() {

  return (
    <footer>
      <div className="footer-content w-100" >
        <div className="container-fluid mt-3 mb-3 d-flex flex-column align-items-center">
          <NewFooterContent />
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

function NewFooterContent() {
  return (
    <div className="row d-flex flex-row w-100 align-items-center gap-5 justify-content-center">
      <div className="col-lg-12 col-xl-3 d-flex flex-column align-items-center">
        <img src={logo} alt="logo-transparent" className="m-2" style={{maxHeight: 150, width: "auto"}}/>
        <Text>
          <Link block color="primary" href={contactMeLink} target='blank'>
            Contact Me
          </Link>
        </Text>
        <Text>
          <Link block color="primary" href={mailingListLink} target='blank'>
            Join My Mailing List
          </Link>
        </Text>
      </div>
      <div className="col-lg-12 col-xl-4 d-flex flex-column align-items-center">
        <div className="d-flex flex-row align-items-center justify-content-center w-100 gap-2 py-4">
          <InstagramButton size="30px" link={instagramLink}/>
          <FacebookButton size="30px" link={facebookLink}/>
          <TikTokButton size="30px" link={tiktokLink}/>
          <YouTubeButton size="30px" link={youtubeLink}/>
        </div>
        <Divider />
        <Text>
          300,000+ followers on Instagram, TikTok, FaceBook and YouTube combined. Come join the party!!
        </Text>
      </div>
      <div className="col-lg-12 col-xl-3 d-flex flex-column align-items-center">
        <Text>
          <Text css={{maxWidth: "70vw", ...textGradient}} b className="d-inline">Empowering</Text> gardeners at all levels to get their hands dirty. <br /> Serving Great Boston in person and virtual consultations anywhere
        </Text>
      </div>
    </div>
  )
}