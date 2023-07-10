import React, { useEffect, useState } from 'react'

import { Button, Text, Card, Modal, Textarea, Divider, Spacer, Link } from "@nextui-org/react";

import jess from "../assets/images/jess.jpg";

import "../assets/style/homepage.css"
import { instagramLink, tiktokLink, youtubeLink } from '../api/links';

import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import SavingsTwoToneIcon from '@mui/icons-material/SavingsTwoTone';
import SelfImprovementTwoToneIcon from '@mui/icons-material/SelfImprovementTwoTone';

const headerSizeLg = "3rem";
const headerSizeSm = "2rem";

const transparentCardClasses = "col-xl-4 col-md-12 p-3 d-flex flex-column align-items-center";

const gradientPadding = {paddingLeft: ".5rem", paddingRight: ".5rem"}

const empoweredGradientPadded = {textGradient: "180deg, $yellow600 -20%, $red600 100%", ...gradientPadding}
const confidentGradientPadded = {textGradient: "0deg, $purple600 -20%, $pink600 100%", ...gradientPadding}
export const empoweredGradient = {textGradient: "180deg, $yellow600 -20%, $red600 100%"}
const confidentGradient = {textGradient: "0deg, $purple600 -20%, $pink600 100%"}

const transparentBackground = {backgroundColor: "transparent"}

export default function HomePage() {

  return (
    <div className="d-flex flex-column">
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
                ...empoweredGradientPadded
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
                ...confidentGradientPadded,
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
              Demystifying gardening so you feel more <Text b className="d-inline" css={empoweredGradient}>empowered</Text> and <Text b className="d-inline" css={confidentGradient}>confident</Text> in doing it yourself
            </Text>
          </div>
        </div>
        <div className="container-fluid py-5">
          <div className="row d-flex flex-row justify-content-center">
            <div className={transparentCardClasses}>
              <div
                className='transparent-card'
                isHoverable
                css={{transparentBackground}}
              >
                  <div className="d-flex flex-column w-100 align-items-center">
                    <SavingsTwoToneIcon sx={{fontSize: 50}}/>
                    <Text b className="w-100">
                      Save Money
                    </Text>
                  </div>
                <Divider />
                <div className="d-flex flex-column w-100 align-items-center">
                  <Text align="center">
                    Ensure that your garden will stay safe and healthy for years to come. No more paying for new plants or landscapers!
                  </Text>
                </div>
              </div>
            </div>
            <div className={transparentCardClasses}>
              <div
                className='transparent-card'
                isHoverable
                css={{transparentBackground}}
              >
                  <div className="d-flex flex-column w-100 align-items-center">
                    <VisibilityTwoToneIcon sx={{fontSize: 50}}/>
                    <Text b className="w-100">
                      Look Good
                    </Text>
                  </div>
                <Divider />
                <div className="d-flex flex-column w-100 align-items-center">
                  <Text align="center">
                    Professional designs will make your garden jaw-dropping. Your neighbors will be quick to notice.
                  </Text>
                </div>
              </div>
            </div>
            <div className={transparentCardClasses}>
              <div
                className='transparent-card'
                isHoverable
                css={{transparentBackground}}
              >
                  <div className="d-flex flex-column w-100 align-items-center">
                    <SelfImprovementTwoToneIcon sx={{fontSize: 50}}/>
                    <Text b className="w-100">
                    Feel Good
                    </Text>
                  </div>
                <Divider />
                <div className="d-flex flex-column w-100 align-items-center">
                  <Text align="center">
                    Have faith that your garden is happy, healthy, and beautiful. There's no need to stress.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Spacer y={5} />
        <div className="container-fluid d-flex flex-row justify-content-center">
          <Card css={{width: "80%"}} className="row p-2 d-flex flex-row">
            <div className="col-xl-4 col-md-12 d-none d-xl-flex flex-column h-100 justify-content-center align-items-center">
              <img src={jess} alt="jess" className="img-shadow img-round" />
            </div>
            <div className="col-xl-4 col-md-12 d-flex d-xl-none flex-row justify-content-center">
              <img src={jess} alt="jess" className="img-shadow img-round" style={{maxWidth: "50vw"}} />
            </div>
            <div className="col-xl-8 col-md-12 d-flex flex-column p-5 gap-5 justify-content-between">
              <div>
                <Text h2>
                  Why this model works:
                </Text>
                <Text>
                  Landscapers are in high demand and outsourcing may not be in the budget right now. Many people are more able than they realize. Doing it yourself can result in significant savings that can be used for other things. Also, it can be really gratifying to work in the garden, connect with nature and create something beautiful or improve on what you already have.
                </Text>
              </div>
              <div>
                <Text h2>
                  Find me online!
                </Text>
                <Text>
                  You can find me on <Link href={instagramLink} target="blank" isExternal>Instagram</Link>, <Link href={youtubeLink} target="blank" isExternal>YouTube</Link>, and <Link href={tiktokLink} target="blank" isExternal>TikTok</Link>.
                </Text>
              </div>
              <Button color="gradient" bordered size="lg" onClick={() => window.open("https://sites.google.com/view/youcandoitgardening/contact-me-by-phone", "blank")}>
                Schedule A Consultation
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}