import React, { useEffect, useState } from 'react'

import { Button, Text, Card, Divider, Spacer, } from "@nextui-org/react";

import "../assets/style/homepage.css"

import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import SavingsTwoToneIcon from '@mui/icons-material/SavingsTwoTone';
import LocalFloristTwoToneIcon from '@mui/icons-material/LocalFloristTwoTone';
import { ContactModal } from '../components/Modals';

import { TextBlock, WLHeader, WLText, WLTextBlock } from "../libraries/Web-Legos/components/Text";

import { WLSpinnerPage } from "../libraries/Web-Legos/components/Layout"
import { WLImage } from '../libraries/Web-Legos/components/Images';

const headerSizeLg = "3rem";
const headerSizeSm = "2rem";

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
      <div className="w-100">
        <Button className="w-100 d-none d-md-inline" color="gradient" bordered size="lg" onClick={handleScheduleButtonClick}>
          Schedule A Consultation
        </Button>
        <Button className="w-100 d-none d-sm-inline d-md-none" color="gradient" bordered onClick={handleScheduleButtonClick}>
          Schedule A Consultation
        </Button>
        <Button className="w-100 d-inline d-sm-none" color="gradient" bordered onClick={handleScheduleButtonClick}>
          Schedule A Consultation
        </Button>
      </div>
    )
  }

  return (
    <WLSpinnerPage dependencies={[whyItWorksHeaderLoaded, whyItWorksDescriptionLoaded, saveHookLoaded, saveDescriptionLoaded, lookHookLoaded, lookDescriptionLoaded, feelHookLoaded, feelDescriptionLoaded]}>
      <ContactModal open={contactModalOpen} setOpen={setContactModalOpen} />
      <section className="home-image d-flex flex-column w-100 align-items-center" style={{minHeight: "150vh"}}>
        <div className="d-none d-md-flex flex-column align-items-center" style={{paddingTop: "10rem"}}>
          <Text h1 
            className="px-2"
            css={{
              fontSize: headerSizeLg,
            }}>
            You Can Do It Gardening
          </Text>
          <Spacer y={2} />
          <Text p 
            css={{
              paddingLeft:"20%", paddingRight: "20%",
              fontSize: headerSizeSm,
            }}>
            Demystifying gardening so you feel more
            <Text 
              className="d-inline"
              b
              css={{
                fontSize: headerSizeSm,
                ...textGradientPadded
              }}
            > 
             empowered
            </Text>
            and 
            <Text 
              className="d-inline"
              b
              css={{
                fontSize: headerSizeSm,
                ...textGradientPadded,
              }}
            > 
             confident
            </Text>
            in doing it yourself
          </Text>
        </div>
        <div className="d-flex d-md-none flex-column align-items-center" style={{paddingTop: "5rem"}}>
          <div className="d-flex flex-column" style={{gap: ".5rem"}}>
            <Text h1 
              className="px-2"
              css={{
                fontSize: headerSizeLg,
              }}>
              You Can Do It Gardening
            </Text>
            <Text p 
              className="px-5"
              css={{fontSize: "1.5rem"}}
              >
              Demystifying gardening so you feel more <Text b className="d-inline" css={textGradient}>empowered</Text> and <Text b className="d-inline" css={textGradient}>confident</Text> in doing it yourself
            </Text>
          </div>
        </div>
        <div className="container-fluid py-5">
          <div className="row d-flex flex-row justify-content-center">
            <TransparentHookCard
              icon={<SavingsTwoToneIcon sx={{fontSize: 50}}/>} 
              titleText={<WLText size="$lg" firestoreId="save-money-hook" editable={userCanEditText} setLoaded={setSaveHookLoaded} />}
              subtitleText={<WLText size="$lg" firestoreId="save-money-description" editable={userCanEditText} setLoaded={setSaveDescriptionLoaded} />}
            />
            <TransparentHookCard
              icon={<VisibilityTwoToneIcon sx={{fontSize: 50}}/>} 
              titleText={<WLText size="$lg" firestoreId="looks-good-hook" editable={userCanEditText} setLoaded={setLookHookLoaded}/>}
              subtitleText={<WLText size="$lg" firestoreId="looks-good-description" editable={userCanEditText} setLoaded={setLookDescriptionLoaded}/>}
              />
            <TransparentHookCard
              icon={<LocalFloristTwoToneIcon sx={{fontSize: 50}}/>} 
              titleText={<WLText size="$lg" firestoreId="feels-good-hook" editable={userCanEditText} setLoaded={setFeelHookLoaded}/>}
              subtitleText={<WLText size="$lg" firestoreId="feels-good-description" editable={userCanEditText} setLoaded={setFeelDescriptionLoaded}/>}
            />
          </div>
        </div>
        <div className="container-fluid d-flex flex-row justify-content-center">
          <Card css={{width: "80%"}} className="row p-2 d-flex flex-row">
            <div className="col-xl-4 col-md-12 d-none d-xl-flex flex-column h-100 justify-content-center align-items-center">
              <WLImage firestoreId="jess" shadow round editable={userCanEditText} />
            </div>
            <div className="col-xl-4 col-md-12 d-flex d-xl-none flex-row justify-content-center">
              <WLImage firestoreId="jess" shadow round editable={userCanEditText} imageCss={{maxWidth: "50vw"}} />
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
    </WLSpinnerPage>
  )
}

function TransparentHookCard({icon, titleText, subtitleText}) {
  return (
    <div className="col-xl-4 col-md-12 p-3 d-flex flex-column align-items-center">
      <div
        className='transparent-card'
        isHoverable
        css={{backgroundColor: "transparent"}}
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