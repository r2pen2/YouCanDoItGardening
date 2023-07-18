import React, { useEffect, useState } from 'react'

import { Button, Text, Card, Divider, Spacer, } from "@nextui-org/react";

import "../assets/style/homepage.css"

import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import SavingsTwoToneIcon from '@mui/icons-material/SavingsTwoTone';
import LocalFloristTwoToneIcon from '@mui/icons-material/LocalFloristTwoTone';
import { ContactModal } from '../components/Modals';

import { WLHeader, WLText, WLTextBlock } from "../libraries/Web-Legos/components/Text";

import { WLCenteredColumn, WLSpinnerPage } from "../libraries/Web-Legos/components/Layout"
import { WLImage } from '../libraries/Web-Legos/components/Images';
import home3 from "../assets/images/gradient/markup-cropped.svg"
import { WLAliceCarousel } from '../libraries/Web-Legos/components/Content';

const gradientPadding = {paddingLeft: ".5rem", paddingRight: ".5rem"}


const textGradientPadded = {textGradient: "0deg, $purple600 -20%, $pink600 100%", ...gradientPadding}
export const textGradient = {textGradient: "0deg, $purple600 -20%, $pink600 100%"}

const userCanEditText = true;

export default function HomePage() {

  // Initialize all states
  const [contactModalOpen, setContactModalOpen] = useState(false); // Whether contact modal is open

  const [whyItWorksHeaderLoaded, setWhyItWorksHeaderLoaded] = useState(false);            // Whether "Why This Model Works" header has loaded
  const [whyItWorksDescriptionLoaded, setWhyItWorksDescriptionLoaded] = useState(false);  // Whether "Why This Model Works" description has loaded
  const [saveHookLoaded, setSaveHookLoaded] = useState(false);                            // Whether "Save Money" hook has loaded
  const [saveDescriptionLoaded, setSaveDescriptionLoaded] = useState(false);              // Whether "Save Money" desctiption has loaded
  const [lookHookLoaded, setLookHookLoaded] = useState(false);                            // Whether "Looks Good" hook has loaded
  const [lookDescriptionLoaded, setLookDescriptionLoaded] = useState(false);              // Whether "Looks Good" description has loaded
  const [feelHookLoaded, setFeelHookLoaded] = useState(false);                            // Whether "Feels Good" hook has loaded
  const [feelDescriptionLoaded, setFeelDescriptionLoaded] = useState(false);              // Whether "Feels Good" description has loaded
  const [beforesAndAftersHeaderLoaded, setBeforesAndAftersHeaderLoaded] = useState(false);// Whether "Befores and Afters" header has loaded

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
        <Button className="w-100 d-inline mt-2" css={{minHeight: 50}} color="gradient" bordered size="$sm" onClick={handleScheduleButtonClick}>
          Schedule A Consultation
        </Button>
    )
  }

  return (
    <WLSpinnerPage 
      dependencies={[
        beforesAndAftersHeaderLoaded, 
        whyItWorksHeaderLoaded, 
        whyItWorksDescriptionLoaded, 
        saveHookLoaded, 
        saveDescriptionLoaded, 
        lookHookLoaded, 
        lookDescriptionLoaded, 
        feelHookLoaded, 
        feelDescriptionLoaded
      ]}
      >
      <ContactModal open={contactModalOpen} setOpen={setContactModalOpen} />
      <section className="d-flex flex-column w-100 align-items-center">
        <div className="w-100 flex-column align-items-center background-image" style={{paddingTop: "10vh", paddingBottom: "40vh",}}>
          <div className="elevated d-flex flex-column w-100 text-background py-5">
            <WLHeader>
              You Can Do It Gardening
            </WLHeader>
            <WLHeader headerLevel={2} firestoreId="home-subtitle" editable={userCanEditText} />
          </div>
        </div>
        <img alt="leaf-line" src={home3} className="background-pattern" />
        <div className="elevated container-fluid" style={{marginTop: -250, marginBottom: 50}}>
          <div className="elevated row d-flex flex-row justify-content-center">
            <TransparentHookCard
              icon={<SavingsTwoToneIcon sx={{fontSize: 50}}/>} 
              titleText={<WLText firestoreId="save-money-hook" editable={userCanEditText} setLoaded={setSaveHookLoaded} />}
              subtitleText={<WLText firestoreId="save-money-description" editable={userCanEditText} setLoaded={setSaveDescriptionLoaded} />}
            />
            <TransparentHookCard
              icon={<VisibilityTwoToneIcon sx={{fontSize: 50}}/>} 
              titleText={<WLText firestoreId="looks-good-hook" editable={userCanEditText} setLoaded={setLookHookLoaded}/>}
              subtitleText={<WLText firestoreId="looks-good-description" editable={userCanEditText} setLoaded={setLookDescriptionLoaded}/>}
              />
            <TransparentHookCard
              icon={<LocalFloristTwoToneIcon sx={{fontSize: 50}}/>} 
              titleText={<WLText firestoreId="feels-good-hook" editable={userCanEditText} setLoaded={setFeelHookLoaded}/>}
              subtitleText={<WLText firestoreId="feels-good-description" editable={userCanEditText} setLoaded={setFeelDescriptionLoaded}/>}
            />
          </div>
        </div>
        <div className="container-fluid d-flex flex-row justify-content-center">
          <Card css={{width: "80%", backgroundColor: "rgba(255,255,255,0.55)", border: "2px solid lightsteelblue"}} className="row p-2 d-flex flex-row" >
            <div className="col-xl-4 col-md-12 d-flex flex-column align-items-center justify-content-center">
              <WLImage firestoreId="jess" shadow round editable={userCanEditText} imgClasses="jess-image" />
            </div>
            <div className="col-xl-8 col-md-12 d-flex flex-column px-1 py-1 px-lg-5 py-3 px-lg-5 justify-content-around">
              <div>
                <WLHeader headerLevel={2} editable={userCanEditText} firestoreId="why-it-works-header" setLoaded={setWhyItWorksHeaderLoaded}/>
                <WLTextBlock firestoreId="why-it-works" editable={userCanEditText} setLoaded={setWhyItWorksDescriptionLoaded}/>
              </div>
              <ScheduleButton />
            </div>
          </Card>
        </div>
      </section>
      <section className='d-flex flex-column align-items-center justify-content-center'>
        <WLHeader firestoreId="befores-and-afters-header" setLoaded={setBeforesAndAftersHeaderLoaded} editable={userCanEditText} />
        <WLAliceCarousel>
          <WLAliceCarousel.Item>
            Test
          </WLAliceCarousel.Item>
          <WLAliceCarousel.Item>
            Test
          </WLAliceCarousel.Item>
          <WLAliceCarousel.Item>
            Test
          </WLAliceCarousel.Item>
          <WLAliceCarousel.Item>
            Test
          </WLAliceCarousel.Item>
        </WLAliceCarousel>
      </section>
    </WLSpinnerPage>
  )
}

function TransparentHookCard({icon, titleText, subtitleText}) {
  return (
    <div className="col-xl-4 col-md-12 p-3 d-flex flex-column align-items-center">
      <div
        className='transparent-card'
      >
          <div className="d-flex flex-column w-100 align-items-center">
            {icon}
            {titleText}
          </div>
        <Divider />
        <div className="d-flex flex-column w-100 align-items-center">
          {subtitleText}
        </div>
      </div>
    </div>
  )
}