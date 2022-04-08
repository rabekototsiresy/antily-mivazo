import { ADD_MUSIC } from './musicTypes';
import { MusicI } from '../../../common/interfaces/MusicI';
import { Action } from '../../../common/interfaces/redux/ActionI';

export const addMusic = (music: MusicI): Action =>{
    return {
        type: ADD_MUSIC,
        payload: music
    }
}