"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../style/index.scss");
require("../style/themed.scss");
const react_1 = __importStar(require("react"));
const redux_dynamic_modules_1 = require("redux-dynamic-modules");
const store_1 = require("./store");
const Notification_1 = require("./Notification");
const react_redux_1 = require("react-redux");
let Notifications = class Notifications extends react_1.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const reduxKey = this.props.reduxKey || 'notifications';
        return (react_1.default.createElement(redux_dynamic_modules_1.DynamicModuleLoader, { modules: [store_1.getNotificationsModule(reduxKey)] },
            react_1.default.createElement("div", { className: "rdm-notifications" }, this.notifications())));
    }
    notifications() {
        const { notifications, dispatch, nextPos } = this.props;
        if (!notifications.length)
            return null;
        return notifications.map(notification => (react_1.default.createElement(Notification_1.Notification, Object.assign({}, notification, { dispatch: dispatch, offset: nextPos, key: 'rdm-notification-' + notification._id }))));
    }
};
Notifications = __decorate([
    react_redux_1.connect((state, props) => {
        const reduxKey = props.reduxKey || 'notifications';
        return {
            notifications: state[reduxKey] ? state[reduxKey].current : [],
            nextPos: state[reduxKey] ? state[reduxKey].nextPos : 0
        };
    })
], Notifications);
exports.Notifications = Notifications;
