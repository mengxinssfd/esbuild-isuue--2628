export function mergeObj<A extends object, B extends Object>(a: A, b: B): A & B {
    const result = {...a, ...b};
    for (const k in result) {
        const v = result[k];
        if (Array.isArray(v) && a[k] !== undefined) {
            result[k] = a[k].concat(b[k]);
        } else if (typeof v === 'object') {
            result[k] = {...a[k], ...b[k]};
        }
    }
    return result;
}
