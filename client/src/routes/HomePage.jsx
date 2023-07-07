import React, { useEffect, useState } from 'react'

import { Button, Text, Card, Modal, Textarea } from "@nextui-org/react";

import "../assets/style/homepage.css"


export default function HomePage() {

  return (
    <div className="d-flex flex-column">
      <section className="home-image d-flex flex-column w-100 align-items-center justify-content-center py-5 px-2">
        <Text 
          h1
          css={{ 
            fontSize: "5rem",
            filter: "drop-shadow(2px 2px 5px black)",
          }}
          color="white"
        >
          You Can Do It Gardening
        </Text>
      </section>
    </div>
  )
}