import {takeEvery, put, delay} from 'redux-saga/effects';

export function* NotificationsSaga( action ) {

    yield takeEvery('NOTIFICATIONS_NOTIFY', onNotify)
}

function* onNotify( action ) {

    const {_id} = action;
    yield delay(5000);
    yield put({type: 'NOTIFICATIONS_EXPIRE', _id});
}