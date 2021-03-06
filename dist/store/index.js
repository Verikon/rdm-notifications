"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reducers_1 = require("./reducers");
const sagas_1 = require("./sagas");
function getNotificationsModule(key) {
    key = key || 'notifications';
    return {
        id: 'rdm-notifications',
        reducerMap: {
            [key]: reducers_1.NotificationsReducer
        },
        sagas: [sagas_1.NotificationsSaga]
    };
}
exports.getNotificationsModule = getNotificationsModule;
