import { Text, Link, Button, Divider } from '@nextui-org/react'
import React, {useState, useEffect} from 'react'
import logo from "../assets/images/logoTransparent.png";
import footerBackground from "../assets/images/gradient/footer.svg";
import { contactMeLink, facebookLink, instagramLink, mailingListLink, tiktokLink, youtubeLink } from '../api/links';
import { textGradient } from '../routes/HomePage';
import { Copyright, WLFooterLogo, WLFooterSocials } from '../libraries/Web-Legos/components/Footer';
import { WLText } from '../libraries/Web-Legos/components/Text';


export default function Footer() {

  return (
    <footer>
      <div className="footer-content w-100" >
        <div className="container-fluid mt-3 mb-3 d-flex flex-column align-items-center">
          <NewFooterContent />
        </div>
        <div className="fill-line mb-3" />
        <div className="d-flex flex-column gap-2 m-2 align-items-center">
          <Copyright year="2023" name="You Can Do It Gardening" />
        </div>
      </div>
    </footer>
  )
}

const userCanEditText = true;

function NewFooterContent() {
  return (
    <div className="row d-flex flex-row w-100 align-items-center gap-5 justify-content-center">
      <div className="col-lg-12 col-xl-3 d-flex flex-column align-items-center">
        <WLFooterLogo source={logo} />
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
        <WLFooterSocials lineBottom>
          <WLFooterSocials.Button platformKey="instagram" href={instagramLink} />
          <WLFooterSocials.Button platformKey="facebook" href={facebookLink} />
          <WLFooterSocials.Button platformKey="tiktok" href={tiktokLink} />
          <WLFooterSocials.Button platformKey="youtube" href={youtubeLink} />
        </WLFooterSocials>
        <WLText editable={userCanEditText} firestoreId="footer-follower-count" />
      </div>
      <div className="col-lg-12 col-xl-3 d-flex flex-column align-items-center">
        <Text>
          <Text css={{maxWidth: "70vw", ...textGradient}} b className="d-inline">Empowering</Text> gardeners at all levels to get their hands dirty. <br /> Serving Great Boston in person and virtual consultations anywhere.
        </Text>
      </div>
    </div>
  )
}