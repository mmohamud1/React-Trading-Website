import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  // Scroll to top of page on click (react-scroll)
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const linkGroups = [
    {
      title: 'About Us',
      links: ['How it works', 'Careers', 'Investors', 'Terms of service'],
    },
    {
      title: 'Videos',
      links: ['Submit Video', 'Ambassadors', 'Agency', 'Influencer'],
    },
    {
      title: 'Contact Us',
      links: ['Contact', 'Support', 'Destinations', 'Sponsorships'],
    },
    {
      title: 'Our Approach',
      links: ['Schemes', 'Donations', 'Partners', 'Insight'],
    },
  ];

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer role="navigation" aria-label="Footer links">
          <FooterLinksWrapper>
            {linkGroups.slice(0, 2).map((group) => (
              <FooterLinkItems key={group.title}>
                <FooterLinkTitle>{group.title}</FooterLinkTitle>
                {group.links.map((link) => (
                  <FooterLink to='/' key={link}>
                    {link}
                  </FooterLink>
                ))}
              </FooterLinkItems>
            ))}
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            {linkGroups.slice(2).map((group) => (
              <FooterLinkItems key={group.title}>
                <FooterLinkTitle>{group.title}</FooterLinkTitle>
                {group.links.map((link) => (
                  <FooterLink to='/' key={link}>
                    {link}
                  </FooterLink>
                ))}
              </FooterLinkItems>
            ))}
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              moTrade
            </SocialLogo>
            <WebsiteRights>
              Created by Mohamed Mohamud &copy; {new Date().getFullYear()}
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='/' aria-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='/' aria-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='/' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
