import { StateFivI } from './StateFivI';
import { SatateMusicI } from './StateMusicI';
import { StateGlobalI } from './StateGlobal';

export interface StateI{
    fiv: StateFivI;
    music: SatateMusicI;
    global: StateGlobalI;
}