import '../style/NotNext.scss';

import React, {useEffect, useState} from 'react';

import {DynamicModuleLoader} from "redux-dynamic-modules";
import {getNotificationsModule} from './store';
import {useSelector, useDispatch} from 'react-redux';

interface NotificationsProps {
    reduxKey: string;
    x: string;
    y: string;
    clickExpire: boolean;
    duration: number;
}

const defaultProps:NotificationsProps = {
    reduxKey: "notifications",
    x: "bottom",
    y: "right",
    clickExpire: false,
    duration: 8000
}

export function Notifications( props:NotificationsProps ) {
    
    props = Object.assign(defaultProps, props);

    const state = useSelector(store=> store[props.reduxKey]);

    const notifications =  state ? state.current : [];

    const ypos = () => { return { justifyContent: (props.x === "left" ? "flex-start" : "flex-end") } };
    const xpos = () => { return { alignItems: (props.y === "top" ? "flex-start" : "flex-end") } };

    return (
        <DynamicModuleLoader modules={[getNotificationsModule(props.reduxKey)]}>
            <div className="rdm-notifications" style={Object.assign(xpos(), ypos(), {})}>
                <div className="flexbox">
                {
                    notifications.map((nprops,i)=> <Notification {...nprops} {...props} _num={i} _cnt={notifications.length} key={`not-${i}`}/>)
                }
                </div>
            </div>
        </DynamicModuleLoader>
    )
}

function Notification( props ) {

    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();

    const classes = () => [
        'Notification',
        (props.messageType.toLowerCase()||'info'),
        (visible ? 'visible' : 'hidden')
    ].join(' ');

    const onClose = () => dispatch({type: 'NOTIFICATIONS_EXPIRE', _id: props._id});

    useEffect(() => {
        setVisible(true);
    });

    return (
        <div className={classes()}>
            <span className="title">{props.title}</span>
            <span className="message">{props.message}</span>
            <div className="expire" onClick={onClose}>
                <svg className="j2dfb39 j190jqgp" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
            </div>
        </div>
    );

}