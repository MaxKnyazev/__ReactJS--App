import React from 'react';
import './IPAddress.css'

function IPAddress ({ip, city, country, loc, org, postal, timezone}) {
    return (
      <>
        <div>IP address :</div>
        <div className='colorInfo'>{ip}</div>
        <div>Timezone :</div>
        <div className='colorInfo'>{timezone}</div>
        <div>Country :</div>
        <div className='colorInfo'>{country}</div>
        <div>Postal :</div>
        <div className='colorInfo'>{postal}</div>
        <div>City :</div>
        <div className='colorInfo'>{city}</div>
        <div>Location :</div>
        <div className='colorInfo'>{loc}</div>
        <div>Organization :</div>
        <div className='colorInfo'>{org}</div>
      </>
    );
}
export default IPAddress;
