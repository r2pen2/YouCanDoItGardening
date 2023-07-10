import { Button, Card, Modal, Text } from "@nextui-org/react";
import LaunchIcon from '@mui/icons-material/Launch';
import { scheduleInPersonLink, scheduleOnlineLink } from "../api/links";

import ComputerTwoToneIcon from '@mui/icons-material/ComputerTwoTone';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';

/**
 * Some icon fill presets to be used in modals
 */
const iconFills = {
  purple: "#8a4fcc",
  orange: "#f05c21",
  red: "#f0214e",
  blue: "#009bdf",
  green: "#7ac22d",
}

function GardeningIcon(props) {

  /** Default size for YouCanDoItGardening Icons */
  const defaultIconSize = "1.875rem";

  return (
    <svg style={{marginRight: props.marginRight}} xmlns="http://www.w3.org/2000/svg" height={props.size ? `${props.size}` : defaultIconSize} viewBox="0 -960 960 960" width={props.size ? `${props.size}` : defaultIconSize} fill={props.fill}>
      {props.children}
    </svg>
  )
}

function ComputerIcon({fill, size, marginRight}) {
  return (
    <GardeningIcon fill={fill} size={size} marginRight={marginRight}>
      <path d="M4 6h16v10H4z" opacity=".3"/>
      <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
    </GardeningIcon>
  )
}

export function ContactModal({open, setOpen}) {
  
  function ModalOptionCard({icon, title, subtitle, href}) {

    function handleModalOptionCardPress(href) {
      window.open(href, "_blank");
    }
  
    return (
      <Card 
        isHoverable 
        isPressable
        variant="bordered" 
        onPress={() => handleModalOptionCardPress(href)}
        css={{flex:1}}
      >
        <Card.Body>
          <div className="d-flex flex-row align-items-center justify-content-space-between">
            {icon}
            <div className="d-flex flex-column align-items-start justify-content-center w-100">
              <Text b>
                {title}
              </Text>
              {subtitle}
            </div>
            <LaunchIcon />
          </div>
        </Card.Body>
      </Card>
    )
  }
  
  function InPersonScheduleOptionCard() {
    return (
      <ModalOptionCard 
        icon={<ComputerTwoToneIcon fontSize="large" style={{marginRight: "1rem", color: iconFills.purple}} />}
        title="In-Person Consultations" 
        subtitle="Arrange an in-person consultation in Greater Boston and beyond!" 
        href={scheduleInPersonLink}
      />
    )
  }

  function VirtualScheduleOptionCard() {
    return (
      <ModalOptionCard 
        icon={<LocationOnTwoToneIcon fontSize="large" style={{marginRight: "1rem", color: iconFills.blue}}/>}
        title="Virtual Consultations" 
        subtitle="Book your zoom lawn check-up now!" 
        href={scheduleOnlineLink}
      />
    )
  }

  return (
    <Modal
      closeButton
      open={open}
      blur
      onClose={() => setOpen(false)}
    >
      <Modal.Header>
        <Text h3 size="$md">
          Select a consultation type to open the form in a new tab.
        </Text>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column">
          <div className="mt-2">
            <InPersonScheduleOptionCard />
          </div>
          <div className="mt-2">
            <VirtualScheduleOptionCard />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex flex-row align-items-center justify-content-center w-100">
          <Button auto bordered color="error" onPress={() => setOpen(false)} >
              Close
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}