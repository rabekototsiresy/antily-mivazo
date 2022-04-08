import React,{useState} from 'react'
import { IoIosNavigate,IoIosPlayCircle } from 'react-icons/io';
import homeStyles from '../home.module.css';
import imageFiv from '../../../../common/assets/images/camp.jpg';
import { Ifiv } from '../../../../common/utils/IFiv';
import SpanCustomize from '../../../components/spanCustomize';
import { NavLink } from 'react-router-dom';
function TopMusic() {
    const [fivList, setFivList] = useState<Ifiv[]>([])
    const [test, setTest] = useState<Number[]>([1,2,3]);

  return (
    <div className='row mt-4 d-flex flex-column align-items-center '>
        
        {/* LISTE DES TOP MUSIC */}
            
            <div className="col-md-8  mt-sm-0 mt-md-0 mt-5 flex-column align-items-center">
                <div className='d-flex align-items-center flex-column'>
                    <h3>
                        <b className='primary-color'>
                            Ireo hira sy fanentana be mpijery
                        </b>
                    </h3>
                    <p>
                        <SpanCustomize text="Hira maro isankarazany" />
                    </p>
                </div>
                <div className='d-flex flex-column '>

                    {
                        test.map(t=>(
                            <div className='d-flex justify-content-between align-items-center my-2 border-bottom'>
                                <div className='d-flex align-items-center'>
                                    <div>
                                        <img  src={imageFiv} alt="" width={100} />
                                    </div>
                                    <div className='d-flex flex-column px-2'>
                                        <span>Lohateny: Nivo</span>
                                        <span>12:36</span>
                                    </div>
                                </div>
                                <div>
                                   
                                </div>
                                <div>
                                    <IoIosPlayCircle  size={35}/>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        
    </div>
  )
}

export default TopMusic