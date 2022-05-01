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
    const currentLang = language === 'en' ? 'de': 'en';
    setLanguage(currentLang);
    i18n.changeLanguage(currentLang);
  }

  const displayLang = language === 'de' ? (<span><span className={'underlined'}>DE</span>/EN</span>) : (<span>DE/<span className={'underlined'}>EN</span></span>);

  return (
    <>
      <div className={'navbar'}>
        <Link to={'/portfolio'} className={'homeIconWrapper'}><HomeIcon className={'homeIcon'}/></Link>
        <Link to={'/portfolio/aboutme'} className={'link'}>{t('aboutMe')}</Link>
        <Link to={'/portfolio/games'} className={'link'}>{t('gameDesign')}</Link>
        <Link to={'/portfolio/web'} className={'link'}>{t('webDesign')}</Link>
        <Link to={'/portfolio/art'} className={'link'}>{t('artProjects')}</Link>
        <span className={'languageSwitch'} onClick={changeLanguage}>{displayLang}</span>
      </div>
      <Outlet/>
    </>
  )
}