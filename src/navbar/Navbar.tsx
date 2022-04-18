import * as React from 'react';
import {Link, Outlet} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import './Navbar.scss';

export function Navbar() {
  return(
    <>
      <div className={'navbar'}>
        <Link to={'/portfolio'} className={'homeIconWrapper'}><HomeIcon className={'homeIcon'}/></Link>
        <Link to={'/portfolio/aboutme'} className={'link'}>About me</Link>
        <Link to={'/portfolio/games'} className={'link'}>Game Design</Link>
        <Link to={'/portfolio/web'} className={'link'}>Web Design</Link>
        <Link to={'/portfolio/art'} className={'link'}>Art Projects</Link>
        <span className={'languageSwitch'}>DE/EN</span>
      </div>
      <Outlet/>
    </>
  )
}