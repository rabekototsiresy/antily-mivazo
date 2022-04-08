import React from 'react'
import SpanCustomize from '../../../components/spanCustomize';
import imageTopStyle from '../playlist.module.css';


function SearchPlaylist() {
  return (
    <div>
    <div className={` container-fluid ${imageTopStyle.imageTopPlaylist}`}>
      <div className="row d-flex h-100 align-items-center justify-content-center">
      <div className='col-md-6 d-flex flex-column justify-content-center'>
        <h3 className='text-center'>
          <b className={`px-5 py-4 primary-color ${imageTopStyle.ptext}`}>Hira sy fanentanana skoto</b>
        </h3>
        <p className='text-center'>
          <SpanCustomize text="Sambatra ny manome nohon'ny mandray"/>
        </p>
        
        <form className={imageTopStyle.formSearch}>
          <input className={imageTopStyle.inputSearch} />
          <button className={imageTopStyle.buttonSearch}>HITADY</button>
        </form>
      </div>
      </div>
    </div> 
    </div>
  )
}

export default SearchPlaylist