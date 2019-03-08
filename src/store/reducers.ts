import {produce} from 'immer';

const initialState = {
    notifications: []
}

export function NotificationsReducer( state, action ) {

    if(state === undefined) return initialState;

    return produce(state, draft => {

        switch(action.type) {

            case 'NOTIFICATIONS_NOTIFY':

                const {title, message, level} = action;
                const _id = new Date().getTime()+Math.random()*10000;

                state.notifications.push({title,message,level,_id});

        }

    });

}