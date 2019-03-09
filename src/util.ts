
/**
 * Get the height of an element inclusive of margins.
 * @param el HTML Element
 */
export function outerHeight( el:HTMLElement ) {

    const style = getComputedStyle(el);
    return ['height', 'margin-top', 'margin-bottom']
        .map(key => parseInt(style.getPropertyValue(key), 10))
        .reduce((prev, curr) => prev+curr);
}