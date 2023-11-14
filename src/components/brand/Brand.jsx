import React from 'react'
import './brand.css';
import { google, slack, dropbox, shopify, atlassian } from './imports';

export default function Brand() {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} alt="google logo" />
      </div>
      <div>
        <img src={slack} alt="slack logo" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox logo" />
      </div>
      <div>
        <img src={shopify} alt="shopify logo" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian logo" />
      </div>
    </div>
  )
}
