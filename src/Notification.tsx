import React, {Component} from 'react';
import {INotification} from './types';

export class Notification extends Component<INotification> {

    render() {

        const {title, message, level} = this.props;

        return(
            <div className={this.classes()}>
                <span className="title">{title}</span>
                <span className="message">{message}</span>
            </div>
        )
    }

    classes() {

        let {level} = this.props;
        level = level || 'info';

        return ['notification', level].join(' ');
    }
}