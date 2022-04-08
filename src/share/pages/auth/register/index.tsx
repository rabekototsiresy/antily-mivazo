/* eslint-disable jsx-a11y/alt-text */
import React,{ SyntheticEvent, useState } from 'react'
import { Link } from 'react-router-dom';
import lys from '../../../../common/assets/images/fleur_de_lys.jpeg';
import NAvbar from '../../../components/navbar';
import Select from 'react-select'
import { useQueryDioGET } from '../../../../common/hooks/useQueryDio';
import { IResponse } from '../../../../common/interfaces/IResponse';
import { IRQResponse } from '../../../../common/interfaces/IRQResponse';
import { IDiosezy } from '../../../../common/interfaces/IDiosezy';
import Loader from '../../../components/loader';
import CreatableSelect from 'react-select/creatable';
import { IFaritra } from '../../../../common/interfaces/IFaritra';
import { useMutationAuthRegisterPOST } from '../../../../common/hooks/useMutationAuth';
import { useAlert } from 'react-alert';
import { useNavigate } from 'react-router-dom';

function Register() {
  const dataRegister: any = {
    fiv_name: '',
    fiv_rang: '',
    password: ''
  }
  const [diosezy, setDiosezy] = useState<IDiosezy[]>([]);
  const [dioPayload,setDioPayload] = useState(dataRegister);
  const [faritraList, setFaritraList] = useState<IFaritra[]>([]);
  const  { isLoading,isFetching }= useQueryDioGET((data:IDiosezy[])=>{
    setDiosezy(data)
  },(data:IRQResponse)=>{
    const dioList = data.data.data as [];
    return dioList.map((dio:IDiosezy)=>{
      return {
        ...dio,
        label: dio.name,
        value: dio.id
      }
    })
    }
  );
  const { mutate,isLoading: isLoadRegister } = useMutationAuthRegisterPOST();
  const alert = useAlert();
  const navigate = useNavigate();

  const handleInput = (e:any)=>{
    setDioPayload((prev)=>{
      return {
        ...prev,
        [e.target?.id]: e.target.value
      }
    })
  }
  const handleFaritra = (option:any)=>{
    setDioPayload((prev)=>{
      return {
        ...prev,
        faritra: option.label
      }
    })

  }
  const handleDiosezy = (option:any)=>{
    console.log(option);
    const dioWithFaitra = diosezy.filter((dio:IDiosezy)=>dio.id === option.id) as IDiosezy[];
    console.log(dioWithFaitra);
    if(dioWithFaitra.length){
      setFaritraList(dioWithFaitra[0].faritras.map((faritra:IFaritra)=>{
        return {
          ...faritra,
          label: faritra.name,
          value: faritra.id
        }
      }))

    }
    setDioPayload((prev)=>{
      return {
        ...prev,
        id_diosezy: parseInt(option.value)
      }
    })
    console.log(dioPayload,'test');
  }

  const submitRegister = (e:SyntheticEvent)=>{
    e.preventDefault();
    mutate(dioPayload,{
      onSuccess: (data)=>{
        console.log(data.data);
        if(data.data.success){
          alert.success(data.data.message);
          navigate('/login');
        }else{
          alert.error(data.data.message);
        }

        
      }
    })

    console.log(dioPayload);
  }

  return (
    <div>
      <Loader enabled={isLoading || isFetching} />
      <Loader enabled={isLoadRegister} />

    <div className='w-100 bg-white'>
        <NAvbar toggleSidebar={()=>{}}/>
    </div>
    <div className="d-flex justify-content-center align-items-center bg-purple position-absolute w-100  ">
    <div className="card mt-3 d-flex p-3">
        <Link to='/' className='d-flex justify-content-center'>
            <img id="profile-img" className="profile-img-card " width={100} src={lys} />
        </Link>
        <hr />
        <p id="profile-name" className="profile-name-card"></p>
        <form className="form-signin" onSubmit={submitRegister}>
          <div className="row">
          <div className="mb-3 col-md-6">
            <label htmlFor="exampleInputEmail1" className="form-label">Diosezy:</label>
            <Select 
              placeholder="Diosezy" 
              options={diosezy} 
              onChange={handleDiosezy}
              id="diosezy"
            />

            <div className="form-text">Diosezy misy an'ialahy.</div>
          </div>
          
          <div className="mb-3 col-md-6">
            <label htmlFor="faritra" className="form-label">Faritra:</label>
            {/* <input type="text" className="form-control" id="faritra" aria-describedby="fatitra" /> */}
            <CreatableSelect
              onChange={handleFaritra}
              options={faritraList}
            />  
            <div  className="form-text">Faritra misy an'ialahy</div>
          </div>
          </div>
          <div className="row">
            <div className="mb-3 col-md-6">
              <label htmlFor="fivondronana" className="form-label">Fivondronana:</label>
              <input 
                type="text" 
                className="form-control" 
                id="fiv_name" 
                aria-describedby="fivondronana" 
                onChange={handleInput}
                required
              />
              <div  className="form-text">Fivondronana misy an'ialahy.</div>
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="numero" className="form-label">Faha:</label>
              <input 
                type="number" 
                min="1" className="form-control" 
                id="fiv_rang" 
                aria-describedby="numero" 
                onChange={handleInput}
                required
              />
              <div  className="form-text">Fivondronana laharana faha: 72 (oh).</div>
            </div>

          </div>
          <div className="row  d-flex justify-content-center align-items-center">
          <div className="mb-3 col-md-6">
                <label htmlFor="password" className="form-label">Anarana tokana:</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="access_name" 
                  aria-describedby="access_name"
                  onChange={handleInput} 
                  required
                />
                <div  className="form-text">Anarana tokana(oh:ivato73)</div>
            </div>
            <div className="mb-3 col-md-6 ">
                <label htmlFor="password" className="form-label">Teny miafina:</label>
                <input 
                  type="password" 
                  className="form-control" 
                  id="password" 
                  aria-describedby="password"
                  onChange={handleInput} 
                  required
                />
                <div  className="form-text">Teny miafina.</div>
            </div>
            
          </div>
          <div className='d-flex justify-content-between align-items-center'>
              <Link to='/login'>hiditra</Link>
              <button className="btn btn-primary btn-block btn-signin" type="submit">HANOKATRA KAONTY</button>

          </div>
        </form>
        
    </div>
</div>
</div>
  )
}

export default Register