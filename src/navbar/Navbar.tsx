import * as React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";
import './Navbar.scss';
import '../i18n/config';
import { useTranslation } from 'react-i18next';
import {useState} from "react";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('en');
  const changeLanguage = () => {
    const currentLang = language === 'en' ? 'de': 'en';
    setLanguage(currentLang);
    i18n.changeLanguage(currentLang);
  }
  const [isLandingPage, setIsLandingPage] = useState(true);

  const displayLang = language === 'de' ? (<span><span className={'underlined'}>DE</span>/EN</span>) : (<span>DE/<span className={'underlined'}>EN</span></span>);
  const styling = isLandingPage ? 'navbar' : 'darkNavbar';
  const linkStyling = isLandingPage ? 'link' : 'darkLink';
  const homeIcon = isLandingPage ? '/Squid_Icon.png' : '/SquidIconWhite.png';
  const languageStyling = isLandingPage ? 'languageSwitch' : 'languageSwitchDark';
  const iconStyling = isLandingPage ? 'homeIconWrapper' : 'homeIconWrapperDark';
  const makeLight = () => {
    setIsLandingPage(true);
  };
  const makeDark = () => {
    setIsLandingPage(false);
  };
  return (
    <>
      <div className={styling}>
        <div className={'linkWrapper'}>
          <Link to={'/portfolio'} className={iconStyling} onClick={makeLight}><img src={homeIcon} className={'homeIcon'} alt={'Icon'}/></Link>
          <NavLink
            to={'/portfolio/aboutme'}
            className={({ isActive }) =>
              linkStyling + (isActive ? ' activeLink' : '')}
            onClick={makeDark}
          >{t('aboutMe')}</NavLink>
          <NavLink
            to={'/portfolio/games'}
            className={({ isActive }) =>
              linkStyling + (isActive ? ' activeLink' : '')}
            onClick={makeDark}
          >{t('gameDesign')}</NavLink>
          <NavLink
            to={'/portfolio/web'}
            className={({ isActive }) =>
              linkStyling + (isActive ? ' activeLink' : '')}
            onClick={makeDark}
          >{t('webDesign')}</NavLink>
          <NavLink
            to={'/portfolio/art'}
            className={({ isActive }) =>
              linkStyling + (isActive ? ' activeLink' : '')}
            onClick={makeDark}
          >{t('artProjects')}</NavLink>
        </div>
        <span className={languageStyling} onClick={changeLanguage}>{displayLang}</span>
      </div>
      <Outlet/>
    </>
  )
}