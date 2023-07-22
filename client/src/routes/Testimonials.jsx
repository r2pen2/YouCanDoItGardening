import React, { useState } from 'react'

import "../assets/style/services.css"
import { WLBlockHeader, WLHeader } from '../libraries/Web-Legos/components/Text';

import { blockHeaderFill } from "../assets/style/colors";
import { WLSpinnerPage } from '../libraries/Web-Legos/components/Layout';
import { Divider, Text } from '@nextui-org/react';

import { Testimonial, TestimonialSlideshowPicture } from '../api/siteModels.ts';
import { AddModelButton, ModelEditModal, ModelEditButton } from '../libraries/Web-Legos/components/Modals';
import { useEffect } from 'react';
import { SiteModel } from '../libraries/Web-Legos/api/models.ts';
import { WLAliceCarousel, createCarouselBreakpoints } from '../libraries/Web-Legos/components/Content';


import ComputerTwoToneIcon from '@mui/icons-material/ComputerTwoTone';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import { iconFills } from '../components/Modals';

const userCanEditText = true;

const userCanEditTestimonials = true;

export default function Testimonials() {

  const [testimonialsFetched, setTestimonialsFetched] = useState(false);

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    Testimonial.getAndSet(setTestimonials, setTestimonialsFetched);
  }, [])
  
  const [currentModel, setCurrentModel] = useState(new SiteModel());
  const [editModalOpen, setEditModalOpen] = useState(false);


  const quoteSvg = (
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" style={{borderRadius: "50%", border: "1px solid #d4d4d4", maxWidth: 50}}>
      <path fill="rgba(87,36,170,0.5)" d="M30,20.07C23.8,22.7,19.19,26.26,19.19,31.52c0,4.6,4.35,5.65,8.81,6.7.8.13,1.72,2,1.72,3.56,0,3.54-2.77,5.91-6.71,5.91-5.79,0-11.57-4.73-11.57-13.41,0-9.34,8.41-15.52,16.83-17.88Zm23.16,0C47,22.7,42.34,26.26,42.34,31.52c0,4.6,4.47,5.65,8.95,6.7.79.13,1.71,2,1.71,3.56,0,3.54-2.89,5.91-6.71,5.91-5.79,0-11.57-4.73-11.57-13.41,0-9.34,8.42-15.52,16.83-17.88Z"></path>
    </svg>
  )

  const quoteRightSvg = (
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" style={{transform:"scale(-1,1)", borderRadius: "50%", border: "1px solid #d4d4d4", maxWidth: 50}}>
      <path fill="rgba(87,36,170,0.5)" d="M30,20.07C23.8,22.7,19.19,26.26,19.19,31.52c0,4.6,4.35,5.65,8.81,6.7.8.13,1.72,2,1.72,3.56,0,3.54-2.77,5.91-6.71,5.91-5.79,0-11.57-4.73-11.57-13.41,0-9.34,8.41-15.52,16.83-17.88Zm23.16,0C47,22.7,42.34,26.26,42.34,31.52c0,4.6,4.47,5.65,8.95,6.7.79.13,1.71,2,1.71,3.56,0,3.54-2.89,5.91-6.71,5.91-5.79,0-11.57-4.73-11.57-13.41,0-9.34,8.42-15.52,16.83-17.88Z"></path>
    </svg>
  )

  function TestimonialCard({testimonial}) {
    return (
      <div className="p-2 gap-2 d-flex flex-column align-items-center justify-content-center" style={{minHeight: 300, height: '100%', userSelect: "none"}}>
        <ModelEditButton model={Testimonial} data={testimonial} userCanEdit={userCanEditTestimonials} setCurrentModel={setCurrentModel} setEditModalOpen={setEditModalOpen}/>
        <div className="container-fluid d-flex flex-row">
          <div className="col-1 gap-2 d-flex flex-column align-items-center justify-content-between py-2">
            {quoteSvg}
          </div>
          <div className="col-10 p-2 gap-2 d-flex flex-column align-items-center justify-content-center">
            <Text align="center" size="$lg">
              {testimonial.message}
            </Text>
            <div className="w-100 d-flex flex-row align-items-center justify-content-center gap-2">
              <Text b>
                {testimonial.author}
              </Text>
              <div className="d-flex align-items-center justify-content-start gap-2">
                <Divider style={{width:"1rem"}} />
                { 
                  testimonial.virtual 
                  ? 
                    <ComputerTwoToneIcon style={{color: iconFills.blue}} />
                  : 
                    <LocationOnTwoToneIcon style={{color: iconFills.purple}} />
                }
              </div>
            </div>
          </div>
          <div className="col-1 gap-2 d-flex flex-column align-items-center justify-content-start py-2">
            {quoteRightSvg}
          </div>
        </div>
      </div>
    )
  }

  return (
    <WLSpinnerPage dependencies={[testimonialsFetched]}>
      <ModelEditModal open={editModalOpen} setOpen={setEditModalOpen} model={currentModel} />
      <WLBlockHeader text="Testimonials" color={blockHeaderFill} short />
      <section className='d-flex flex-column align-items-center justify-content-center'>
        <div className="fill-line" style={{marginBottom: "1rem"}}></div>
        <WLHeader firestoreId="testimonial-quotes-header" editable={userCanEditText} />
        <AddModelButton userCanEdit={userCanEditTestimonials} model={Testimonial} setCurrentModel={setCurrentModel} setEditModalOpen={setEditModalOpen} />
        <div className="d-flex flex-column align-items-center justify-content-center px-xxl-5 px-xl-4 px-md-3 px-2" style={{width: "100%", overflow: "visible"}}>
          <WLAliceCarousel
            scaleActive
            paginationTop
            pagination
            breakpoints={createCarouselBreakpoints(1, null, 2, null, 3)}
            items={testimonials.map((t, i) => <TestimonialCard testimonial={t} key={i} />)}
          />
        </div>
      </section>
      
    </WLSpinnerPage>
  )
}