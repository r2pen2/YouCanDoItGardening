// Library Imports
import React from 'react';
import { Navbar as NextUINavbar, Dropdown, Text, Image, Button, Link, Divider } from "@nextui-org/react";
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

import { instagramLink, youtubeLink, } from '../api/links';

import logoBlack from "../assets/images/logoTransparentBlack.png";

// Style Imports
import "../assets/style/navbar.css";
import "../assets/style/layout.css";

const navbarItemFontSize = "20px";

export function NavbarPages() {

  function checkLinkActive(route) {
    const location = window.location.pathname;
    if (route === "home" && window.location.pathname.length < 2) {
      return true;
    }
    return location.includes(route);
  }

  return (
    <NextUINavbar.Content enableCursorHighlight activeColor="primary" hideIn='xs'>
      <NextUINavbar.Link 
        isActive={checkLinkActive("home")}
        href="home"
        itemCss={{fontSize: navbarItemFontSize}}
      >
        Home
      </NextUINavbar.Link>
      <NextUINavbar.Link 
        isActive={checkLinkActive("services")}
        href="services"
        itemCss={{fontSize: navbarItemFontSize}}
      >
        Services & Fees
      </NextUINavbar.Link>
      <NextUINavbar.Link 
        isActive={checkLinkActive("about")}
        href="about"
        itemCss={{fontSize: navbarItemFontSize}}
      >
        About
      </NextUINavbar.Link>
      <NextUINavbar.Link 
        isActive={checkLinkActive("basics")}
        href="basics"
        itemCss={{fontSize: navbarItemFontSize}}
      >
        Basic Principles
      </NextUINavbar.Link>
      <NextUINavbar.Link 
        isActive={checkLinkActive("teaching")}
        href="teaching"
        itemCss={{fontSize: navbarItemFontSize}}
      >
        Teaching
      </NextUINavbar.Link>
    </NextUINavbar.Content>
  )
}

export function Navbar() {

  
  const collapseItems = [
    {
      name: "Home",
      href: "home",
    },
    {
      name: "Services & Fees",
      href: "services",
    },
    {
      name: "About",
      href: "about",
    },
    {
      name: "Basic Principles",
      href: "basics",
    },
    {
      name: "Teaching",
      href: "teaching",
    },
  ];

  return (
    <NextUINavbar 
      height="80px"
      variant="sticky"
      maxWidth="xl"
    >
      <NextUINavbar.Toggle showIn="xs" css={{flex: 1}} className="px-2"/>
      <BrandSmall />
      <BrandLarge />
      <BrandCentered />
      <NavbarPages />
      <NavbarSocials />
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

function BrandSmall() {
  return (
    <NextUINavbar.Brand
      showIn="sm"
      hideIn="xs"
      css={{flex: 1}}
    >
      <div 
        className="navbar-brand-content"
        onClick={() => window.location = "/"}
      >
        <Image
          width={40}
          height={40}
          src={logoBlack}
          alt="logo-black"
        />
      </div>
    </NextUINavbar.Brand>
  )
}

function BrandLarge() {
  return (
    <NextUINavbar.Brand
      hideIn="sm"
      css={{width: "25%", flex: 3}}
    >
      <div 
        className="navbar-brand-content"
        onClick={() => window.location = "/"}
      >
        <Image
          width={40}
          height={40}
          src={logoBlack}
          alt="logo-black"
        />
        <Text b css={{fontSize: 20, marginLeft: "0.5em"}}>
          You Can Do It Gardening
        </Text>
      </div>
    </NextUINavbar.Brand>
  )
}

function BrandCentered() {
  return (
    <NextUINavbar.Brand
      showIn="xs"
      css={{flex: 3}}
    >
      <div className="d-flex flex-row justify-content-center w-100">
        <div 
          className="navbar-brand-content"
          onClick={() => window.location = "/"}
        >
          <Image
            width={40}
            height={40}
            src={logoBlack}
            alt="logo-black"
          />
          <Text b css={{fontSize: 20, marginLeft: "0.5em"}}>
            You Can Do It Gardening
          </Text>
        </div>
      </div>
    </NextUINavbar.Brand>
  )
}

function NavbarSocials() {

  return (
    <NextUINavbar.Content enableCursorHighlight activeColor="primary">
      <div className="d-flex flex-row align-items-center justify-content-center w-100 gap-2">
        <Button
          light
          auto
          icon={<YouTubeIcon />}
          onClick={() => window.open(youtubeLink, "_blank")}
        />
        <Button
          light
          auto
          icon={<InstagramIcon />}
          onClick={() => window.open(instagramLink, "_blank")}
        />
      </div>
    </NextUINavbar.Content>
  )
}