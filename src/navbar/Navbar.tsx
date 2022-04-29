import * as React from 'react';
import {Link, Outlet} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import './Navbar.scss';
import '../i18n/config';
import { useTranslation } from 'react-i18next';
import {useState} from "react";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('en');
  const changeLanguage = () => {
    setLanguage(language === 'en' ? 'de': 'en');
    console.log('language switch');
    i18n.changeLanguage(language);
  }

  const displayLang = language === 'en' ? (<span><span className={'underlined'}>DE</span>/EN</span>) : (<span>DE/<span className={'underlined'}>EN</span></span>);

  return(
    <>
      <div className={'navbar'}>
        <Link to={'/portfolio'} className={'homeIconWrapper'}><HomeIcon className={'homeIcon'}/></Link>
        <Link to={'/portfolio/aboutme'} className={'link'}>{t('aboutMe')}</Link>
        <Link to={'/portfolio/games'} className={'link'}>Game Design</Link>
        <Link to={'/portfolio/web'} className={'link'}>Web Design</Link>
        <Link to={'/portfolio/art'} className={'link'}>Art Projects</Link>
        <span className={'languageSwitch'} onClick={changeLanguage}>{displayLang}</span>
      </div>
      <Outlet/>
    </>
  )
}