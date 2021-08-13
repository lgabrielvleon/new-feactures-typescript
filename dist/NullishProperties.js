"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NullishProperties = () => {
    const foo = null !== null && null !== void 0 ? null : 'HelloWorld'; // 'HelloWorld'
    console.info(foo);
    const bar = '' !== null && '' !== void 0 ? '' : 'HelloWorld'; // Nothing to display
    console.info(bar);
};
exports.default = NullishProperties;
//# sourceMappingURL=NullishProperties.js.map