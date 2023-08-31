import { Text, Link, } from '@nextui-org/react'
import React from 'react'
import logo from "../assets/images/logoTransparent.png";
import { contactMeLink, facebookLink, instagramLink, mailingListLink, tiktokLink, youtubeLink } from '../api/links';
import {  WLFooterLogo, WLFooterSignature, WLFooterSocials } from '../libraries/Web-Legos/components/Footer';
import { WLCopyright, WLText } from '../libraries/Web-Legos/components/Text';
import { FooterAuthButton } from '../libraries/Web-Legos/components/Auth';
import { useContext } from 'react';
import { AuthenticationManagerContext, CurrentSignInContext } from '../App';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Footer() {

  const {currentSignIn, setCurrentSignIn} = useContext(CurrentSignInContext);
  const {authenticationManager} = useContext(AuthenticationManagerContext);
  
  return (
    <footer>
      <div className="footer-content w-100" >
        <div className="container-fluid mt-3 mb-3 d-flex flex-column align-items-center">
          <NewFooterContent />
        </div>
        <div className="fill-line mb-3" />
        <div className="d-flex flex-column gap-2 m-2 align-items-center">
          <WLCopyright editable={userCanEditText}/>
          <FooterAuthButton authManager={authenticationManager} currentSignIn={currentSignIn} setCurrentSignIn={setCurrentSignIn}/>
        </div>
        <WLFooterSignature />
      </div>
    </footer>
  )
}

const userCanEditText = true;

function NewFooterContent() {
  
  

    const {currentSignIn} = useContext(CurrentSignInContext);
    const {authenticationManager} = useContext(AuthenticationManagerContext);
  
    const [userCanEditText, setUserCanEditText] = useState(false);
    
    useEffect(() => {
      authenticationManager.getPermission(currentSignIn, "siteText").then(p => setUserCanEditText(p));
    }, [authenticationManager, currentSignIn]);

  return (
    <div className="row d-flex flex-row w-100 align-items-center gap-5 justify-content-center">
      <div className="col-lg-12 col-xl-3 d-flex flex-column align-items-center">
        <WLFooterLogo source={logo} />
        <WLText firestoreId="footer-contact" editable={userCanEditText} />
      </div>
      <div className="col-lg-12 col-xl-4 d-flex flex-column align-items-center">
        <WLFooterSocials lineBottom>
          <WLFooterSocials.Button platformKey="instagram" href={instagramLink} />
          <WLFooterSocials.Button platformKey="facebook" href={facebookLink} />
          <WLFooterSocials.Button platformKey="tiktok" href={tiktokLink} />
          <WLFooterSocials.Button platformKey="youtube" href={youtubeLink} />
        </WLFooterSocials>
        <WLText editable={userCanEditText} firestoreId="footer-follower-count">
          300,000+ followers on Instagram, TikTok, FaceBook and YouTube combined. Come join the party!
        </WLText>
      </div>
      <div className="col-lg-12 col-xl-3 d-flex flex-column align-items-center">
        <WLText firestoreId="footer-hook" editable={userCanEditText}>
            Empowering gardeners at all levels to get their hands dirty. Serving Great Boston in person and virtual consultations anywhere.
        </WLText>
      </div>
    </div>
  )
}