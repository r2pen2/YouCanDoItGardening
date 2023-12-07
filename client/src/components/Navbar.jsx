// Library Imports
import React from 'react';
import { Navbar as NextUINavbar, Link, Dropdown, Divider, Text, } from "@nextui-org/react";

import logoBlack from "../assets/images/logoNoText.png";

import LocalCafeTwoToneIcon from '@mui/icons-material/LocalCafeTwoTone';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import AutoAwesomeTwoToneIcon from '@mui/icons-material/AutoAwesomeTwoTone';
// import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

import EventAvailableTwoToneIcon from '@mui/icons-material/EventAvailableTwoTone';
import ComputerTwoToneIcon from '@mui/icons-material/ComputerTwoTone';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';


// Style Imports
import "../assets/style/navbar.css";
import "../assets/style/layout.css";
import { facebookLink, instagramLink, scheduleInPersonLink, scheduleOnlineLink, tiktokLink, youtubeLink } from '../api/links';

import {WLNavBrandLeft, WLNavContent, WLNavDropdownMenu, WLNavSocials} from "../libraries/Web-Legos/components/Navigation";
import { VerticalDivider } from '../libraries/Web-Legos/components/Layout';
import { FacebookIcon, InstagramIcon, TikTokIcon, YouTubeIcon } from '../libraries/Web-Legos/components/Icons';
import { iconFills } from './Modals';

const navbarItemFontSize = "18px";


const collapseItems = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "About",
    href: "about",
  },
  {
    name: "Services & Fees",
    href: "services",
  },
  {
    name: "Resources",
    href: "resources",
  },
  {
    name: "Gallery",
    href: "gallery",
  },
  {
    name: "Find Me",
    href: "find-me",
  },
];

function NavbarPages() {

  function checkLinkActive(route) {
    const location = window.location.pathname;
    if (route === "home" && window.location.pathname.length < 2) {
      return true;
    }
    return location.includes(route);
  }

  return (
    <NextUINavbar.Content enableCursorHighlight activeColor="primary" className='d-none d-xxl-flex flex-row align-items-center justify-content-end w-100 px-0'>
      <NextUINavbar.Link 
        isActive={checkLinkActive("home")}
        href="home"
        itemCss={{fontSize: navbarItemFontSize}}
      >
        Home
      </NextUINavbar.Link>
      <NextUINavbar.Link 
        isActive={checkLinkActive("about")}
        href="about"
        itemCss={{fontSize: navbarItemFontSize}}
      >
        About
      </NextUINavbar.Link>
      <NextUINavbar.Link 
        isActive={checkLinkActive("services")}
        href="services"
        itemCss={{fontSize: navbarItemFontSize}}
      >
        Services & Fees
      </NextUINavbar.Link>
      <NextUINavbar.Link 
        isActive={checkLinkActive("resources")}
        href="resources"
        itemCss={{fontSize: navbarItemFontSize}}
      >
        Resources
      </NextUINavbar.Link>
      <NextUINavbar.Link 
        isActive={checkLinkActive("gallery")}
        href="gallery"
        itemCss={{fontSize: navbarItemFontSize}}
      >
        Gallery
      </NextUINavbar.Link>
      <NextUINavbar.Link 
        isActive={checkLinkActive("find-me")}
        href="find-me"
        itemCss={{fontSize: navbarItemFontSize}}
      >
        Find Me
      </NextUINavbar.Link>
    </NextUINavbar.Content>
  )
}


export function Navbar() {

  return (
    <NextUINavbar 
      height="80px"
      variant="sticky"
      maxWidth="xl"
    >
      <WLNavContent>
        <WLNavContent.Left>
          <NextUINavbar.Toggle className="d-flex d-xxl-none px-3" />
          <WLNavBrandLeft showIn="md" source={logoBlack} title="You Can Do It Gardening" />
          <Divider className="d-none d-xxl-inline" css={{width: "3rem", marginLeft: "1rem"}}/>
          <NavbarPages />
        </WLNavContent.Left>
        <WLNavContent.Right>
          {/* <WLNavSocials showIn="sm">
            <WLNavSocials.Button size={30} platformKey="instagram" href={instagramLink} />
            <WLNavSocials.Button size={30} platformKey="facebook" href={facebookLink} />
            <WLNavSocials.Button size={30} platformKey="tiktok" href={tiktokLink} />
            <WLNavSocials.Button size={30} platformKey="youtube" href={youtubeLink} />
          </WLNavSocials>
          <SocialsDropdown />
          <div className="px-0 px-lg-2" >
            <VerticalDivider height={40} color="#212529" />
          </div>
          <ScheduleDropdown />
          <div className="px-0 px-lg-2" >
            <VerticalDivider height={40} color="#212529" />
          </div> */}
          <ShopDropdown />
        </WLNavContent.Right>
      </WLNavContent>
      <NextUINavbar.Collapse >
        {collapseItems.map((item, index) => (
          <NextUINavbar.CollapseItem key={index}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href={item.href}
            >
              {item.name}
            </Link>
          </NextUINavbar.CollapseItem>
        ))}
      </NextUINavbar.Collapse>
    </NextUINavbar>
  )
}

