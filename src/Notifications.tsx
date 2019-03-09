import '../style/index.scss';
import '../style/themed.scss';
import React, {Component} from 'react';
import {DynamicModuleLoader} from "redux-dynamic-modules";

import {getNotificationsModule} from './store';

import {Notification} from './Notification';

import {connect} from 'react-redux';

interface Props {
    dispatch?:any
    notifications?: Array<any>
    nextPos?:number,
}

@(connect(state=>{

    return {
        notifications: state.notifications ? state.notifications.current : [],
        nextPos: state.notifications ? state.notifications.nextPos : 0
    };
}) as any)
export class Notifications extends Component<Props>{

    constructor( props ) {

        super(props);
    }

    render() {

        return(
            <DynamicModuleLoader modules={[getNotificationsModule()]}>
                <div className="rdm-notifications">
                    {this.notifications()}
                </div>
            </DynamicModuleLoader>
        );
    }

    notifications() {

        const {notifications, dispatch, nextPos} = this.props;
        if(!notifications.length) return null;

        return notifications.map(notification => (
            <Notification
                {...notification}
                dispatch={dispatch}
                offset={nextPos}
                key={'rdm-notification-'+notification._id} />
        ));


    }
}
