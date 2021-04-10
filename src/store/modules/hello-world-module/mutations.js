import * as mns from '../../mutation-types';

export default {
    [mns.INCREMENT](state){
        state.count++;
    }
}