import React, { useState } from 'react'

import "../assets/style/services.css"

import { WLBlockHeader } from '../libraries/Web-Legos/components/Text';

import { blockHeaderFill } from "../assets/style/colors";
import { WLResponsiveSectionEditable, WLSpinnerPage } from '../libraries/Web-Legos/components/Layout';
import { WLImage } from '../libraries/Web-Legos/components/Images';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthenticationManagerContext, CurrentSignInContext } from '../App';

export default function About() {  

  const {currentSignIn} = useContext(CurrentSignInContext);
  const {authenticationManager} = useContext(AuthenticationManagerContext);

  const [userCanEditText, setUserCanEditText] = useState(false);
  const [userCanEditImages, setUserCanEditImages] = useState(false);
  
  useEffect(() => {
    authenticationManager.getPermission(currentSignIn, "siteText").then(p => setUserCanEditText(p));
    authenticationManager.getPermission(currentSignIn, "siteImages").then(p => setUserCanEditImages(p));
  }, [authenticationManager, currentSignIn]);


  const [aboutLoaded, setAboutLoaded] = useState(false);

  return (
  <WLSpinnerPage dependencies={[aboutLoaded]}>
    <WLBlockHeader text="About" color={blockHeaderFill} short />
    <WLResponsiveSectionEditable
      headerBlack
      setLoaded={setAboutLoaded}
      stackHeader 
      columnWidthLeft="8" 
      columnWidthRight="4" 
      editable={userCanEditText} 
      firestoreId="about" 
      image={
        <WLImage 
          editable={userCanEditImages} 
          firestoreId="about" 
          shadow 
          imgCss={{
            height: "100%", 
            objectFit: "cover",
            maxHeight: 600
          }}
        />
      }
    />
    </WLSpinnerPage>
  )
}