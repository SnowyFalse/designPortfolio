import * as React from 'react';
import './Facts.scss'
import EmailIcon from '@mui/icons-material/Email';
import '../i18n/config';
import { useTranslation } from 'react-i18next';
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export function Facts() {
  const { t } = useTranslation();
  return (
    <div>
      <div className={'title'}>Facts
      </div>
      <div className={'factsWrapper'}>
        <div>
          <FactWrapper headline={t('name')} content={'Theresa Dietinger, BSc'} showLinkedIn={true}/>
          <FactWrapper headline={t('address')} content={'Jochen-Rindt-Weg 2/3, 8074 Raaba'}/>
          <FactWrapper headline={t('phone')} content={'0699 13115276'}/>
          <EmailWrapper/>
          <FactWrapper headline={t('date')} content={'31.07.2000'}/>
        </div>
        <img src={require('../images/Avatar.png')} width={'200'} alt={'Avatar'}/>
      </div>
    </div>
  )
}

export function FactWrapper({headline, content, showLinkedIn}: {headline: string, content: string, showLinkedIn?: boolean}) {
  const displayLinkedIn =  showLinkedIn ?
  <a href={'https://www.linkedin.com/in/theresa-dietinger-b0546b21a/'} className={'iconWrapper'}><LinkedInIcon/></a> : '';

  return (
    <div className={'contentWrapper'}>
      <div className={'headline'}>{headline}</div>
      <div className={'content'}>{content}{displayLinkedIn}</div>

    </div>
  )
}

export function EmailWrapper() {
  return (
    <div className={'contentWrapper'}>
      <div className={'headline'}>E-Mail</div>
      <div className={'content'}>
        <a href= "mailto:theresa.dietinger@gmail.com">
          theresa.dietinger@gmail.com
          <span className={'iconWrapper'}>
            <EmailIcon/>
          </span>
        </a>
      </div>
    </div>
  )
}
