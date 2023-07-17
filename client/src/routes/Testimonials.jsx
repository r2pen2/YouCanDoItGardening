import React, { useState } from 'react'

import "../assets/style/services.css"
import { WLBlockHeader, WLTextBlock } from '../libraries/Web-Legos/components/Text';

import { blockHeaderFill } from "../assets/style/colors";
import { WLSpinnerPage } from '../libraries/Web-Legos/components/Layout';
import { Card, Text } from '@nextui-org/react';

import anImage from "../assets/images/image.jpg"

const userCanEditText = true;

export default function Testimonials() {
  
  const [testimonialsLoaded, setTestimonialsLoaded] = useState(false);

  return (
    <WLSpinnerPage dependencies={[testimonialsLoaded]}>
      <WLBlockHeader text="Testimonials" color={blockHeaderFill} short />
      <WLTextBlock firestoreId="placeholder-testimonial-component" setLoaded={setTestimonialsLoaded} editable={userCanEditText} />
      <Card className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-8 col-lg-12 d-flex flex-column align-items-center gap-2 justify-content-center p-4">
            <Text align="left">
              "Like having a visit from a loving mom and your favorite elementary school teacher who is also a great gardener. :) Jess is so instructive and kind, and practical. After two years of deliberating on a garden design, I was able to cut a new bed shape and start planting immediately. My new garden will cost me next to nothing, whereas the last proposal I was given was for $10K!! So happy I did this. 💚"
            </Text>
            <Text b align="left">
              Diana Roy
            </Text>
          </div>
          <img className="col-xl-4 col-lg-12" src={anImage} alt="img" style={{maxHeight: 400, objectFit: "cover"}}/>
        </div>
      </Card>
    </WLSpinnerPage>
  )
}