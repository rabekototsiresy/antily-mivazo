import React from 'react'
import Carousel from "react-multi-carousel";
import SpanCustomize from '../../../components/spanCustomize';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
function CarousselMusic() {
  return (
    <div className='mt-4'>
        <div className='d-flex align-items-center flex-column'>
            <h3>
                <b className='primary-color'>
                    Ireo fivondronana
                </b>
            </h3>
            <p>
              <SpanCustomize text="Fivondronana samihafa avy amin'ny diosezy maromaro" />
            </p>
        </div>
        <div>
        <Carousel responsive={responsive}>
            <div className="d-flex flex-column mx-2">
            <img src="https://fakeimg.pl/250x200/" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi harum exercitationem beatae.</p>
            </div>
            <div className="d-flex flex-column mx-2">
            <img src="https://fakeimg.pl/250x200/" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi harum exercitationem beatae.</p>
            </div>
            
            <div className="d-flex flex-column mx-2">
            <img src="https://fakeimg.pl/250x200/" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi harum exercitationem beatae.</p>
            </div>
            
            <div className="d-flex flex-column mx-2">
            <img src="https://fakeimg.pl/250x200/" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi harum exercitationem beatae.</p>
            </div>  
        </Carousel>
        </div>
    </div>
  )
}

export default CarousselMusic