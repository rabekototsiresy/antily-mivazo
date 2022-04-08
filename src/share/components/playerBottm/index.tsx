import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import ItemPlay from '../../pages/playlist/components/itemPlay';

import './player.css'

function PlayerBottom() {
  return (
    <div className='player-bottom row  d-sm-block d-md-block d-lg-block ps-5 px-sm-0 ps-md-0'>
        <ItemPlay value={0} />
    </div>
  )
}

export default PlayerBottom