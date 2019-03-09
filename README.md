Notifications module for "redux dyanmic modules" enabled projects.

Provided is:
 - Component Notifications which will absolutely position a notifications panel and accept actions to display.

Props:
 - reduxKey <string> - the root key for this component in the redux store, default 'notifications'.

## Actions
### NOTIFICATIONS_NOTIFY
#### Props
- __title__ <strimg> : a title for this notification.
- __message__ <string> : the notification message.
- __messageType__ <string> : an arbituary type for this message, types are "success", "error", "warning", "info", default "info".
- __duration__ <integer> : the length of time to display this notification in milliseconds, default 5000.
- __clickExpire__ <boolean> : user is required to click the notification to expire it, default false.
#### Usage
```
import React from 'react';
import {connect} from 'react-redux';

@connect()
class Example extends React.Component {

  render() {
    return <div onClick={this.onNotify}><span>Click Me to Notify</span></div>
  }
  
  onNotify = evt => this.props.dispatch({
    type: 'NOTIFICATIONS_NOTIFY',
    title: 'Demo',
    message: 'This is a notification',
    messageType: 'success',
    clickExpire: true
  })
}
```
