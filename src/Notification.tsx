import React, {Component} from 'react';
import {INotification} from './types';

import {outerHeight} from './util';

export class Notification extends Component<INotification> {

    _ref: any;

    componentDidMount() {

        const {_id} = this.props;
        const {offsetTop} = this._ref;
        const offsetHeight = outerHeight(this._ref);
        this.props.dispatch({type:'NOTIFICATIONS_APPLY_DOM', offsetTop, offsetHeight, _id});
    }

    render() {

        const {title, message} = this.props;

        return(
            <div className={this.classes()} style={this.style()} onClick={this.onExpire} ref={el=>this._ref = el}>
                <div className="icon" />
                <span className="title">{title}</span>
                <span className="message">{message}</span>
                <div className="expire">
                    <svg className="j2dfb39 j190jqgp" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                </div>
            </div>
        )
    }

    classes() {

        let {messageType, clickExpire} = this.props;

        const cls = ['notification', messageType];
        if(clickExpire) cls.push('expire-click');
        return cls.join(' ');
    }

    style() {

        let {top, offset} = this.props;
        const pos = top === undefined ? offset : top;

        return {top: `${pos}px`};
    }

    onExpire = (evt:React.MouseEvent) => this.props.dispatch({type: 'NOTIFICATIONS_EXPIRE', _id: this.props._id});

}