import React,{ useState  } from 'react'
import NAvbar from '../../components/navbar'
import ImageTop from '../home/components/ImageTop'
import SearchPlaylist from './components/searchPlaylist'
import PlayerBottom from '../../components/playerBottm'
import playlisstStyle from './playlist.module.css';
import SideBarPlaylist from '../../components/sideBarPlaylist'
import ItemPlaylist from './components/ItemPlaylist';


function Playlist() {
  const [test, setTest] = useState<Number[]>([1,2,3,4,5]);
  return (
    <div>
        <NAvbar toggleSidebar={()=>{}}/>
        <SearchPlaylist />
        <div className="container">
          <div className="row">
          <SideBarPlaylist />
          <div className={`col-md-10 ${playlisstStyle.contentPlaylist} px-3 px-sm-0 px-md-0`}>
            
                  {
                    test.map(t=><ItemPlaylist key={Number(t)} />)
                    // test.map(t=><ItemPlaylist key={String(t)} value={Number(t)} />)
                  }
             
          </div>
          </div>
        </div>
        <PlayerBottom />
    </div>
  )
}

export default Playlist