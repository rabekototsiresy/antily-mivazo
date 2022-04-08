import React from 'react'
import { SpinnerDotted	 } from 'spinners-react';
import { PropsLoader } from '../../../common/interfaces/props/ProspLoader';


function Loader(props: PropsLoader) {
  return (
    <div className='loader' hidden={!props.enabled}>
        <SpinnerDotted	color='#fff' enabled={props.enabled} />
    </div>
  )
}

export default Loader