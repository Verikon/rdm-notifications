"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const util_1 = require("./util");
class Notification extends react_1.Component {
    constructor() {
        super(...arguments);
        this.onExpire = (evt) => this.props.dispatch({ type: 'NOTIFICATIONS_EXPIRE', _id: this.props._id });
    }
    componentDidMount() {
        const { _id } = this.props;
        const { offsetTop } = this._ref;
        const offsetHeight = util_1.outerHeight(this._ref);
        this.props.dispatch({ type: 'NOTIFICATIONS_APPLY_DOM', offsetTop, offsetHeight, _id });
    }
    render() {
        const { title, message } = this.props;
        return (react_1.default.createElement("div", { className: this.classes(), style: this.style(), onClick: this.onExpire, ref: el => this._ref = el },
            react_1.default.createElement("div", { className: "icon" }),
            react_1.default.createElement("span", { className: "title" }, title),
            react_1.default.createElement("span", { className: "message" }, message),
            react_1.default.createElement("div", { className: "expire" },
                react_1.default.createElement("svg", { className: "j2dfb39 j190jqgp", focusable: "false", viewBox: "0 0 24 24", "aria-hidden": "true", role: "presentation" },
                    react_1.default.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })))));
    }
    classes() {
        let { messageType, clickExpire } = this.props;
        const cls = ['notification', messageType];
        if (clickExpire)
            cls.push('expire-click');
        return cls.join(' ');
    }
    style() {
        let { top, offset } = this.props;
        const pos = top === undefined ? offset : top;
        return { top: `${pos}px` };
    }
}
exports.Notification = Notification;
