import '../style/index.scss';

import React, {Component} from 'react';
import {DynamicModuleLoader} from "redux-dynamic-modules";

import {getNotificationsModule} from './store';

export class Notifications extends Component {

    constructor( props ) {

        super(props);
    }

    render() {

        return(
            <DynamicModuleLoader modules={[getNotificationsModule()]}>
                <div className="rdm-notifications">
                    <b>Imported</b>
                </div>
            </DynamicModuleLoader>
        );
    }
}