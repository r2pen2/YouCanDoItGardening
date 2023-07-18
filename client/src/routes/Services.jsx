import React, { useState } from 'react'

import "../assets/style/services.css"
import { WLBlockHeader, WLText } from '../libraries/Web-Legos/components/Text';
import { WLResponsiveSectionEditable, WLSpinnerPage } from '../libraries/Web-Legos/components/Layout';

import { blockHeaderFill } from "../assets/style/colors";
import { Text } from '@nextui-org/react';
import { markdownToHTML } from '../libraries/Web-Legos/api/strings';


const userCanEditText = true;

export default function Services() {
  
  const [virtualLoaded, setVirtualLoaded] = useState(false);
  const [inPersonLoaded, setInPersonLoaded] = useState(false);

  return (
  <WLSpinnerPage dependencies={[virtualLoaded, inPersonLoaded]}>
    <WLBlockHeader text="Services & Fees" color={blockHeaderFill} short />
    <WLResponsiveSectionEditable
      headerBlack
      setLoaded={setInPersonLoaded}
      editable={userCanEditText} 
      firestoreId="in-person-sessions"
    />
    <div className="section-divider"/>
    <WLResponsiveSectionEditable
      headerBlack
      textRight
      setLoaded={setVirtualLoaded}
      editable={userCanEditText} 
      firestoreId="virtual-sessions" 
    />
    </WLSpinnerPage>
  )
}