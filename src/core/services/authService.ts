import { http } from "./http"
import { ICredential } from "../../common/interfaces/ICredential"
import { IRegister } from "../../common/interfaces/IRegister"

export  const login = (loginPayload:ICredential)=>{
    return http.post('auth/login',loginPayload)
}

export const register = (registerPayload:IRegister)=>{
    return http.post('auth/register',registerPayload)
}