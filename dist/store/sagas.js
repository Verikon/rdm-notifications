"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
function* NotificationsSaga(action) {
    yield effects_1.takeEvery('NOTIFICATIONS_NOTIFY', onNotify);
}
exports.NotificationsSaga = NotificationsSaga;
function* onNotify(action) {
    const { _id, duration, clickExpire } = action;
    if (!clickExpire) {
        yield effects_1.delay(duration);
        yield effects_1.put({ type: 'NOTIFICATIONS_EXPIRE', _id });
    }
}
