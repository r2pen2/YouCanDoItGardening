import React, { useEffect, useState } from 'react'

import { Button, Text, Card, Modal, Textarea } from "@nextui-org/react";

import jess from "../assets/images/jess.jpg";

import "../assets/style/homepage.css"


export default function HomePage() {

  return (
    <div className="d-flex flex-column">
      <section className="home-image d-flex flex-column w-100 align-items-center" style={{paddingTop: "2rem", minHeight: "150vh"}}>
          <div className="container-fluid">
            <div className="row w-100">
              <div className="d-flex col-lg-12 col-xl-8 flex-column align-items-left justify-content-center px-5">
                <div className="d-flex flex-column align-items-left">
                  <div className="d-flex flex-row" style={{gap: ".5rem"}}>
                    <Text h1 
                      css={{
                        fontSize: "3rem",
                      }}>
                      Demystifying gardening so you feel
                    </Text>
                  </div>
                  <div className="d-flex flex-row" style={{gap: ".5rem"}}>
                    <Text h1 
                      css={{
                        fontSize: "3rem",
                      }}>
                      more
                    </Text>
                    <Text h1 
                      className="word-hover"
                      css={{
                        fontSize: "3rem",
                        textGradient: "180deg, $yellow600 -20%, $red600 100%",
                      }}
                      weight="bold"
                    >
                      empowered
                    </Text>
                    <Text h1 
                      css={{
                        fontSize: "3rem",
                      }}>
                      and
                    </Text>
                    <Text h1 
                      className="word-hover"
                      css={{
                        fontSize: "3rem",
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
                        fontSize: "3rem",
                      }}>
                      in doing it
                    </Text>
                    <Text h1 
                      css={{
                        fontSize: "3rem",
                        textGradient: "0deg, $purple600 -20%, $pink600 100%",
                      }}
                      className="word-hover"
                      weight="bold"
                    >
                      yourself
                    </Text>
                  </div>
                  
                </div>
              </div>
              <div className="d-flex flex-column col-lg-12 col-xl-4 align-items-center justify-content-center" style={{paddingTop: "5rem"}}>
                <Card isHoverable isPressable style={{width: 550}}>
                  <Card.Body>
                    <div className="d-flex flex-column">
                      <img src={jess} alt="jess" style={{width: 550, backgroundColor: "red"}} />
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}