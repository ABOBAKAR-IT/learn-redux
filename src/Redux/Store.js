import {createStore} from 'redux';

const reducer=(state=0,action)=>{
    switch(action.type){
        case 'ADD':
            state=state+1;
            break;
        case 'SUBTRACT':
            state=state-1;
            break;
        default:
                state=state;
                break
    }   
    return state;
}
export const store=createStore(reducer)