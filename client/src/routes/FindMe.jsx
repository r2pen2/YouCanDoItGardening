import React, { useEffect, useState } from 'react'

import "../assets/style/teaching.css"
import { WLBlockHeader, WLHeader, WLText } from '../libraries/Web-Legos/components/Text';

import { blockHeaderFill } from "../assets/style/colors";
import { WLSpinnerPage } from '../libraries/Web-Legos/components/Layout';
import { WLImage } from '../libraries/Web-Legos/components/Images';

import { MediaAppearance, TeachingItem } from "../api/siteModels.ts";
import { SiteModel } from '../libraries/Web-Legos/api/models.ts';

import { AddModelButton, ModelEditButton, ModelEditModal } from "../libraries/Web-Legos/components/Modals"
import { Card, Divider, Text } from '@nextui-org/react';
import { WLYoutubeEmbed } from '../libraries/Web-Legos/components/Media';
import { WLAliceCarousel, createCarouselBreakpoints } from '../libraries/Web-Legos/components/Content';
import { WaveBottom, WaveTop } from '../libraries/Web-Legos/components/Waves';
import { useContext } from 'react';
import { AuthenticationManagerContext, CurrentSignInContext } from '../App';

export default function FindMe() {

  const {currentSignIn} = useContext(CurrentSignInContext);
  const {authenticationManager} = useContext(AuthenticationManagerContext);

  const [userCanEditText, setUserCanEditText] = useState(false);
  const [userCanEditImages, setUserCanEditImages] = useState(false);
  const [userCanEditTeachingItems, setUserCanEditTeachingItems] = useState(false);
  const [userCanEditMediaAppearances, setUserCanEditMediaAppearances] = useState(false);
  
  useEffect(() => {
    authenticationManager.getPermission(currentSignIn, "siteText").then(p => setUserCanEditText(p));
    authenticationManager.getPermission(currentSignIn, "siteImages").then(p => setUserCanEditImages(p));
    authenticationManager.getPermission(currentSignIn, "teaching-items").then(p => setUserCanEditTeachingItems(p));
    authenticationManager.getPermission(currentSignIn, "media-appearances").then(p => setUserCanEditMediaAppearances(p));
  }, [authenticationManager, currentSignIn]);


  const [teachingItems, setTeachingItems] = useState([]);
  const [mediaAppearances, setMediaAppearances] = useState([]);

  const [currentModel, setCurrentModel] = useState(new SiteModel());
  const [editModalOpen, setEditModalOpen] = useState(false);

  const [teachingHookLoaded, setTeachingHookLoaded] = useState(false);
  const [teachingDescriptionLoaded, setTeachingDescriptionLoaded] = useState(false);

  useEffect(() => {
    TeachingItem.getAndSet(setTeachingItems);
    MediaAppearance.getAndSet(setMediaAppearances);
  }, []);

  function renderTeachingItems() {
    return teachingItems.map((ti, i) => <TeachingItemCard teachingItem={ti} key={i} />);
  }

  function TeachingItemCard({teachingItem}) {
    return (
      <div className="d-flex w-100 my-2 align-items-center justify-content-center">
        <Card className="p-2" isHoverable variant="bordered" style={{maxWidth: 640}}>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex flex-column">
              <Text b>{teachingItem.title}</Text>
              <Divider style={{width: "100%"}} />
            </div>
            <Text style={{maxWidth: 600}}>{teachingItem.description}</Text>
          </div>
          <div className="d-flex flex-column justify-content-center d-lg-none">          
            <ModelEditButton userCanEdit={userCanEditTeachingItems} data={teachingItem} model={TeachingItem} setCurrentModel={setCurrentModel} setEditModalOpen={setEditModalOpen} />
          </div>
        </Card>
        <div className="d-none d-lg-flex" style={{marginLeft: "2rem"}}>
          <ModelEditButton userCanEdit={userCanEditTeachingItems} data={teachingItem} model={TeachingItem} setCurrentModel={setCurrentModel} setEditModalOpen={setEditModalOpen} />
        </div>
      </div>
    )
  }

  function MediaAppearanceCard({mediaAppearance}) {
    return (
      <div className="p-2 d-flex flex-column align-items-center justify-content-center">
        <ModelEditButton userCanEdit={userCanEditMediaAppearances} data={mediaAppearance} model={MediaAppearance} setEditModalOpen={setEditModalOpen} setCurrentModel={setCurrentModel}/>
        <Card
          style={{
            height: 400,
            width: "100%",
          }}
          isPressable
          isHoverable
          onPress={() => window.open(mediaAppearance.link, "_blank")}
        >
          <Card.Image 
            src={mediaAppearance.imageSource}
            height={200}
            width="100%"
            objectFit='cover'
          />
          <Card.Body css={{textAlign: 'center'}}>
            <Text>{mediaAppearance.description}</Text>
          </Card.Body>
          <Divider/>
          <Card.Footer style={{fontWeight:"bold"}}>
            <Text>{mediaAppearance.title}</Text>
          </Card.Footer>
        </Card>
      </div>
    )
  }

  return (
  <WLSpinnerPage dependencies={[teachingHookLoaded, teachingDescriptionLoaded]} containerClasses="page-background">
    <ModelEditModal open={editModalOpen} setOpen={setEditModalOpen} model={currentModel} />
    <WLBlockHeader text="Find Me" color={blockHeaderFill} short />
    <section className="d-flex flex-column align-items-center justify-content-center py-2 py-lg-5">
      <WLHeader firestoreId="teaching-hook-header" editable={userCanEditText}/>
      <div style={{maxWidth: 1400, width: "100%"}}>
        <WLText firestoreId="teaching-hook" editable={userCanEditText} />
      </div>
    </section>
    <WaveTop color="#f5f5f5"/>
    <section className="d-flex flex-column align-items-center justify-content-center py-2 px-2 px-lg-5" style={{backgroundColor:"#f5f5f5"}}>
      <WLHeader firestoreId="media-appearances-header" editable={userCanEditText} color="#a67fcf" />
      <WLAliceCarousel
        pagination
        paginationTop
        scaleActive
        breakpoints={createCarouselBreakpoints(2, null, 3, 4, 5)}
        items={mediaAppearances.map((ma, i) => <MediaAppearanceCard key={i} mediaAppearance={ma} />)}
      />
      <AddModelButton model={MediaAppearance} userCanEdit={userCanEditMediaAppearances} setCurrentModel={setCurrentModel} setEditModalOpen={setEditModalOpen} />
    </section>
    <WaveBottom color="#f5f5f5"/>
    <section className="container-fluid d-flex flex-column align-items-center jusytify-content-start">
      <div className="row w-100">
        <div className="col-xxl-4 py-xl-4 py-3 col-xl-0 d-flex flex-column align-items-center justify-content-center">
          <WLImage 
            editable={userCanEditImages} 
            firestoreId="teaching-description" 
            shadow 
            imgCss={{
              height: "100%", 
              maxHeight: 600
            }}
          />
        </div>
        <div className="col-xxl-8 py-xl-4 py-3 col-xl-12 d-flex flex-column align-items-center justify-content-center">
            <WLHeader editable={userCanEditText} firestoreId="teaching-description-header" setLoaded={setTeachingDescriptionLoaded} />
            <div className="d-flex flex-column w-100 align-items-center justify-content-start">
              { renderTeachingItems() }
              <AddModelButton userCanEdit={userCanEditTeachingItems} model={TeachingItem} setCurrentModel={setCurrentModel} setEditModalOpen={setEditModalOpen} />
            </div>
        </div>
      </div>
    </section>
    </WLSpinnerPage>
  )
}