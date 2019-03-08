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
class Notification extends react_1.Component {
    render() {
        const { title, message, level } = this.props;
        return (react_1.default.createElement("div", { className: this.classes() },
            react_1.default.createElement("span", { className: "title" }, title),
            react_1.default.createElement("span", { className: "message" }, message)));
    }
    classes() {
        let { level } = this.props;
        level = level || 'info';
        return ['notification', level].join(' ');
    }
}
exports.Notification = Notification;
