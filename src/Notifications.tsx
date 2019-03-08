import '../style/index.scss';

import React, {Component} from 'react';
import {DynamicModuleLoader} from "redux-dynamic-modules";

import {getNotificationsModule} from './store';

import {Notification} from './Notification';

import {connect} from 'react-redux';

interface Props {
    dispatch?:any
    notifications?: Array<any>
}

@(connect(state=>{

    return {
        notifications: state.notifications ? state.notifications.current : []
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

        const {notifications} = this.props;
        if(!notifications.length) return null;

        return notifications.map((notification,i)=> <Notification {...notification} />);


    }
}
