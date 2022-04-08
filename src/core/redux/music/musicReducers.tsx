import { ADD_MUSIC } from './musicTypes';
import { Action } from '../../../common/interfaces/redux/ActionI';
import { MusicI } from '../../../common/interfaces/MusicI';
const initialState = {
    musicList: []
}

export const musicReducer = (state = initialState,action: Action)=>{
    switch (action.type) {
        case ADD_MUSIC:
            return {
                ...state,
                musicList: [{title: 'Ngoma'}]
            }
            break;
    
        default:
            return state;
            break;
    }

}