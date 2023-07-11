// Library Imports
import React from 'react';
import { Navbar as NextUINavbar, Dropdown, Text, Image, Button, Link, Divider } from "@nextui-org/react";

import logoBlack from "../assets/images/logoNoText.png";

// Style Imports
import "../assets/style/navbar.css";
import "../assets/style/layout.css";
import { FacebookButton, InstagramButton, TikTokButton, YouTubeButton } from '../libraries/Web-Legos/components/Socials';
import { facebookLink, instagramLink, tiktokLink, youtubeLink } from '../api/links';

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
    name: "Shop",
    href: "shop",
  },
  {
    name: "Testimonials",
    href: "testimonials",
  },
  {
    name: "Media",
    href: "media",
  },
  {
    name: "Resources",
    href: "resources",
  },
  {
    name: "Teaching & Speaking",
    href: "teaching",
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
    <NextUINavbar.Content enableCursorHighlight activeColor="primary" className='d-none d-xxl-flex flex-row align-items-center justify-content-end w-100 px-3'>
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
        isActive={checkLinkActive("shop")}
        href="shop"
        itemCss={{fontSize: navbarItemFontSize}}
      >
        Shop
      </NextUINavbar.Link>
      <NextUINavbar.Link 
        isActive={checkLinkActive("testimonials")}
        href="testimonials"
        itemCss={{fontSize: navbarItemFontSize}}
      >
        Testimonials
      </NextUINavbar.Link>
      <NextUINavbar.Link 
        isActive={checkLinkActive("media")}
        href="media"
        itemCss={{fontSize: navbarItemFontSize}}
      >
        Media
      </NextUINavbar.Link>
      <NextUINavbar.Link 
        isActive={checkLinkActive("resources")}
        href="resources"
        itemCss={{fontSize: navbarItemFontSize}}
      >
        Resources
      </NextUINavbar.Link>
      <NextUINavbar.Link 
        isActive={checkLinkActive("teaching")}
        href="teaching"
        itemCss={{fontSize: navbarItemFontSize}}
      >
        Teaching & Speaking
      </NextUINavbar.Link>
    </NextUINavbar.Content>
  )
}


export function Navbar() {

  return (
    <NextUINavbar 
      height="80px"
      variant="floating"
      maxWidth="xl"
    >
      <NextUINavbar.Toggle className="d-flex d-xxl-none" />
      <BrandLarge />
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

function BrandLarge() {
  return (
    <NextUINavbar.Brand
      className="d-md-flex flex-row justify-content-left align-items-center d-none px-2"
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

function NavbarSocials() {

  return (
    <NextUINavbar.Content enableCursorHighlight activeColor="primary" css={{flex: 1}}>
      <div className="d-flex flex-row align-items-right justify-content-end w-100 gap-2">
          <InstagramButton iconSize="30px" instagramLink={instagramLink}/>
          <FacebookButton iconSize="30px" facebookLink={facebookLink}/>
          <TikTokButton iconSize="30px" tiktokLink={tiktokLink}/>
          <YouTubeButton iconSize="30px" youtubeLink={youtubeLink}/>
      </div>
    </NextUINavbar.Content>
  )
}