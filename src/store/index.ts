
import {NotificationsReducer} from './reducers';
import {NotificationsSaga} from './sagas';

export function getNotificationsModule( key?:string ) {

    key = key || 'notifications';

    return {
        id: 'rdm-notifications',
        reducerMap: {
            [key]: NotificationsReducer
        },
        sagas:[NotificationsSaga]
    }
}