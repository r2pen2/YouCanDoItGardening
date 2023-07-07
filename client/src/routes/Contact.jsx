import { useState, } from 'react'

import { Button, Input, Modal, Text, Textarea } from "@nextui-org/react";

import ReCAPTCHA from "react-google-recaptcha";

import "../assets/style/services.css"
import { PageHeader, } from '../components/Bar';

export default function Contact() {
  
  const [recaptchaModalOpen, setRecaptchaModalOpen] = useState(false);

  function sendForm() {
    // Send
  }

  function handleCaptchaComplete(v) {
    if (v.length < 1) {
      setRecaptchaModalOpen(false);
      return;
    }
    sendForm();
    window.location = "/thank-you";
  }

  function getCaptchaMessage() {
    const messages = [
      "Are you as real as our little learners? Prove it by solving this puzzle!",
      "Let’s play a quick game! Show us your human skills below!",
      "Are you a clever human like our little scholars? Prove it below!",
      "Quick! Show us you're not a robot so we can welcome you to our learning family!",
      "Join our kiddos in a mini-challenge — prove you're human below!",
      "Solve this puzzle, and you're in the Smartypants Club with our little ones!",
      "Pssst! Can you solve this like a super-smart grown-up?",
      "Our little bookworms challenge you to prove you’re human! Puzzle time!",
      "Jump into the kiddie pool by showing us your human-ness below!",
      "A quick brain teaser to join our circle of learning heroes! Prove you’re human below!"
    ]

    function getRandomValueFromArray(array) {
      if (array.length === 0) {
          return null; // return null if the array is empty
      }
  
      var randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
    }

    return getRandomValueFromArray(messages);
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <Modal
        blur
        open={recaptchaModalOpen}
        onClose={() => setRecaptchaModalOpen(false)}
        closeButton
      >
        <Modal.Body      
          className="d-flex flex-column w-100 align-items-center text-center py-3"
        >
          <Text>
            {getCaptchaMessage()}
          </Text>
          <ReCAPTCHA
            onChange={handleCaptchaComplete}
            sitekey="6LfuCIwmAAAAAOx25tZVJk5Jrw4hjjYWBPHU4IhU"
          />
        </Modal.Body>
      </Modal>
      <PageHeader text="Contact / Register" />
      <section className="d-flex flex-row justify-content-center m-5 w-80">
        <ContactForm/>
      </section>
    </div>
  )

  

function ContactForm() {

  return (
    <div className="gap-2 d-flex flex-column align-items-start justify-content-center">
      <div className="container-fluid d-flex flex-column">
        <div className="row">
          <Text h1 align="start">
            We Would Love To Hear From You!
          </Text>
          <Text align="start">
            Do you want to see how you can take the next step in supporting your child’s educational growth? Drop us a line with any questions. We’re here to help!
          </Text>
        </div>
        <div className="row pt-2">
          <Input clearable bordered label="Your Name" fullWidth css={{display: "flex", alignItems: "start"}} />
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 pt-2">
            <Input clearable bordered label="Your phone" fullWidth css={{display: "flex", alignItems: "start"}} />
          </div>      
          <div className="col-lg-6 col-md-12 pt-2">
            <Input clearable bordered label="Your email" fullWidth css={{display: "flex", alignItems: "start"}} />
          </div>      
        </div>
        <div className="row pt-2">
          <Input clearable bordered label="Preferred contact method" fullWidth css={{display: "flex", alignItems: "start"}} />
        </div>
        <div className="row pt-2">
          <Input clearable bordered label="City, State" fullWidth css={{display: "flex", alignItems: "start"}} />
        </div>
        <div className="row pt-2">
          <Textarea bordered label="How can we help?" placeholder="Tell us what you're looking for." fullWidth css={{display: "flex", alignItems: "start"}} />
        </div>
      </div>
      <div className="d-flex justify-content-center w-100 mt-3">
        <Button color="primary" shadow onPress={() => setRecaptchaModalOpen(true)}>
          Submit
        </Button>
      </div>
    </div>
  )
}
}