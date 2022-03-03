"use strict";
exports.__esModule = true;
var head_1 = require("next/head");
var navigationbar_1 = require("../components/navigationbar");
function MainLayout(_a) {
    var children = _a.children;
    return (React.createElement(React.Fragment, null,
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "Brevas Majalah"),
            React.createElement("meta", { name: "description", content: "Brevas Majula home page" }),
            React.createElement("link", { rel: "icon", href: "/favicon.ico" })),
        React.createElement("div", null,
            React.createElement(navigationbar_1["default"], null),
            children)));
}
exports["default"] = MainLayout;
