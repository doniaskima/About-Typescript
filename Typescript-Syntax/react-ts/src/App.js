"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header_1 = __importDefault(require("./Header"));
require("./App.css");
function App() {
    return (<div className="App">
    <Header_1.default title="Helli Typescript" color="red"/>
    </div>);
}
exports.default = App;
