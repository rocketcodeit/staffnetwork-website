"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/teamMember";
exports.ids = ["pages/api/teamMember"];
exports.modules = {

/***/ "(api)/./pages/api/teamMember/index.ts":
/*!***************************************!*\
  !*** ./pages/api/teamMember/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst team = [\n    {\n        name: \"Nicola\",\n        surname: \"Ciano\",\n        img: \"/assets/img/person1.png\",\n        profession: \"UX Designer\"\n    },\n    {\n        name: \"Ignazio\",\n        surname: \"Catanzaro\",\n        img: \"/assets/img/person1.png\",\n        profession: \"Capo Supremo\"\n    },\n    {\n        name: \"Nicola\",\n        surname: \"Ciano\",\n        img: \"/assets/img/person1.png\",\n        profession: \"UX Designer\"\n    },\n    {\n        name: \"Ignazio\",\n        surname: \"Catanzaro\",\n        img: \"../assets/img/person1.png\",\n        profession: \"Capo Supremo\"\n    },\n    {\n        name: \"Nicola\",\n        surname: \"Ciano\",\n        img: \"/assets/img/person1.png\",\n        profession: \"UX Designer\"\n    },\n    {\n        name: \"Ignazio\",\n        surname: \"Catanzaro\",\n        img: \"/assets/img/person1.png\",\n        profession: \"Capo Supremo\"\n    },\n    {\n        name: \"Nicola\",\n        surname: \"Ciano\",\n        img: \"/assets/img/person1.png\",\n        profession: \"UX Designer\"\n    },\n    {\n        name: \"Ignazio\",\n        surname: \"Catanzaro\",\n        img: \"/assets/img/person1.png\",\n        profession: \"Capo Supremo\"\n    }\n];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{\n    const { limit  } = req.query;\n    res.status(200).json(Array.isArray(limit) || !limit ? team : team.slice(0, +limit));\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdGVhbU1lbWJlci9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBR0EsTUFBTUEsT0FBdUI7SUFDekI7UUFBRUMsTUFBTztRQUFXQyxTQUFVO1FBQVVDLEtBQUs7UUFBMkJDLFlBQVk7SUFBYztJQUNsRztRQUFFSCxNQUFPO1FBQVlDLFNBQVU7UUFBY0MsS0FBSztRQUEyQkMsWUFBWTtJQUFlO0lBQ3hHO1FBQUVILE1BQU87UUFBV0MsU0FBVTtRQUFVQyxLQUFLO1FBQTJCQyxZQUFZO0lBQWM7SUFDbEc7UUFBRUgsTUFBTztRQUFZQyxTQUFVO1FBQWNDLEtBQUs7UUFBNkJDLFlBQVk7SUFBZTtJQUMxRztRQUFFSCxNQUFPO1FBQVdDLFNBQVU7UUFBVUMsS0FBSztRQUEyQkMsWUFBWTtJQUFjO0lBQ2xHO1FBQUVILE1BQU87UUFBWUMsU0FBVTtRQUFjQyxLQUFLO1FBQTJCQyxZQUFZO0lBQWU7SUFDeEc7UUFBRUgsTUFBTztRQUFXQyxTQUFVO1FBQVVDLEtBQUs7UUFBMkJDLFlBQVk7SUFBYztJQUNsRztRQUFFSCxNQUFPO1FBQVlDLFNBQVU7UUFBY0MsS0FBSztRQUEyQkMsWUFBWTtJQUFlO0NBQzNHO0FBR0QsaUVBQWUsQ0FBQ0MsS0FBcUJDLE1BQXlCO0lBQzFELE1BQU0sRUFBQ0MsTUFBSyxFQUFDLEdBQUdGLElBQUlHLEtBQUs7SUFFekJGLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNDLE1BQU1DLE9BQU8sQ0FBQ0wsVUFBVSxDQUFDQSxRQUFRUCxPQUFPQSxLQUFLYSxLQUFLLENBQUMsR0FBRSxDQUFDTixNQUFNO0FBQ3JGLEdBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFmZm5ldHdvcmstd2Vic2l0ZS8uL3BhZ2VzL2FwaS90ZWFtTWVtYmVyL2luZGV4LnRzPzIxOTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IHtJVGVhbU1lbWJlcn0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9JVGVhbU1lbWJlclwiO1xyXG5cclxuY29uc3QgdGVhbSA6IElUZWFtTWVtYmVyW10gPSBbXHJcbiAgICB7IG5hbWUgOiBcIk5pY29sYVwiICwgc3VybmFtZSA6IFwiQ2lhbm9cIiAsIGltZyA6XCIvYXNzZXRzL2ltZy9wZXJzb24xLnBuZ1wiLCBwcm9mZXNzaW9uOiBcIlVYIERlc2lnbmVyXCIgfSxcclxuICAgIHsgbmFtZSA6IFwiSWduYXppb1wiICwgc3VybmFtZSA6IFwiQ2F0YW56YXJvXCIgLCBpbWcgOlwiL2Fzc2V0cy9pbWcvcGVyc29uMS5wbmdcIiwgcHJvZmVzc2lvbjogXCJDYXBvIFN1cHJlbW9cIiB9LFxyXG4gICAgeyBuYW1lIDogXCJOaWNvbGFcIiAsIHN1cm5hbWUgOiBcIkNpYW5vXCIgLCBpbWcgOlwiL2Fzc2V0cy9pbWcvcGVyc29uMS5wbmdcIiwgcHJvZmVzc2lvbjogXCJVWCBEZXNpZ25lclwiIH0sXHJcbiAgICB7IG5hbWUgOiBcIklnbmF6aW9cIiAsIHN1cm5hbWUgOiBcIkNhdGFuemFyb1wiICwgaW1nIDpcIi4uL2Fzc2V0cy9pbWcvcGVyc29uMS5wbmdcIiwgcHJvZmVzc2lvbjogXCJDYXBvIFN1cHJlbW9cIiB9LFxyXG4gICAgeyBuYW1lIDogXCJOaWNvbGFcIiAsIHN1cm5hbWUgOiBcIkNpYW5vXCIgLCBpbWcgOlwiL2Fzc2V0cy9pbWcvcGVyc29uMS5wbmdcIiwgcHJvZmVzc2lvbjogXCJVWCBEZXNpZ25lclwiIH0sXHJcbiAgICB7IG5hbWUgOiBcIklnbmF6aW9cIiAsIHN1cm5hbWUgOiBcIkNhdGFuemFyb1wiICwgaW1nIDpcIi9hc3NldHMvaW1nL3BlcnNvbjEucG5nXCIsIHByb2Zlc3Npb246IFwiQ2FwbyBTdXByZW1vXCIgfSxcclxuICAgIHsgbmFtZSA6IFwiTmljb2xhXCIgLCBzdXJuYW1lIDogXCJDaWFub1wiICwgaW1nIDpcIi9hc3NldHMvaW1nL3BlcnNvbjEucG5nXCIsIHByb2Zlc3Npb246IFwiVVggRGVzaWduZXJcIiB9LFxyXG4gICAgeyBuYW1lIDogXCJJZ25hemlvXCIgLCBzdXJuYW1lIDogXCJDYXRhbnphcm9cIiAsIGltZyA6XCIvYXNzZXRzL2ltZy9wZXJzb24xLnBuZ1wiLCBwcm9mZXNzaW9uOiBcIkNhcG8gU3VwcmVtb1wiIH0sXHJcbl07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XHJcbiAgICBjb25zdCB7bGltaXR9ID0gcmVxLnF1ZXJ5O1xyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKEFycmF5LmlzQXJyYXkobGltaXQpIHx8ICFsaW1pdCA/IHRlYW0gOiB0ZWFtLnNsaWNlKDAsK2xpbWl0KSApO1xyXG59Il0sIm5hbWVzIjpbInRlYW0iLCJuYW1lIiwic3VybmFtZSIsImltZyIsInByb2Zlc3Npb24iLCJyZXEiLCJyZXMiLCJsaW1pdCIsInF1ZXJ5Iiwic3RhdHVzIiwianNvbiIsIkFycmF5IiwiaXNBcnJheSIsInNsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/teamMember/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/teamMember/index.ts"));
module.exports = __webpack_exports__;

})();