function ShopDropdown() {
  return (
    <NextUINavbar.Content css={{padding: 0}}>
      <WLNavDropdownMenu 
        hideTextIn="all"
        buttonIcon={<Text className="m-0">SHOP</Text>}
        buttonLight 
        buttonText="SHOP" 
        buttonFontSize={navbarItemFontSize} 
        links={[
          // {
          //   key: "coffee",
          //   href: "https://www.buymeacoffee.com/youcandoitg",
          // },
          {
            key: "pruning",
            href: "https://stan.store/youcandoitgardening",
          },
          {
            key: "clothing",
            href: "https://youcandoitgardening.creator-spring.com/",
          },
        ]}
      >
        {/* <Dropdown.Item
          key="coffee"
          showFullDescription 
          description="Help keep my content free by buying me a virtual cup of coffee!"
          icon={<LocalCafeTwoToneIcon style={{color: "#603815"}} />}
        >
          Buy Me A Coffee
        </Dropdown.Item> */}
        <Dropdown.Item
          key="pruning"
          showFullDescription 
          withDivider
          description="E-books on pruning sent directly to your email"
          icon={<MenuBookTwoToneIcon style={{color: "#0037C4"}} />}
        >
          Pruning Guides
        </Dropdown.Item>
        <Dropdown.Item
          key="clothing"
          showFullDescription 
          withDivider
          description="Show your support with You Can Do It Gardening merch"
          icon={<AutoAwesomeTwoToneIcon style={{color: "orange"}} />}
        >
          Clothing
        </Dropdown.Item>
      </WLNavDropdownMenu>
    </NextUINavbar.Content>
  )
}

function ScheduleDropdown() {
  return (
    <NextUINavbar.Content css={{padding: 0}}>
      <WLNavDropdownMenu 
        hideTextIn="all"
        buttonIcon={<EventAvailableTwoToneIcon style={{fontSize: 30, color: "#4C9855"}}/>}
        buttonLight 
        buttonText="Schedule" 
        buttonFontSize={navbarItemFontSize} 
        links={[
          {
            key: "in-person",
            href: scheduleInPersonLink,
          },
          {
            key: "online",
            href: scheduleOnlineLink,
          },
        ]}
      >
        <Dropdown.Item
          key="in-person"
          showFullDescription 
          description="Arrange an in-person consultation in Greater Boston and beyond"
          icon={<LocationOnTwoToneIcon fontSize="large" className="mx-0 mx-md-4" style={{color: iconFills.green}} />}
        >
          In-Person Consultations
        </Dropdown.Item>
        <Dropdown.Item
          key="online"
          showFullDescription 
          withDivider
          description="Book a virtual consultation during the most convenient time for your schedule"
          icon={<ComputerTwoToneIcon fontSize="large" className="mx-0 mx-md-4" style={{color: iconFills.blue}}/>}
        >
          Virtual Consultations
        </Dropdown.Item>
      </WLNavDropdownMenu>
    </NextUINavbar.Content>
  )
}

function SocialsDropdown() {
  return (
    <NextUINavbar.Content css={{padding: 0}} className="d-flex d-sm-none">
      <WLNavDropdownMenu 
        hideTextIn="all"
        buttonIcon={(
          <div className="gap-1 d-flex flex-column align-items-center justify-content-center">
            <div className="gap-1 d-flex flex-row align-items-center justify-content-center">
              <InstagramIcon size={16} />
              <FacebookIcon size={16} />
            </div>
            <div className="gap-1 d-flex flex-row align-items-center justify-content-center">
              <TikTokIcon size={16} />
              <YouTubeIcon size={16} />
            </div>
          </div>
        )}
        buttonLight 
        buttonText="Schedule" 
        buttonFontSize={navbarItemFontSize} 
        links={[
          {
            key: "instagram",
            href: instagramLink,
          },
          {
            key: "facebook",
            href: facebookLink,
          },
          {
            key: "tiktok",
            href: tiktokLink,
          },
          {
            key: "youtube",
            href: youtubeLink,
          },
        ]}
      >
        <Dropdown.Item
          key="instagram"
          showFullDescription 
          description="Visit me on Instagram"
          icon={<InstagramIcon />}
        >
          Instagram
        </Dropdown.Item>
        <Dropdown.Item
          key="facebook"
          showFullDescription 
          description="Visit me on Facebook"
          icon={<FacebookIcon />}
        >
          Facebook
        </Dropdown.Item>
        <Dropdown.Item
          key="tiktok"
          showFullDescription 
          description="Visit me on TikTok"
          icon={<TikTokIcon />}
        >
          TikTok
        </Dropdown.Item>
        <Dropdown.Item
          key="youtube"
          showFullDescription 
          description="Visit me on YouTube"
          icon={<YouTubeIcon />}
        >
          YouTube
        </Dropdown.Item>
      </WLNavDropdownMenu>
    </NextUINavbar.Content>
  )
}