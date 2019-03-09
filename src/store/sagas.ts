import {takeEvery, put, delay} from 'redux-saga/effects';

export function* NotificationsSaga( action ) {

    yield takeEvery('NOTIFICATIONS_NOTIFY', onNotify)
}

function* onNotify( action ) {

    const {_id, duration, clickExpire} = action;

    if( !clickExpire ) {

        yield delay(duration);
        yield put({type: 'NOTIFICATIONS_EXPIRE', _id});
    }
}