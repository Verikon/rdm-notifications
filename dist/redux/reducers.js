"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const immer_1 = require("immer");
const initialState = {
    notifications: []
};
function NotificationsReducer(state, action) {
    if (state === undefined)
        return initialState;
    return immer_1.produce(state, draft => {
        switch (action.type) {
            case 'NOTIFICATIONS_NOTIFY':
                const { title, message, level } = action;
                const _id = new Date().getTime() + Math.random() * 10000;
                state.notifications.push({ title, message, level, _id });
        }
    });
}
exports.NotificationsReducer = NotificationsReducer;
