import React, { useState } from 'react';
import {WebHeadline} from './Web';
import './BoulderApp.scss';
import '../i18n/config';
import { useTranslation } from 'react-i18next';
import {Document, Page, pdfjs} from 'react-pdf';
import DownloadIcon from "@mui/icons-material/Download";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export function BoulderApp() {
  const [expandDesign, setExpandDesign] = useState(true);
  const handleClick = () => {
    setExpandDesign(!expandDesign);
  }
  const contentStyling = expandDesign ? 'bar' : ' bar barClosed';
  const content = expandDesign ? <Content/>: '';
  return (
    <div className={'boulderApp'}>
      <ul className={contentStyling}>
        <li>
          <WebHeadline name={'Skill Crack'} onClick={handleClick}/>
          {content}
        </li>
        <li/>
      </ul>
    </div>
  )
}

export function Content() {
  const { t } = useTranslation();
  pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess(numPages: number) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset: number) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }
  return (
    <div className={'webWrapper'}>
      <div>
        <b>{t('groupProject')}</b>
        <p>{t('boulderAppDescription1')}</p>
        <p>{t('boulderAppDescription2')}</p>
        <p>{t('boulderAppDescription3')}</p>
        <p>{t('boulderAppDescription4')}</p>
        <div className={'documentWrapper'}>
          <button
            disabled={pageNumber <= 1}
            onClick={previousPage}
            className={'documentButton'}
          >
            <KeyboardArrowLeftIcon/>
          </button>
          <Document
            file={"/GMC_Gruppe_A.pdf"}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
            <button
              className={'documentButton'}
              disabled={pageNumber >= numPages}
              onClick={nextPage}
            >
              <KeyboardArrowRightIcon/>
            </button>
        </div>
        <div className={'downloadButton'}><a href={'/GMC_Gruppe_A.pdf'} download><DownloadIcon/>{t('downloadDoc')}</a></div>
      </div>
    </div>
  )
}

