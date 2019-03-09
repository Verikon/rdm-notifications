"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Get the height of an element inclusive of margins.
 * @param el HTML Element
 */
function outerHeight(el) {
    const style = getComputedStyle(el);
    return ['height', 'margin-top', 'margin-bottom']
        .map(key => parseInt(style.getPropertyValue(key), 10))
        .reduce((prev, curr) => prev + curr);
}
exports.outerHeight = outerHeight;
