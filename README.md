Notifications:
Props:
 title <string> : a title for the notification
 message <string> : the message for this notification
 type <string> : a semantic type of message, provided are: "info", "warning", "error", "success" (default info)
 duration <integer> : the duration the message should appear for in milliseconds (default 5000ms)
 clickExpire <boolean> : the user is required to click the notification off
 

 ```
    this.props.dispatch({type: 'NOTIFICATIONS_NOTIFY', ...props});
 ```