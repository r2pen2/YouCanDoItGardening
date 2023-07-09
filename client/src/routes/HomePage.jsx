import React, { useEffect, useState } from 'react'

import { Button, Text, Card, Modal, Textarea, Divider, Spacer, Link } from "@nextui-org/react";

import jess from "../assets/images/jess.jpg";

import "../assets/style/homepage.css"
import { instagramLink, tiktokLink, youtubeLink } from '../api/links';


export default function HomePage() {

  return (
    <div className="d-flex flex-column">
      <section className="home-image d-flex flex-column w-100 align-items-center" style={{paddingTop: "10rem", minHeight: "150vh"}}>
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex flex-row" style={{gap: ".5rem"}}>
            <Text h1 
              css={{
                fontSize: "4rem",
              }}>
              Demystifying gardening so you feel
            </Text>
          </div>
          <div className="d-flex flex-row" style={{gap: ".5rem"}}>
            <Text h1 
              css={{
                fontSize: "4rem",
              }}>
              more
            </Text>
            <Text h1 
              className="word-hover"
              css={{
                fontSize: "4rem",
                textGradient: "180deg, $yellow600 -20%, $red600 100%",
              }}
              weight="bold"
            >
              empowered
            </Text>
            <Text h1 
              css={{
                fontSize: "4rem",
              }}>
              and
            </Text>
            <Text h1 
              className="word-hover"
              css={{
                fontSize: "4rem",
                textGradient: "180deg, $yellow600 -20%, $red600 100%",
              }}
              weight="bold"
            >
              confident
            </Text>
          </div>
          <div className="d-flex flex-row" style={{gap: ".5rem"}}>
            <Text h1 
              css={{
                fontSize: "4rem",
              }}>
              in doing it
            </Text>
            <Text h1 
              css={{
                fontSize: "4rem",
                textGradient: "0deg, $purple600 -20%, $pink600 100%",
              }}
              className="word-hover"
              weight="bold"
            >
              yourself
            </Text>
          </div>
        </div>
        <div className="container-fluid py-5">
          <div className="row d-flex flex-row justify-content-center">
            <div className="col-xl-4 col-md-12 p-3">
              <Card
                variant="bordered"
                isHoverable
                css={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
                
              >
                <Card.Header>
                  <Text b className="w-100">
                    Save Money
                  </Text>
                </Card.Header>
                <Divider />
                <Card.Body>
                  <Text align="center">
                    Ensure that your garden will stay safe and healthy for years to come
                  </Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-xl-4 col-md-12 p-3">
              <Card
                isHoverable
                variant="bordered"
                css={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
                
              >
                <Card.Header>
                  <Text b className="w-100">
                    Look Good
                  </Text>
                </Card.Header>
                <Divider />
                <Card.Body>
                  <Text align="center">
                    Professional designs will make your garden jaw-dropping
                  </Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-xl-4 col-md-12 p-3">
              <Card
                isHoverable
                variant="bordered"
                css={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
                
              >
                <Card.Header>
                  <Text b className="w-100">
                    Feel Good
                  </Text>
                </Card.Header>
                <Divider />
                <Card.Body>
                  <Text align="center">
                    Have faith that your garden is happy, healthy, and beautiful
                  </Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <Spacer css={{height: 100}} />
        <div className="container-fluid d-flex flex-row justify-content-center">
          <Card className="row w-80 p-2 d-flex flex-row">
            <div className="col-xl-4 col-md-12">
              <img src={jess} alt="jess" className="img-shadow img-round" />
            </div>
            <div className="col-xl-8 col-md-12 d-flex flex-column p-5 justify-content-between">
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
              <Button color="gradient" bordered size="xl" onClick={() => window.open("https://sites.google.com/view/youcandoitgardening/contact-me-by-phone", "blank")}>
                Schedule A Consultation
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}