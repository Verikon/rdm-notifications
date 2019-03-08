"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const immer_1 = require("immer");
const initialState = {
    current: []
};
function NotificationsReducer(state, action) {
    if (state === undefined)
        return initialState;
    return immer_1.produce(state, draft => {
        switch (action.type) {
            case 'NOTIFICATIONS_NOTIFY':
                const { title, message, level } = action;
                const _id = action._id = parseInt(new Date().getTime() + (Math.random() * 10000).toString(), 10);
                draft.current.push({ title, message, level, _id });
                break;
            case 'NOTIFICATIONS_EXPIRING':
                break;
            case 'NOTIFICATIONS_EXPIRE':
                draft.current = draft.current.filter(notification => notification._id !== action._id);
                break;
        }
    });
}
exports.NotificationsReducer = NotificationsReducer;
