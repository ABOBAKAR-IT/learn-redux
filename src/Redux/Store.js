import {createStore} from 'redux';
const initialState={
    count:0,
    count1:1,
    count2:2
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD':
          return {...state,count:state.count+1}
           
        case 'SUBTRACT':
           return {...state,count:state.count-1}
           case 'ADD1':
            return {...state,count1:state.count1+1}
             
          case 'SUBTRACT1':
             return {...state,count1:state.count1-1}
             case 'ADD2':
                return {...state,count2:state.count2+1}
                 
              case 'SUBTRACT2':
                 return {...state,count2:state.count2-1}
                  
        default:
               return state;
    }   
    
}
export const store=createStore(reducer)