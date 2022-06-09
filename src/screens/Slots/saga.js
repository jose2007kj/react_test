import { put, takeLatest } from 'redux-saga/effects';
import { timeSlot } from '../../api/timeSlot';

function* slotFetch() {
    try {
        const response = yield (timeSlot());
        yield put({ type: "SLOT_SUCCESS", response });
    } catch (error) {
        yield put({ type: "SLOT_FAILURE", error: error.message });
    }
}

export default function* slotScreenSaga() {
    yield takeLatest("SLOT_REQUEST", slotFetch);
}
