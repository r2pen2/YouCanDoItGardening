import React, { useEffect, useState } from 'react'

import { Button, Text, Card, Modal, Textarea, Divider, Spacer, Link } from "@nextui-org/react";

import jess from "../assets/images/jess.jpg";

import "../assets/style/homepage.css"
import { instagramLink, tiktokLink, youtubeLink } from '../api/links';

import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import SavingsTwoToneIcon from '@mui/icons-material/SavingsTwoTone';
import LocalFloristTwoToneIcon from '@mui/icons-material/LocalFloristTwoTone';
import { ContactModal } from '../components/Modals';

const headerSizeLg = "3rem";
const headerSizeSm = "2rem";

const gradientPadding = {paddingLeft: ".5rem", paddingRight: ".5rem"}

const textGradientPadded = {textGradient: "0deg, $purple600 -20%, $pink600 100%", ...gradientPadding}
export const textGradient = {textGradient: "0deg, $purple600 -20%, $pink600 100%"}

export default function HomePage() {

  // Initialize all states
  const [contactModalOpen, setContactModalOpen] = useState(false); // Whether contact modal is open

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
    <div className="d-flex flex-column">
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
              title="Save Money"
              subtitle="Ensure that your garden will stay safe and healthy for years to come. No more paying for new plants or landscapers!"
            />
            <TransparentHookCard
              icon={<VisibilityTwoToneIcon sx={{fontSize: 50}}/>} 
              title="Looks Good"
              subtitle="Professional designs will make your garden jaw-dropping. Your neighbors will be quick to notice."
            />
            <TransparentHookCard
              icon={<LocalFloristTwoToneIcon sx={{fontSize: 50}}/>} 
              title="Feels Good"
              subtitle="Have faith that your garden is happy, healthy, and beautiful. There's no need to stress."
            />
          </div>
        </div>
        <div className="container-fluid d-flex flex-row justify-content-center">
          <Card css={{width: "80%"}} className="row p-2 d-flex flex-row">
            <div className="col-xl-4 col-md-12 d-none d-xl-flex flex-column h-100 justify-content-center align-items-center">
              <img src={jess} alt="jess" className="img-shadow img-round" />
            </div>
            <div className="col-xl-4 col-md-12 d-flex d-xl-none flex-row justify-content-center">
              <img src={jess} alt="jess" className="img-shadow img-round" style={{maxWidth: "50vw"}} />
            </div>
            <div className="col-xl-8 col-md-12 d-flex flex-column px-1 py-1 px-lg-5 py-3 px-lg-5 justify-content-around">
              <div>
                <Text h2>
                  Why this model works:
                </Text>
                <Text align="left" className="text-indent">
                  Landscapers are in high demand and outsourcing may not be in the budget right now. Many people are more able than they realize. Doing it yourself can result in significant savings that can be used for other things. Also, it can be really gratifying to work in the garden, connect with nature and create something beautiful or improve on what you already have.
                </Text>
              </div>
              <ScheduleButton />
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}

function TransparentHookCard({icon, title, subtitle}) {
  return (
    <div className="col-xl-4 col-md-12 p-3 d-flex flex-column align-items-center">
      <div
        className='transparent-card'
        isHoverable
        css={{backgroundColor: "transparent"}}
      >
          <div className="d-flex flex-column w-100 align-items-center">
            {icon}
            <Text b className="w-100">
            {title}
            </Text>
          </div>
        <Divider />
        <div className="d-flex flex-column w-100 align-items-center">
          <Text align="center">
            {subtitle}
          </Text>
        </div>
      </div>
    </div>
  )
}