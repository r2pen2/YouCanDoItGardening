import React, { useState } from 'react'

import "../assets/style/services.css"
import { WLBlockHeader } from '../libraries/Web-Legos/components/Text';

import { blockHeaderFill } from "../assets/style/colors";
import { WLCenteredColumn, WLSpinnerPage } from '../libraries/Web-Legos/components/Layout';
import { Card, Text } from '@nextui-org/react';

import anImage from "../assets/images/image.jpg"
import { Testimonial, TestimonialSlideshowPicture } from '../api/siteModels.ts';
import { AddModelButton, ModelEditModal } from '../libraries/Web-Legos/components/Modals';
import { useEffect } from 'react';
import { SiteModel } from '../libraries/Web-Legos/api/models.ts';
import { WLAliceCarousel, createCarouselBreakpoints } from '../libraries/Web-Legos/components/Content';

const userCanEditText = true;

const t = new Testimonial();
t.longStrings.message = "this is the first example"
t.shortStrings.author = "someone important"

const i = new TestimonialSlideshowPicture();
t.longStrings.message = "This is a test";
t.images.imageSource = "";

const userCanEditTestimonials = true;

export default function Testimonials() {

  const [testimonialsFetched, setTestimonialsFetched] = useState(false);
  const [slideshowItemsFetched, setSlideshowItemsFetched] = useState(false);

  const [testimonials, setTestimonials] = useState([]);
  const [slideshowItems, setSlideshowItems] = useState([]);

  useEffect(() => {
    SiteModel.getAndSet(Testimonial, setTestimonials, setTestimonialsFetched);
    SiteModel.getAndSet(TestimonialSlideshowPicture, setSlideshowItems, setSlideshowItemsFetched);
  }, [])
  
  const [currentModel, setCurrentModel] = useState(new SiteModel());
  const [editModalOpen, setEditModalOpen] = useState(false);

  function TestimonialCard({testimonial}) {
    return (
      <div className="p-2" style={{height: '100%'}}>
        <Card className="p-2 gap-2 d-flex flex-column align-items-center justify-content-center">
          <Text align="left" style={{textIndent: "2rem", userSelect: "none"}}>
            "{testimonial.message}"
          </Text>
          <Text b align="left">
            -{testimonial.author}
          </Text>
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
        <AddModelButton userCanEdit={userCanEditTestimonials} model={TestimonialSlideshowPicture} setCurrentModel={setCurrentModel} setEditModalOpen={setEditModalOpen} />
        <div className="d-flex flex-column align-items-center justify-content-center px-xxl-5 px-xl-4 px-md-3 px-2" style={{width: "100%", overflow: "visible"}}>
          <WLAliceCarousel
            underlineColor="#5724AA"
            paginationTop
            pagination
            breakpoints={createCarouselBreakpoints(1, 2, null, 2, 3)}
            items={testimonials.map((t, i) => <TestimonialCard testimonial={t} key={i} />)}
          />
        </div>
      </section>
      
    </WLSpinnerPage>
  )
}