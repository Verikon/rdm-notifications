import '../style/index.scss';
import '../style/themed.scss';
import React, {Component} from 'react';
import {DynamicModuleLoader} from "redux-dynamic-modules";

import {getNotificationsModule} from './store';

import {Notification} from './Notification';

import {connect} from 'react-redux';

interface Props {
    dispatch?:any;
    notifications?: Array<any>;
    nextPos?:number;
    reduxKey?: string;
    clickExpire: boolean;
}

@(connect((state,props)=>{

    const reduxKey = props.reduxKey || 'notifications';

    return {
        notifications: state[reduxKey] ? state[reduxKey].current : [],
        nextPos: state[reduxKey] ? state[reduxKey].nextPos : 0
    };
}) as any)
export class Notifications extends Component<Props>{

    constructor( props ) {

        super(props);
    }

    render() {

        const reduxKey = this.props.reduxKey || 'notifications';

        return(
            <DynamicModuleLoader modules={[getNotificationsModule(reduxKey)]}>
                <div className="rdm-notifications">
                    {this.notifications()}
                </div>
            </DynamicModuleLoader>
        );
    }

    notifications() {

        const {notifications, dispatch, nextPos, clickExpire} = this.props;
        if(!notifications.length) return null;

        return notifications.map(notification => (
            <Notification
                {...notification}
                dispatch={dispatch}
                offset={nextPos}
                clickExpire={clickExpire}
                key={'rdm-notification-'+notification._id} />
        ));


    }
}
