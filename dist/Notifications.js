"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../style/index.scss");
const react_1 = __importStar(require("react"));
const redux_dynamic_modules_1 = require("redux-dynamic-modules");
const store_1 = require("./store");
class Notifications extends react_1.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (react_1.default.createElement(redux_dynamic_modules_1.DynamicModuleLoader, { modules: [store_1.getNotificationsModule()] },
            react_1.default.createElement("div", { className: "rdm-notifications" },
                react_1.default.createElement("b", null, "Imported"))));
    }
}
exports.Notifications = Notifications;
