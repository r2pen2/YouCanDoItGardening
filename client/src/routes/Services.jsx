import React, { useState } from 'react'

import { Button, Card, Collapse, Grid, Link, Spacer, Text } from "@nextui-org/react";

import "../assets/style/services.css"
import { PageHeader, } from '../components/Bar';
import afterSchool from "../assets/images/after-school.jpg"
import dyslexia from "../assets/images/wilson-reading-tutoring.jpg"
import tutoring from "../assets/images/tutoring-placeholder.jpg"
import { btbOrange } from '../assets/style/colors';
import CheckIcon from '@mui/icons-material/Check';

import EditIcon from '@mui/icons-material/Edit';
import { AfterSchoolIcon, BookIcon, PencilIcon, iconFills } from '../components/Icons';
import { ScheduleBar } from '../components/Forms';

export default function Services() {

  const [afterSchoolOpen, setAfterSchoolOpen] = useState(false);
  const [tutoringOpen, setTutoringOpen] = useState(false);
  const [dyslexiaOpen, setDyslexiaOpen] = useState(false);

  const [formModalOpen, setFormModalOpen] = useState(false);

  return (
    <div className="d-flex flex-column">
      <PageHeader 
        text="Our Services"
        sections={[
          {
            title: "After School Programs",
            id: "after-school-programs",
            openCollapse: () => {
              setAfterSchoolOpen(true);
              setTimeout(() => {
                window.location.hash = "";
                window.location.hash = `after-school-programs`;
              }, 100);
            }
          },
          {
            title: "1 on 1 Tutoring",
            id: "1-on-1-tutoring",
            openCollapse: () => {
              setTutoringOpen(true);
              setTimeout(() => {
                window.location.hash = "";
                window.location.hash = `1-on-1-tutoring`;
              }, 100);
            }
          },
          {
            title: "Dyslexia Therapy",
            id: "dyslexia-therapy",
            openCollapse: () => {
              setDyslexiaOpen(true);
              setTimeout(() => {
                window.location.hash = "";
                window.location.hash = `dyslexia-therapy`;
              }, 100);
            }
          },
        ]}
      />
      <section className="d-flex flex-column align-items-center w-100 p-xl-5">
        <Collapse.Group splitted accordion={false}>
          <Collapse 
            title="After School Programs" 
            bordered 
            shadow
            expanded={afterSchoolOpen}
            onClick={() => setAfterSchoolOpen(!afterSchoolOpen)}
            subtitle="Explore social skills and executive functioning programs after-school at BTB"
            contentLeft={<AfterSchoolIcon fill={iconFills.orange} />}
            id="after-school-programs"
          >
            <div className="fill-line dotted" />
            <div className="container-fluid">
              <div className="row">
                <div className="col-xxl-6 col-xl-12 d-flex flex-column px-xl-5 py-5 gap-2">
                  <Text h1 color="primary">
                    After School at BTB
                  </Text>
                  <Text>
                    The BTB After School Program offers students in K-8 a warm and relaxing environment where they can unwind with friends and get homework done under the guidance of attentive, professional educators.
                  </Text>
                  <Text>
                    The BTB After School Program is a place where all students are welcome. Your child’s potential will be unleashed when our enthusiastic teachers connect with your child and partner with both of you in reaching his or her goals. Our low student-to-teacher ratios, creative programming, and modern youthful space will be a place where every child is, and feels, accepted.
                  </Text>
                </div>
                <div className="col-xxl-6 col-xl-12">
                  <img src={afterSchool} alt="after-school" className="service-image img-shadow"/>
                </div>
              </div>
              <div className="row">
                <div className="col px-xl-5 py-5">
                  <div className="container-fluid">
                    <Text h2 color="primary">
                      Why Sign Up?
                    </Text>
                    <div className="row">
                      <div className="col-xl-6 col-lg-12">
                        <SignUpReason>
                          1 on 1 tutoring in all academic subjects including math, reading, science, and social studies
                        </SignUpReason>
                      </div>
                      <div className="col-xl-6 col-lg-12">
                        <SignUpReason>
                          Tutoring in executive functioning, study skills, social behavior mapping or any area that requires individual instruction
                        </SignUpReason>
                      </div>
                      <div className="col-xl-6 col-lg-12">
                        <SignUpReason>
                          Educators provide data confirming your child’s progress and participation
                        </SignUpReason>
                      </div>
                      <div className="col-xl-6 col-lg-12">
                        <SignUpReason>
                          Regular communication with parents and teachers (if appropriate)
                        </SignUpReason>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Collapse>
          <Collapse 
            title="1 on 1 Tutoring" 
            bordered 
            shadow
            expanded={tutoringOpen}
            onClick={() => setTutoringOpen(!tutoringOpen)}
            subtitle="Dive into individualized learning at BTB"
            contentLeft={<PencilIcon fill={iconFills.red} />}
            id="1-on-1-tutoring"
          >
            <div className="fill-line dotted" />
            <div className="container-fluid">
              <div className="row">
                <div className="col-xxl-6 col-xl-12 d-flex flex-column px-xl-5 py-5 gap-2">
                  <Text h1 color="primary">
                    1 on 1 Tutoring at BTB
                  </Text>
                  <Text>
                    Beyond The Bell respects all children for their unique learning profiles. We believe that all children will thrive when provided with appropriate accommodations, positive behavioral supports and skilled, engaging educators.
                  </Text>
                  <Text>
                    Beyond The Bell provides carefully organized, one-hour tutoring sessions in all areas of academics. Students engaging with BTB tutoring services receive the necessary assistance in subjects like math, reading, science, and social studies.
                  </Text>
                </div>
                <div className="col-xxl-6 col-xl-12">
                  <img src={tutoring} alt="private-tutoring" className="service-image img-shadow"/>
                </div>
              </div>
              <div className="row">
                <div className="col px-xl-5 py-5">
                  <div className="container-fluid">
                    <Text h2 color="primary">
                      Why Sign Up?
                    </Text>
                    <div className="row">
                      <div className="col-xl-6 col-lg-12">
                        <SignUpReason>
                          Homework support from experienced educators and certified teachers
                        </SignUpReason>
                      </div>
                      <div className="col-xl-6 col-lg-12">
                        <SignUpReason>
                          A “chillaxing” zone (with hammock swings, bean bags, fidgets, noise cancelling headphones, Chromebook laptops and iPads to access Google Classroom and other resources)
                        </SignUpReason>
                      </div>
                      <div className="col-xl-6 col-lg-12">
                        <SignUpReason>
                          Study spots (including cozy study carrels, comfy chairs, the work bar, and adjustable height project tables)
                        </SignUpReason>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Collapse>
          <Collapse 
            title="Dyslexia Therapist/Wilson Tutoring" 
            bordered 
            shadow
            expanded={dyslexiaOpen}
            onClick={() => setDyslexiaOpen(!dyslexiaOpen)}
            subtitle="Uncover Tailored Dyslexia Support at BTB"
            contentLeft={<BookIcon fill={iconFills.blue} />}
            id="dyslexia-therapy"
          >
            <div className="fill-line dotted" />
            <div className="container-fluid">
              <div className="row">
                <div className="col-xxl-6 col-xl-12 d-flex flex-column px-xl-5 py-5 gap-2">
                  <Text h1 color="primary">
                    Wilson Tutoring at BTB
                  </Text>
                  <Text>
                    Using the <Link isExternal href="https://www.wilsonlanguage.com/programs/wilson-reading-system/" target="blank" color="success">Wilson Reading System©</Link>, a multi-sensory approach to literacy instruction, BTB offers direct instruction with a Level II certified Wilson reading specialist for students whose basic literacy skills are below that of their peers, despite conventional interventions.
                  </Text>
                  <Text>
                    This system is very effective for those who have been unable to learn to read due to language based learning disabilities like dyslexia. Our Dyslexia Therapist will combine Wilson instruction and silent reading of high interest books to facilitate real progress in the area of literacy. Using the Wilson diagnostic assessments, we will be able to follow your student's progress through out the program.
                  </Text>
                </div>
                <div className="col-xxl-6 col-xl-12">
                  <img src={dyslexia} alt="wilson-tutoring" className="service-image img-shadow"/>
                </div>
              </div>
              <div className="row">
                <div className="col px-xl-5 py-5">
                  <div className="container-fluid">
                    <Text h2 color="primary">
                      Why Sign Up?
                    </Text>
                    <div className="row">
                      <div className="col-xxl-4 col-xl-6 col-lg-12">
                        <SignUpReason>
                          Word structure, in depth, for automatic decoding and spelling
                        </SignUpReason>
                      </div>
                      <div className="col-xxl-4 col-xl-6 col-lg-12">
                        <SignUpReason>
                          Word recognition and spelling of high frequency words, including irregular words
                        </SignUpReason>
                      </div>
                      <div className="col-xxl-4 col-xl-6 col-lg-12">
                        <SignUpReason>
                          Word-learning skills
                        </SignUpReason>
                      </div>
                      <div className="col-xxl-4 col-xl-6 col-lg-12">
                        <SignUpReason>
                          Sentence-level text reading with ease, expression, and understanding
                        </SignUpReason>
                      </div>
                      <div className="col-xxl-4 col-xl-6 col-lg-12">
                        <SignUpReason>
                          Listening comprehension with age-appropriate narrative and informational text
                        </SignUpReason>
                      </div>
                      <div className="col-xxl-4 col-xl-6 col-lg-12">
                        <SignUpReason>
                          Reading comprehension with narrative and expository text of increasing levels of difficulty
                        </SignUpReason>
                      </div>
                      <div className="col-xxl-4 col-xl-6 col-lg-12">
                        <SignUpReason>
                          Narrative and informational text structures
                        </SignUpReason>
                      </div>
                      <div className="col-xxl-4 col-xl-6 col-lg-12">
                        <SignUpReason>
                          Organization of information for oral or written expression
                        </SignUpReason>
                      </div>
                      <div className="col-xxl-4 col-xl-6 col-lg-12">
                        <SignUpReason>
                          Proofreading skills
                        </SignUpReason>
                      </div>
                      <div className="col-xxl-4 col-xl-6 col-lg-12">
                        <SignUpReason>
                        Self-monitoring for word recognition accuracy and comprehension
                        </SignUpReason>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Collapse>
        </Collapse.Group>
      </section>
      <ScheduleBar open={formModalOpen} setOpen={setFormModalOpen} />
    </div>
  )
}

function SignUpReason(props) {
  return (
    <div className="d-flex flex-row align-items-center px-xl-2 py-2 h-100">
      <Card isHoverable css={{height: "100%"}}>
        <Card.Body>
          <div className="d-flex flex-row align-items-center h-100 gap-2">
            <CheckIcon fontSize="12px" htmlColor={btbOrange} />
            <Text>
              {props.children}
            </Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}