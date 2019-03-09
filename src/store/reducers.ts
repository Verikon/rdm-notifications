import {produce} from 'immer';

const initialState = {
    current: [],
    nextPos: 0
}

export function NotificationsReducer( state, action ) {

    if(state === undefined) return initialState;

    return produce(state, draft => {

        switch(action.type) {

            case 'NOTIFICATIONS_NOTIFY':
                action.messageType = action.messageType || 'info';
                action.duration = action.duration === undefined ? 5000 : action.duration;
                action._id = parseInt(new Date().getTime()+(Math.random()*10000).toString(),10);
                
                draft.current.push(action);
                break;

            case 'NOTIFICATIONS_EXPIRING':
                break;

            case 'NOTIFICATIONS_EXPIRE':

                let found = false;
                let subjectheight:number;

                draft.current = draft.current.reduce((c:Array<any>, notification)=> {

                    const subject = notification._id === action._id;

                    if(!subject && !found) return c.concat([notification]);

                    if(subject){
                        subjectheight = notification.height;
                        found = true;
                        return c;
                    }

                    notification.top = notification.top - subjectheight;

                    return c.concat([notification]);

                }, []);

                draft.nextPos = draft.nextPos - subjectheight;
                break;

            case 'NOTIFICATIONS_APPLY_DOM':
                const {offsetTop, offsetHeight} = action;
                draft.current = draft.current.map(notification=> {
                    if(notification._id !== action._id) return notification;
                    notification.top = offsetTop;
                    notification.height = offsetHeight;
                    return notification;
                })
                draft.nextPos = draft.nextPos + offsetHeight;
                break;
        }

    });

}