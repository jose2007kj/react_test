import {combineReducers} from 'redux';
const initialState = {
    loading : false,
    user : null,
    error : null,
    slot: null
} 

const AuthReducer = (state = initialState, action) => {
 switch (action.type) {
    case 'LOGIN_REQUEST':
     return {
       ...state,
       loading: true,
     };

   case 'LOGIN_SUCCESS':
     return {
       ...state,
       user: action.response,
       loading: false,
     };

   case 'LOGIN_FAILURE':
     return {
       ...state,
       error: action.error,
       loading: false,
     };

   default:
     return state;
 }
};

const SlotReducer = (state = initialState, action) => {
 switch (action.type) {
   case 'SLOT_REQUEST':
     return {
       ...state,
       loading: true,
     };

   case 'SLOT_SUCCESS':
     return {
       ...state,
       slot: action.response,
       loading: false,
     };

   case 'SLOT_FAILURE':
     return {
       ...state,
       error: action.error,
       loading: false,
     };

   default:
     return state;
 }
};

export const combinedReducers = combineReducers({
 Auth: AuthReducer,
 Slot: SlotReducer
});
