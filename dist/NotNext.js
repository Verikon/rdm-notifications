"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../style/NotNext.scss");
const react_1 = __importStar(require("react"));
const redux_dynamic_modules_1 = require("redux-dynamic-modules");
const store_1 = require("./store");
const react_redux_1 = require("react-redux");
const defaultProps = {
    reduxKey: "notifications",
    x: "bottom",
    y: "right",
    clickExpire: false,
    duration: 8000
};
function Notifications(props) {
    props = Object.assign(defaultProps, props);
    const state = react_redux_1.useSelector(store => store[props.reduxKey]);
    const notifications = state ? state.current : [];
    const ypos = () => { return { justifyContent: (props.x === "left" ? "flex-start" : "flex-end") }; };
    const xpos = () => { return { alignItems: (props.y === "top" ? "flex-start" : "flex-end") }; };
    return (react_1.default.createElement(redux_dynamic_modules_1.DynamicModuleLoader, { modules: [store_1.getNotificationsModule(props.reduxKey)] },
        react_1.default.createElement("div", { className: "rdm-notifications", style: Object.assign(xpos(), ypos(), {}) },
            react_1.default.createElement("div", { className: "flexbox" }, notifications.map((nprops, i) => react_1.default.createElement(Notification, Object.assign({}, nprops, props, { _num: i, _cnt: notifications.length, key: `not-${i}` })))))));
}
exports.Notifications = Notifications;
function Notification(props) {
    const [visible, setVisible] = react_1.useState(false);
    const dispatch = react_redux_1.useDispatch();
    const classes = () => [
        'Notification',
        (props.messageType.toLowerCase() || 'info'),
        (visible ? 'visible' : 'hidden')
    ].join(' ');
    const onClose = () => dispatch({ type: 'NOTIFICATIONS_EXPIRE', _id: props._id });
    react_1.useEffect(() => {
        setVisible(true);
    });
    return (react_1.default.createElement("div", { className: classes() },
        react_1.default.createElement("span", { className: "title" }, props.title),
        react_1.default.createElement("span", { className: "message" }, props.message),
        react_1.default.createElement("div", { className: "expire", onClick: onClose },
            react_1.default.createElement("svg", { className: "j2dfb39 j190jqgp", focusable: "false", viewBox: "0 0 24 24", "aria-hidden": "true", role: "presentation" },
                react_1.default.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })))));
}
