import React, { useState } from 'react'

import "../assets/style/services.css"
import { WLBlockHeader } from '../libraries/Web-Legos/components/Text';

import { blockHeaderFill } from "../assets/style/colors";
import { WLCenteredColumn, WLSpinnerPage } from '../libraries/Web-Legos/components/Layout';
import { Card, Divider, Text } from '@nextui-org/react';

import anImage from "../assets/images/image.jpg"
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
  const [slideshowItemsFetched, setSlideshowItemsFetched] = useState(false);

  const [testimonials, setTestimonials] = useState([]);
  const [slideshowItems, setSlideshowItems] = useState([]);

  useEffect(() => {
    setTestimonials([Testimonial.examples.virtual,Testimonial.examples.default])
    // Testimonial.getAndSet(setTestimonials, setTestimonialsFetched);
    TestimonialSlideshowPicture.getAndSet(setSlideshowItems, setSlideshowItemsFetched);
  }, [])
  
  const [currentModel, setCurrentModel] = useState(new SiteModel());
  const [editModalOpen, setEditModalOpen] = useState(false);

  function SlideshowItemCard({testimonialSlideshowPicture}) {
    return (
      <div className="p-2 gap-2 d-flex flex-column align-items-center justify-content-center" style={{height: '100%', userSelect: "none"}}>
        <ModelEditButton model={TestimonialSlideshowPicture} data={testimonialSlideshowPicture} userCanEdit={userCanEditTestimonials} setCurrentModel={setCurrentModel} setEditModalOpen={setEditModalOpen}/>
        <img className="img-shadow no-select" src={testimonialSlideshowPicture.imageSource} alt="slideshow-item" style={{width: '100%', height: '100%', objectFit: "contain"}}/>
        <Divider />
        <Text>
          {testimonialSlideshowPicture.caption}
        </Text>
      </div>
    )
  }

  function TestimonialCard({testimonial}) {
    return (
      <div className="p-2 gap-2 d-flex flex-column align-items-center justify-content-center" style={{height: '100%', userSelect: "none"}}>
        <ModelEditButton model={Testimonial} data={testimonial} userCanEdit={userCanEditTestimonials} setCurrentModel={setCurrentModel} setEditModalOpen={setEditModalOpen}/>
        <Card className="p-2">
          <Card.Body className="p-2 gap-2 d-flex flex-column align-items-center justify-content-center">
            <Text align="left" style={{textIndent: "2rem"}}>
              "{testimonial.message}"
            </Text>
          </Card.Body>
          <Card.Footer className="w-100 px-2 d-flex flex-row align-items-center justify-content-between">
            { 
              testimonial.virtual 
              ? 
              <div className="align-items-center d-flex gap-2">
                <ComputerTwoToneIcon style={{color: iconFills.blue}} />
                <Text size="$sm" style={{margin: 0}}>
                  Virtual
                </Text>
              </div> 
              : 
              <div className="align-items-center d-flex gap-2">
                <LocationOnTwoToneIcon style={{color: iconFills.purple}} />
                <Text size="$sm" style={{margin: 0}}>
                  In-Person
                </Text>
              </div> 
            }
            <Text b>
              -{testimonial.author}
            </Text>
          </Card.Footer>
        </Card>
      </div>
    )
  }

  return (
    <WLSpinnerPage dependencies={[testimonialsFetched, slideshowItemsFetched]}>
      <ModelEditModal open={editModalOpen} setOpen={setEditModalOpen} model={currentModel} />
      <WLBlockHeader text="Testimonials" color={blockHeaderFill} short />
      <section className='d-flex flex-column align-items-center justify-content-center'>
        <AddModelButton userCanEdit={userCanEditTestimonials} model={Testimonial} setCurrentModel={setCurrentModel} setEditModalOpen={setEditModalOpen} />
        <div className="d-flex flex-column align-items-center justify-content-center px-xxl-5 px-xl-4 px-md-3 px-2" style={{width: "100%", overflow: "visible"}}>
          <WLAliceCarousel
            underlineColor="rgba(87,36,170,0.25)"
            paginationTop
            pagination
            breakpoints={createCarouselBreakpoints(1, 2, null, 3)}
            items={testimonials.map((t, i) => <TestimonialCard testimonial={t} key={i} />)}
          />
        </div>
      </section>
      <section className='d-flex flex-column align-items-center justify-content-center'>
        <AddModelButton userCanEdit={userCanEditTestimonials} model={TestimonialSlideshowPicture} setCurrentModel={setCurrentModel} setEditModalOpen={setEditModalOpen} />
        <div className="d-flex flex-column align-items-center justify-content-center px-xxl-5 px-xl-4 px-md-3 px-2" style={{width: "100%", overflow: "visible"}}>
          <WLAliceCarousel
            underlineColor="rgba(87,36,170,0.25)"
            paginationTop
            pagination
            breakpoints={createCarouselBreakpoints(1, 2, 3, null, 4)}
            items={slideshowItems.map((s, i) => <SlideshowItemCard testimonialSlideshowPicture={s} key={i} />)}
          />
        </div>
      </section>
      
    </WLSpinnerPage>
  )
}