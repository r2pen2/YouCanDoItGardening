// Library Imports
import React from 'react';
import { Navbar as NextUINavbar, Text, Image, Link, Dropdown } from "@nextui-org/react";

import logoBlack from "../assets/images/logoNoText.png";

import LocalCafeTwoToneIcon from '@mui/icons-material/LocalCafeTwoTone';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import AutoAwesomeTwoToneIcon from '@mui/icons-material/AutoAwesomeTwoTone';

// Style Imports
import "../assets/style/navbar.css";
import "../assets/style/layout.css";
import { facebookLink, instagramLink, tiktokLink, youtubeLink } from '../api/links';

import {WLNavBrandLeft, WLNavContent, WLNavDropdownMenu, WLNavSocials} from "../libraries/Web-Legos/components/Navigation";

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
      <WLNavDropdownMenu 
        buttonLight 
        buttonText="Shop" 
        buttonFontSize={navbarItemFontSize} 
        links={[
          {
            key: "coffee",
            href: "https://www.buymeacoffee.com/youcandoitg",
          },
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
        <Dropdown.Item
          key="coffee"
          showFullDescription 
          description="Help keep my content free by buying me a virtual cup of coffee!"
          icon={<LocalCafeTwoToneIcon style={{color: "#603815"}} />}
        >
          Buy Me A Coffee
        </Dropdown.Item>
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
          description="Show the world your support with You Can Do It Gardening merch"
          icon={<AutoAwesomeTwoToneIcon style={{color: "orange"}} />}
        >
          Clothing
        </Dropdown.Item>
      </WLNavDropdownMenu>
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
          <NextUINavbar.Toggle className="d-flex d-xxl-none" />
          <WLNavBrandLeft showIn="md" source={logoBlack} title="You Can Do It Gardening" />
        </WLNavContent.Left>
        <WLNavContent.Right>
          <NavbarPages />
          <WLNavSocials noHide>
            <WLNavSocials.Button platformKey="instagram" href={instagramLink} />
            <WLNavSocials.Button platformKey="facebook" href={facebookLink} />
            <WLNavSocials.Button platformKey="tiktok" href={tiktokLink} />
            <WLNavSocials.Button platformKey="youtube" href={youtubeLink} />
          </WLNavSocials>
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