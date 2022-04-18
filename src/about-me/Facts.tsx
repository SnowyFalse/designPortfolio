import * as React from 'react';
import './Facts.scss'
import EmailIcon from '@mui/icons-material/Email';

export function Facts() {
  return (
    <div>
      <div className={'title'}>Facts</div>
      <div className={'factsWrapper'}>
        <div>
          <FactWrapper headline={'Name'} content={'Theresa Dietinger, BSc'}/>
          <FactWrapper headline={'Adresse'} content={'Jochen-Rindt-Weg 2/3, 8074 Raaba'}/>
          <FactWrapper headline={'Telefon'} content={'0699 13115276'}/>
          <EmailWrapper/>
          <FactWrapper headline={'Geburtsdatum'} content={'31.07.2000'}/>
        </div>
        <img src={require('../images/Avatar.png')} width={'200'} alt={'Avatar'} className={'images'}/>
      </div>

    </div>
  )
}

export function FactWrapper({headline, content}: {headline: string, content: string}) {
  return (
    <div className={'contentWrapper'}>
      <div className={'headline'}>{headline}</div>
      <div className={'content'}>{content}</div>
    </div>
  )
}

export function EmailWrapper() {
  return (
    <div className={'contentWrapper'}>
      <div className={'headline'}>E-Mail</div>
      <div className={'content'}>
        <a href= "mailto:theresa.dietinger@gmail.com">theresa.dietinger@gmail.com</a>
        <span className={'iconWrapper'}>
            <EmailIcon/>
          </span>
      </div>
    </div>
  )
}
