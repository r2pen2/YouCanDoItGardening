import React, { useState } from 'react'

import "../assets/style/gallery.css"
import { WLBlockHeader, WLHeader, WLText } from '../libraries/Web-Legos/components/Text';
import { WLSpinnerPage } from '../libraries/Web-Legos/components/Layout';

import { blockHeaderFill } from "../assets/style/colors";
import { AddModelButton, ModelEditButton, ModelEditModal } from '../libraries/Web-Legos/components/Modals';
import { WLAliceCarousel, createCarouselBreakpoints } from '../libraries/Web-Legos/components/Content';
import { useEffect } from 'react';
import { ClientItem, HomeItem, NewHampshireItem, TestimonialSlideshowPicture } from '../api/siteModels.ts';
import { SiteModel } from '../libraries/Web-Legos/api/models.ts';
import { WaveBottom, WaveTop } from '../libraries/Web-Legos/components/Waves';

const userCanEditTestimonials = true;
const userCanEditText = true;

export default function Gallery() {
  
  const [homeItems, setHomeItems] = useState([]);
  const [homeItemsFetched, setHomeItemsFetched] = useState(false);
  const [newHampshireItems, setNewHampshireItems] = useState([]);
  const [newHampshireItemsFetched, setNewHampshireItemsFetched] = useState(false);
  const [clientItems, setClientItems] = useState([]);
  const [clientItemsFetched, setClientItemsFetched] = useState(false);

  const [currentModel, setCurrentModel] = useState(new SiteModel());
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    HomeItem.getAndSet(setHomeItems, setHomeItemsFetched);
    NewHampshireItem.getAndSet(setNewHampshireItems, setNewHampshireItemsFetched);
    ClientItem.getAndSet(setClientItems, setClientItemsFetched);
  }, [])

  
  function GalleryItem({item, model}) {
    return (
      <div className="p-2 gap-2 d-flex flex-column align-items-center justify-content-center" style={{height: '100%', userSelect: "none"}}>
        <ModelEditButton model={model} data={item} userCanEdit={userCanEditTestimonials} setCurrentModel={setCurrentModel} setEditModalOpen={setEditModalOpen}/>
        <img className="no-select img-shadow" src={item.imageSource} alt="slideshow-item" style={{borderRadius: "1rem", width: '100%', maxHeight: 500, height: '100%', objectFit: "cover"}}/>
      </div>
    )
  }

  return (
  <WLSpinnerPage dependencies={[homeItemsFetched, newHampshireItemsFetched, clientItemsFetched]}>
    <ModelEditModal open={editModalOpen} setOpen={setEditModalOpen} model={currentModel} />
    <WLBlockHeader text="Gallery" color={blockHeaderFill} short />
    <section className="d-flex flex-column align-items-center justify-content-center">
      <WLHeader firestoreId="gallery-header" editable={userCanEditText}></WLHeader>
      <div style={{maxWidth: 1400, width: "100%"}}>
        <WLText firestoreId="gallery-description" editable={userCanEditText}></WLText>
      </div>
    </section>
    <section className='d-flex flex-column align-items-center justify-content-center'>
      <div className="d-flex flex-column align-items-center justify-content-center px-xxl-5 px-xl-4 px-md-3 px-2" style={{width: "100%", overflow: "visible"}}>
        <WLAliceCarousel
          pagination
          paginationTop
          scaleActive
          breakpoints={createCarouselBreakpoints(1, 2, 2, 3, 4)}
          items={homeItems.map((gi, i) => <GalleryItem model={HomeItem} item={gi} key={i} />)}
        />
      </div>
      <AddModelButton userCanEdit={userCanEditTestimonials} model={HomeItem} setCurrentModel={setCurrentModel} setEditModalOpen={setEditModalOpen} />
    </section>
    <WaveTop color="#f5f5f5" />
    <section className='d-flex flex-column align-items-center justify-content-center' style={{backgroundColor: "#f5f5f5"}}>    
      <WLHeader color="#a67fcf" firestoreId="nh-pictures-header" editable={userCanEditText} />
      <div className="d-flex flex-column align-items-center justify-content-center px-xxl-5 px-xl-4 px-md-3 px-2" style={{width: "100%", overflow: "visible"}}>
        <WLAliceCarousel
          pagination
          scaleActive
          paginationTop
          breakpoints={createCarouselBreakpoints(1, 2, 2, 3, 4)}
          items={newHampshireItems.map((gi, i) => <GalleryItem model={NewHampshireItem} item={gi} key={i} />)}
        />
      </div>
      <AddModelButton userCanEdit={userCanEditTestimonials} model={NewHampshireItem} setCurrentModel={setCurrentModel} setEditModalOpen={setEditModalOpen} />
    </section>
    <WaveBottom color="#f5f5f5" />
    <section className='d-flex flex-column align-items-center justify-content-center'>    
      <WLHeader firestoreId="client-pictures-header" editable={userCanEditText} />
      <div className="d-flex flex-column align-items-center justify-content-center px-xxl-5 px-xl-4 px-md-3 px-2" style={{width: "100%", overflow: "visible"}}>
        <WLAliceCarousel
          pagination
          scaleActive
          paginationTop
          breakpoints={createCarouselBreakpoints(1, 2, 2, 3, 4)}
          items={clientItems.map((gi, i) => <GalleryItem model={ClientItem} item={gi} key={i} />)}
        />
      </div>
      <AddModelButton userCanEdit={userCanEditTestimonials} model={ClientItem} setCurrentModel={setCurrentModel} setEditModalOpen={setEditModalOpen} />
    </section>
    </WLSpinnerPage>
  )
}