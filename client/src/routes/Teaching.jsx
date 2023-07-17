import React, { useState } from 'react'

import "../assets/style/services.css"
import { WLBlockHeader } from '../libraries/Web-Legos/components/Text';

import { blockHeaderFill } from "../assets/style/colors";
import { WLResponsiveSectionEditable, WLSpinnerPage } from '../libraries/Web-Legos/components/Layout';
import { WLImage } from '../libraries/Web-Legos/components/Images';

const userCanEditText = true;

export default function Teaching() {

  const [teachingHookLoaded, setTeachingHookLoaded] = useState(false);
  const [teachingDescriptionLoaded, setTeachingDescriptionLoaded] = useState(false);

  return (
  <WLSpinnerPage dependencies={[teachingHookLoaded, teachingDescriptionLoaded]}>
    <WLBlockHeader text="Teaching & Speaking" color={blockHeaderFill} short />
    <WLResponsiveSectionEditable
      setLoaded={setTeachingHookLoaded}
      stackHeader 
      columnWidthLeft="8" 
      columnWidthRight="4" 
      editable={userCanEditText} 
      firestoreId="teaching-hook" 
      image={
        <WLImage 
          editable={userCanEditText} 
          firestoreId="teaching-hook" 
          shadow 
          imgCss={{
            height: "100%", 
            maxHeight: 600
          }}
        />
      }
    />
    <div className="section-divider"/>
    <WLResponsiveSectionEditable
      setLoaded={setTeachingDescriptionLoaded}
      stackHeader 
      textRight
      columnWidthLeft="4" 
      columnWidthRight="8" 
      editable={userCanEditText} 
      firestoreId="teaching-description" 
      image={
        <WLImage 
          editable={userCanEditText} 
          firestoreId="teaching-description" 
          shadow 
          imgCss={{
            height: "100%", 
            maxHeight: 600
          }}
        />
      }
    />
    </WLSpinnerPage>
  )
}