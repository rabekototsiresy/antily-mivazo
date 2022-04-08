import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import '../a.css'
import djembe from '../../../../common/assets/images/djembe.jpg';
import { IoIosPlayCircle } from 'react-icons/io';
import Lyrics from '../../../components/lyrics';
import { togglePlayHover } from '../../../../core/redux';
import { StateI } from '../../../../common/interfaces/redux/StateI';
import { PropsItemPlaysitI } from '../../../../common/interfaces/props/PropsItemPlaysitI';
import playlistStyle from '../playlist.module.css';


function ItemPlaylist(props: PropsItemPlaysitI) {
    const dispatch = useDispatch();
    const showIconPlay = useSelector((state: StateI)=>state.global.showIconPlay);
    console.log(props.key);
  return (
    <div key={props.key} className={`item ps-3 pe-0 my-1 border-bottom ${playlistStyle.item}`}  onMouseLeave={()=>dispatch(togglePlayHover())} onMouseEnter={()=>dispatch(togglePlayHover())}>
        <div className={playlistStyle.itemPlay}>
            <IoIosPlayCircle  size={40} className='d-block d-sm-none d-md-none'/>
            <span className='d-none d-sm-block d-md-block'>
                {showIconPlay ? <IoIosPlayCircle  size={30}   /> : <b>1</b> }
            </span>
           
        </div>
        <div className='px-2 py-1'>
            <img src={djembe} alt="..." className=" img-fluid" width={50} />
        </div>
        <div className={`px-2 ${playlistStyle.itemTitle}`}>
            Le ciel est bleu
        </div>
        <div className={`d-none d-sm-block d-md-block ${playlistStyle.itemFiv}`}>
            103 eme Ankorondrano
        </div>
        <div className={`${playlistStyle.itemDuration}`}>
            03:10
        </div>
        <div className='px-2'>
            <Lyrics value={0} />
        </div>
    </div>
  )
}

export default ItemPlaylist;