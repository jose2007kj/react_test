import {all} from 'redux-saga/effects';
import loginScreenSaga from '../screens/Login/saga';
import slotScreenSaga from '../screens/Slots/saga';
function* rootSaga() {
 yield all([loginScreenSaga(), slotScreenSaga()]);
}
 
export default rootSaga;
