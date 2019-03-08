"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
function* NotificationsSaga(action) {
    yield effects_1.takeEvery('NOTIFICATIONS_NOTIFY', onNotify);
}
exports.NotificationsSaga = NotificationsSaga;
function* onNotify(action) {
    const { _id } = action;
    yield effects_1.delay(5000);
    yield effects_1.put({ type: 'NOTIFICATIONS_EXPIRE', _id });
}
