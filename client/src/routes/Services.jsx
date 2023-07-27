import React, { useState } from 'react'

import "../assets/style/services.css"
import { WLBlockHeader, WLHeader, WLText } from '../libraries/Web-Legos/components/Text';
import { WLSpinnerPage } from '../libraries/Web-Legos/components/Layout';

import { blockHeaderFill } from "../assets/style/colors";
import { Card, Divider, Text, Button } from '@nextui-org/react';
import { AddModelButton, ModelEditButton, ModelEditModal } from '../libraries/Web-Legos/components/Modals';
import { useEffect } from 'react';
import { InPersonServiceItem, VirtualServiceItem } from '../api/siteModels.ts';
import { SiteModel } from '../libraries/Web-Legos/api/models.ts';


import ComputerTwoToneIcon from '@mui/icons-material/ComputerTwoTone';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import { ContactModal } from '../components/Modals';

const userCanEditText = true;

export default function Services() {
  
  const [virtualLoaded, setVirtualLoaded] = useState(false);
  const [inPersonLoaded, setInPersonLoaded] = useState(false);

  const [virtualServiceItems, setVirtualServiceItems] = useState([VirtualServiceItem.examples.default]);
  const [inPersonServiceItems, setInPersonServiceItems] = useState([InPersonServiceItem.examples.default]);

  
  const [currentModel, setCurrentModel] = useState(new SiteModel());
  const [editModalOpen, setEditModalOpen] = useState(false);

  
  const [contactModalOpen, setContactModalOpen] = useState(false); // Whether contact modal is open

  useEffect(() => {
    VirtualServiceItem.getAndSet(setVirtualServiceItems, setVirtualLoaded);
    InPersonServiceItem.getAndSet(setInPersonServiceItems, setInPersonLoaded);
  }, [])


  function ServiceItem({serviceItem, virtual}) {
    return (
      <div className="py-2 container-fluid d-flex flex-column align-items-center justify-content-start">
        <div className="row w-100">
          <div className="col-1 d-none d-md-flex flex-column align-items-center justify-content-center">
            { virtual ? <ComputerTwoToneIcon style={{color: "#934eb1"}}/> : <LocationOnTwoToneIcon style={{color: "#934eb1"}}/> }
          </div>
          <div className="col-md-10 col-12 d-flex flex-row">
            <div style={{border: "2px solid #A67FCF", borderRightWidth: 0, width: "1rem"}}/>
            <Text className="d-none d-md-flex" align="center" size="$lg" style={{width: "100%", marginBottom: "0.5rem", marginLeft:"1rem", marginRight:"1rem"}}>{serviceItem.text}</Text>
            <Text className="d-inline d-md-none" align="center" style={{width: "100%", marginBottom: "0.5rem", marginLeft:"1rem", marginRight:"1rem"}}>{serviceItem.text}</Text>
            <div style={{border: "2px solid #A67FCF", borderLeftWidth: 0, width: "1rem"}}/>
          </div>
          <div className="col-md-1 col-12 d-flex flex-row justify-content-center">
            <ModelEditButton small userCanEdit={userCanEditText} model={virtual ? VirtualServiceItem : InPersonServiceItem} setCurrentModel={setCurrentModel} setEditModalOpen={setEditModalOpen} data={serviceItem} />
          </div>
        </div>
      </div>
    )
  }

  function renderVirtualServiceItems() {
    return virtualServiceItems.map((v,i) => <ServiceItem virtual={true} serviceItem={v} key={i} />);
  }

  function renderInPersonServiceItems() {
    return inPersonServiceItems.map((v,i) => <ServiceItem serviceItem={v} key={i} />);
  }

  
  /**
   * A button scaled to the screen width that opens the {@link ContactModal}
   */
  function ScheduleButton() {
    
    /**
     * When the button is clicked, the contact modal should be opened
     */
    function handleScheduleButtonClick() {
      setContactModalOpen(true);
    }

    return (
        <Button className="w-100 d-inline m-2" css={{minHeight: 50, maxWidth: 250}} flat size="$lg" onClick={handleScheduleButtonClick}>
          Schedule A Consultation
        </Button>
    )
  }

  return (
  <WLSpinnerPage dependencies={[virtualLoaded, inPersonLoaded]}>
    <ContactModal open={contactModalOpen} setOpen={setContactModalOpen} />
    <ModelEditModal open={editModalOpen} setOpen={setEditModalOpen} model={currentModel} />
    <WLBlockHeader text="Services & Fees" color={blockHeaderFill} short />
    <section className="d-flex flex-column align-items-center justify-content-center">
      <WLHeader firestoreId="services-header" editable={userCanEditText}></WLHeader>
      <div style={{maxWidth: 1400, width: "100%"}}>
        <WLText firestoreId="services-description" editable={userCanEditText}></WLText>
      </div>
    </section>
    <section className='container'>
      <div className="row p-2 h-100">
        <div className="p-2 col-xl-6 col-lg-12 d-flex">
          <Card variant='flat' css={{backgroundColor: "#ffffff", width: "100%",}}>
            <Card.Header>
              <WLHeader headerLevel={2}>In-Person Sessions</WLHeader>
            </Card.Header>
            <div className="px-5">
              <Divider/>
            </div>
            <Card.Body className="d-flex flex-column align-items-start justify-content-start">
              <div className="w-100 d-flex flex-column align-items-center justify-content-center">
                { renderInPersonServiceItems() }
                <AddModelButton userCanEdit={userCanEditText} model={InPersonServiceItem} setEditModalOpen={setEditModalOpen} setCurrentModel={setCurrentModel}/>
              </div>
              <div className="d-flex flex-column text-center py-2 w-100">
                <Divider />
                <WLText firestoreId="in-person-pricing" editable={userCanEditText} />
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="p-2 col-xl-6 col-lg-12 d-flex">
          <Card variant='flat' css={{backgroundColor: "#ffffff", width: "100%",}}>
            <Card.Header>
              <WLHeader headerLevel={2}>Virtual Sessions</WLHeader>
            </Card.Header>
            <div className="px-5">
              <Divider/>
            </div>
            <Card.Body className="d-flex flex-column align-items-start justify-content-start">
              <div className="w-100 d-flex flex-column align-items-center justify-content-center">
                { renderVirtualServiceItems() }
                <AddModelButton userCanEdit={userCanEditText} model={VirtualServiceItem} setEditModalOpen={setEditModalOpen} setCurrentModel={setCurrentModel}/>
              </div>
              <div className="d-flex flex-column text-center py-2 w-100">
                <Divider />
                <WLText firestoreId="virtual-pricing" editable={userCanEditText} />
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
    <section className="d-flex flex-column align-items-center justify-content-center py-2 gap-2" style={{backgroundColor: "#f5f5f5", filter:"drop-shadow(0px 0px 5px rgba(0,0,0,0.2))"}}>    
      <WLHeader color="#a67fcf" firestoreId="schedule-header" editable={userCanEditText}></WLHeader>
      <ScheduleButton />
    </section>
    </WLSpinnerPage>
  )
}