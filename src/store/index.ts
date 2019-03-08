
import {NotificationsReducer} from './reducers';
import {NotificationsSaga} from './sagas';

export function getNotificationsModule() {

    return {
        id: 'notifications',
        reducerMap: {
            NotificationsReducer
        },
        sagas:[NotificationsSaga]
    }
}